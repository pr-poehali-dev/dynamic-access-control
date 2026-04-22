import React from 'react';

const SEND_ORDER_URL = 'https://functions.poehali.dev/7c379040-f9be-40ef-92cf-365b9a729e81';

export default function Index() {
  const [sending, setSending] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert(`Спасибо, ${data.name}! Заявка отправлена, мы свяжемся с вами в ближайшее время 🐱`);
        form.reset();
      } else {
        alert('Не удалось отправить заявку. Попробуйте позже.');
      }
    } catch {
      alert('Ошибка соединения. Попробуйте позже.');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/bucket/a206f501-6a79-4a1a-9994-de269686ba50.jpg"
            alt="Тортик от Котика"
            style={{ height: "52px", width: "52px", objectFit: "contain", borderRadius: "50%" }}
          />
          ТОРТИК*ОТ*КОТИКА
        </div>
        <nav>
          <a href="#">Торты</a>
          <a href="#">О нас</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать торт</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ТОРТЫ,
              <br />
              КОТОРЫЕ <span>ПОМНЯТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Авторские торты на заказ — каждый создаётся вручную под ваш праздник. Никаких шаблонов, только ваша история в креме и бисквите.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Оставить заявку
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть работы
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/fcdffba7-057e-4d86-90ed-96ad87e7f0dd.jpg")`,
            }}
          >
            <div className="sticker">
              ТОЛЬКО
              <br />
              РУЧНАЯ
              <br />
              РАБОТА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #АВТОРСКИЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С ЛЮБОВЬЮ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ТОРТЫ ПОД ЗАКАЗ * СВАДЬБА * ДЕНЬ РОЖДЕНИЯ * ДЕТСКИЕ ПРАЗДНИКИ * КОРПОРАТИВЫ * ТОЛЬКО РУЧНАЯ РАБОТА *
            ТОРТЫ ПОД ЗАКАЗ * СВАДЬБА * ДЕНЬ РОЖДЕНИЯ * ДЕТСКИЕ ПРАЗДНИКИ * КОРПОРАТИВЫ * ТОЛЬКО РУЧНАЯ РАБОТА
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ ТОРТЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все работы
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит заказов</span>
              <img
                src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/6bd29ab5-9b32-4bdc-a250-33392a523a73.jpg"
                alt="Свадебный торт"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Свадебный</h3>
                  <span className="price">от 8 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Многоярусный торт с живыми цветами или сахарным декором. Любой вкус начинки, индивидуальный дизайн.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Для детей
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/f165428b-7313-46c7-ac45-e01a88be2071.jpg"
                alt="Детский торт"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Детский праздник</h3>
                  <span className="price">от 4 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Яркий торт с любимыми героями, без искусственных красителей. Безопасно и вкусно!</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/fcdffba7-057e-4d86-90ed-96ad87e7f0dd.jpg"
                alt="Авторский торт"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Авторский</h3>
                  <span className="price">от 3 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Торт по вашей идее или нашему дизайну. Флористика, акварель, минимализм — любой стиль.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">СДЕЛАНО С ДУШОЙ.</h2>
            <p className="vibe-text">
              Мы не просто печём торты. Мы создаём воспоминания. Каждый заказ — это диалог с вами: ваши пожелания, ваша история, ваш вкус. Студия работает только на заказ, чтобы каждый торт был единственным в своём роде.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/3cb9e05a-2e97-4ea0-8891-32319294d0b5.jpg")`,
            }}
          ></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ТОРТИК.ОТ.КОТИКА
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/6bd29ab5-9b32-4bdc-a250-33392a523a73.jpg"
                alt="Работа 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/fcdffba7-057e-4d86-90ed-96ad87e7f0dd.jpg"
                alt="Работа 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/f165428b-7313-46c7-ac45-e01a88be2071.jpg"
                alt="Работа 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d729598e-528b-4abd-bf49-e7e6e495015e/files/3cb9e05a-2e97-4ea0-8891-32319294d0b5.jpg"
                alt="Работа 4"
              />
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ background: "var(--dark)", color: "white" }}>
          <h2 className="section-title" style={{ marginBottom: "12px", textAlign: "center", color: "white" }}>
            ЗАКАЗАТЬ ТОРТ
          </h2>
          <p style={{ textAlign: "center", color: "#aaa", marginBottom: "40px", fontSize: "16px" }}>
            Расскажите о вашем празднике — мы свяжемся в течение часа
          </p>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", color: "#ccc" }}>
                  Ваше имя *
                </label>
                <input
                  name="name"
                  required
                  placeholder="Анна"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #444",
                    background: "#2a2a2a",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", color: "#ccc" }}>
                  Телефон *
                </label>
                <input
                  name="phone"
                  required
                  placeholder="+7 (___) ___-__-__"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #444",
                    background: "#2a2a2a",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", color: "#ccc" }}>
                  Дата праздника *
                </label>
                <input
                  name="date"
                  type="date"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #444",
                    background: "#2a2a2a",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", color: "#ccc" }}>
                  Тип торта
                </label>
                <select
                  name="type"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #444",
                    background: "#2a2a2a",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                  }}
                >
                  <option value="">Выберите...</option>
                  <option>Свадебный</option>
                  <option>Детский</option>
                  <option>Авторский</option>
                  <option>Корпоративный</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", color: "#ccc" }}>
                Пожелания
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Опишите желаемый дизайн, вкус, количество порций..."
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #444",
                  background: "#2a2a2a",
                  color: "white",
                  fontSize: "14px",
                  resize: "vertical",
                  outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-cta"
              style={{ background: "var(--primary)", color: "white", fontSize: "16px", padding: "16px 32px", alignSelf: "center", opacity: sending ? 0.7 : 1 }}
            >
              {sending ? 'Отправляем...' : 'Отправить заявку'}
            </button>
          </form>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ТОРТИК*ОТ*КОТИКА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Студия авторских тортов на заказ. Каждый торт — ручная работа с любовью к деталям.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Торты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Галерея
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 10:00 – 19:00</li>
            <li>Сб: 10:00 – 17:00</li>
            <li>Вс: выходной</li>
            <li style={{ marginTop: "8px", color: "var(--primary)", fontWeight: 700 }}>
              Приём заявок — онлайн
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}