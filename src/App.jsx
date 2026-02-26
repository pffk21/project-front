import React from 'react';
import './App.css';

function App() {
  const bannerTags = Array(20).fill("#швидкотазручно #buy now #вседлядому ");

  return (
    <div>
      {/* 1. Верхня стрічка (Окремо зверху, щоб не перекривалася картинкою) */}
      <div className="top-banner">
        <div className="banner-track">
          {bannerTags.map((text, idx) => (
            <span key={idx}>{text}</span>
          ))}
        </div>
      </div>

      {/* === КОНТЕЙНЕР ДЛЯ ФОНОВОЇ КАРТИНКИ ТА ГРАДІЄНТА === */}
      <div className="hero-bg-wrapper">
        
        {/* 2. Навігація */}
        <nav className="navbar-custom">
          <div className="container-fluid px-4 px-md-5">
            
            {/* Верхній рядок навігації */}
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Ліва частина */}
              <div className="d-flex align-items-center gap-4 gap-xl-5">
                <button className="icon-btn flex-column gap-1 align-items-center">
                  <i className="bi bi-list fs-3 text-dark"></i>
                  <span style={{fontSize: '0.65rem'}}>Меню</span>
                </button>
                
                 <a href="/" className="brand-logo">
  <img src="/images/Union.png" alt="BN logo" />
</a>
                
                <div className="d-none d-lg-flex gap-4 gap-xl-5 ms-4">
                  <span className="nav-link-custom">Товари</span>
                  <span className="nav-link-custom">Кімнати</span>
                  <span className="nav-link-custom">Дизайн</span>
                </div>
              </div>

              {/* Права частина */}
              <div className="d-flex align-items-center gap-4 gap-xl-5">
                <button className="icon-btn d-none d-md-flex align-items-center">
                  <i className="bi bi-geo-alt fs-5 text-dark"></i>
                  <span>Київ</span>
                </button>
                
                <button className="icon-btn d-none d-lg-flex align-items-center">
                  <i className="bi bi-person fs-5 text-dark"></i>
                  <span>Привіт! Увійдіть В Систему</span>
                </button>
                
                <div className="d-flex gap-4 ms-2">
                  <i className="bi bi-bag action-icon"></i>
                  <i className="bi bi-heart action-icon"></i>
                </div>
              </div>

            </div>

            {/* Нижній рядок: Широкий пошук */}
            <div className="search-container-wide">
              <div className="position-relative">
                <i className="bi bi-search position-absolute top-50 translate-middle-y search-icon"></i>
                <input type="text" className="search-bar" placeholder="Пошук" />
              </div>
            </div>

          </div>
        </nav>

        {/* 3. Головний банер (Hero Section) */}
        <section className="hero-section">
          <h1 className="hero-title">СТВОРИ ДИЗАЙН<br/>СВОЄЇ МРІЇ</h1>
          
          <div className="hero-features-container z-1">
            <div className="feature-box">
              <i className="bi bi-tools"></i>
              <h6>СТВОРИ ДИЗАЙН</h6>
              <p>habitasse consequat egestas lectus blandit</p>
            </div>
            <div className="feature-box">
              <i className="bi bi-intersect"></i>
              <h6>КОМБІНУЙ ІДЕЇ</h6>
              <p>habitasse consequat egestas lectus blandit</p>
            </div>
            <div className="feature-box">
              <i className="bi bi-box-seam"></i>
              <h6>РЕЗУЛЬТАТ</h6>
              <p>habitasse consequat egestas lectus blandit</p>
            </div>
          </div>

          <div className="ideas-block text-center">
            <h4 className="text-uppercase fw-bold">Втілюй свої ідеї</h4>
            <p>
              lorem ipsum dolor sit amet consectetur. habitasse consequat egestas lectus
              blandit consequat. a sed placerat sapien amet scelerisque ullamcorper amet.
              elementum consequat risus nullam
            </p>
          </div>
        </section>

      </div>
      {/* === КІНЕЦЬ КОНТЕЙНЕРА З ФОНОМ === */}

      {/* 4. Секція: 3 Картки + 1 Широка */}
      <section className="container section-spacing">
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card-wrapper">
              <div className="img-placeholder img-style" style={{ height: '320px' }}></div>
              <div className="card-content">
                <h5 className="text-uppercase">ЯК ОБРАТИ СТИЛЬ</h5>
                <p>lorem ipsum dolor sit amet consectetur. habitasse consequat egestas lectus blandit consequat. a sed placerat sapien amet...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-wrapper">
              <div className="img-placeholder img-tips" style={{ height: '320px' }}></div>
              <div className="card-content">
                <h5 className="text-uppercase">НАШІ ПОРАДИ</h5>
                <p>lorem ipsum dolor sit amet consectetur. habitasse consequat egestas lectus blandit consequat. a sed placerat sapien amet...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-wrapper">
              <div className="img-placeholder img-plan" style={{ height: '320px' }}></div>
              <div className="card-content">
                <h5 className="text-uppercase">ЯК СПЛАНУВАТИ</h5>
                <p>lorem ipsum dolor sit amet consectetur. habitasse consequat egestas lectus blandit consequat. a sed lorem ipsum dolor sit amet consectetur. habitasse placerat sapien amet...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Одна широка картка */}
        <div className="wide-card">
          <div className="wide-card-img"></div>
          <div className="wide-card-body">
            <h5 className="text-uppercase">ІНФОРМАЦІЯ</h5>
            <p>lorem ipsum dolor sit amet consectetur. bibendum neque at am integer integer. tempus a mi in enim dui rhoncus vulputate nulla et. ornare sed cursus lorem ipsum dolor sit amet consectetur. bibendum neque at am integer integer. tempus a mi in enim dui rhoncus vulputate nulla et. ornare sed cursus sed viverra.</p>
          </div>
        </div>
      </section>

      {/* 5. Варіанти оформлення */}
<section className="container section-spacing variants-container">
  <h5 className="section-title">ВАРІАНТИ ОФОРМЛЕННЯ</h5>

  <div className="variants-scroll">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="variant-item"
        style={{
          backgroundImage: `url(/images/variant-${item}.jpg)`
        }}
      >
        <div className="variant-pill">НАЗВА НАБОРУ</div>
      </div>
    ))}
  </div>

  <button className="scroll-next-btn shadow-sm">
    <i className="bi bi-chevron-right"></i>
  </button>
</section>

      {/* 6. Поради */}
      <section className="container section-spacing">
        <h5 className="section-title">ПОРАДИ</h5>
        
        <div className="wide-card mb-5">
          <div className="wide-card-img tips-dark tips-1"></div>
          <div className="wide-card-body">
            <h5 className="text-uppercase">ІНФОРМАЦІЯ</h5>
            <p>lorem ipsum dolor sit amet consectetur. bibendum neque at am integer integer. tempus a mi in enim dui rhoncus vulputate nulla et. ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. bibendum neque at am integer integer. tempus a mi in enim dui rhoncus vulputate nulla et.<br/><br/>ornare sed cursus sed viverra.lorem ipsum dolor sit amet consectetur. bibendum neque at am integer integer. tempus a mi in enim dui rhoncus vulputate nulla et. ornare sed cursus sed viverra.</p>
          </div>
        </div>

        <div className="wide-card">
          <div className="wide-card-img tips-dark tips-2"></div>
          <div className="wide-card-body">
            <h5 className="text-uppercase">ІНФОРМАЦІЯ</h5>
            <p>lorem ipsum dolor sit amet consectetur. bibendum neque at am integer integer. tempus a mi in enim dui rhoncus vulputate nulla et. ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. bibendum neque at am integer integer. tempus a mi in enim dui rhoncus vulputate nulla et. ornare sed cursus sed viverra.</p>
          </div>
        </div>
      </section>

      {/* 7. Футер */}
      <footer className="footer-section">
        <div className="container">
          
          {/* Списки посилань */}
          <div className="row mb-5">
            {[1, 2, 3, 4].map((col) => (
              <div className="col-md-3" key={col}>
                <h6 className="footer-title">Заголовок підрозділу</h6>
                <a href="#" className="footer-link">Зміст підтеми</a>
                <a href="#" className="footer-link">Зміст підтеми</a>
                <a href="#" className="footer-link">Зміст підтеми</a>
                <a href="#" className="footer-link">Зміст підтеми</a>
                <a href="#" className="footer-link">Зміст підтеми</a>
                {col === 1 && (
                   <>
                    <a href="#" className="footer-link">Зміст підтеми</a>
                    <a href="#" className="footer-link">Зміст підтеми</a>
                    <a href="#" className="footer-link">Зміст підтеми</a>
                   </>
                )}
              </div>
            ))}
          </div>

          {/* Соцмережі та Оплата */}
          <div className="row align-items-center footer-middle-row">
            <div className="col-md-5 d-flex justify-content-center justify-content-md-start footer-social-icons mb-4 mb-md-0">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-telegram"></i>
            </div>
            <div className="col-md-7">
              <div className="payment-icons justify-content-center justify-content-md-end">
                <img src="/images/logos_visa.png" alt="Visa" className="payment-icon-img" />
                <img src="/images/logos_mastercard.svg.webp" alt="Mastercard" className="payment-icon-img" />
                <img src="/images/logos_maestro.svg" alt="Maestro" className="payment-icon-img" />
                <img src="/images/logos_paypal.png" alt="PayPal" className="payment-icon-img" />
                <img src="/images/logos_apple_pay.png" alt="Apple Pay" className="payment-icon-img" />
              </div>
            </div>
          </div>

          {/* Нижній рядок */}
          <div className="row align-items-center footer-bottom-row">
            <div className="col-auto">
              <div className="scroll-top-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <i className="bi bi-chevron-up"></i>
              </div>
            </div>
            <div className="col d-flex flex-column flex-md-row justify-content-between align-items-center ms-4">
              <span className="footer-bottom-link mb-3 mb-md-0">Заголовок підрозділу (© 2026)</span>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Заголовок підрозділу</a>
                <a href="#" className="footer-bottom-link">Заголовок підрозділу</a>
                <a href="#" className="footer-bottom-link">Заголовок підрозділу</a>
                <a href="#" className="footer-bottom-link">Заголовок підрозділу</a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;