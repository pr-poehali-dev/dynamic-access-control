import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на торт на почту владельца"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '')
    phone = body.get('phone', '')
    date = body.get('date', '')
    type_ = body.get('type', '')
    message = body.get('message', '')

    smtp_user = 'irenarodi@rambler.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на торт от {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <h2>Новая заявка на торт 🐱</h2>
    <table style="border-collapse:collapse;width:100%;max-width:500px">
      <tr><td style="padding:8px;font-weight:bold;color:#555">Имя:</td><td style="padding:8px">{name}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Телефон:</td><td style="padding:8px">{phone}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Дата праздника:</td><td style="padding:8px">{date}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Тип торта:</td><td style="padding:8px">{type_ or 'Не указан'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Пожелания:</td><td style="padding:8px">{message or 'Не указаны'}</td></tr>
    </table>
    """
    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.rambler.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True}),
    }
