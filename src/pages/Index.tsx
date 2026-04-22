export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ТОРТИК*ОТ*КОТИКА</div>
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