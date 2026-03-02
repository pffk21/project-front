import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;