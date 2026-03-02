import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isTransparent }) => {
  const bannerTags = Array(20).fill("#швидкотазручно #buy now #вседлядому ");

  return (
    <>
      <div className="top-banner">
        <div className="banner-track">
          {bannerTags.map((text, idx) => <span key={idx}>{text}</span>)}
        </div>
      </div>

      <div className={isTransparent ? "" : "page-header-wrapper"}>
        <nav className="navbar-custom">
          <div className="container-fluid px-4 px-md-5">
            <div className="d-flex justify-content-between align-items-center">
              
              <div className="d-flex align-items-center gap-4 gap-xl-5">
                <button className="icon-btn flex-column gap-1 align-items-center">
                  <i className="bi bi-list fs-3 text-dark"></i>
                  <span style={{fontSize: '0.65rem'}}>Меню</span>
                </button>
                <Link to="/" className="brand-logo">BN</Link>
                <div className="d-none d-lg-flex gap-4 gap-xl-5 ms-4">
                  <Link to="/products" className="nav-link-custom fw-bold">Товари</Link>
                  <Link to="/" className="nav-link-custom">Кімнати</Link>
                  <Link to="/" className="nav-link-custom">Дизайн</Link>
                </div>
              </div>

              <div className="d-flex align-items-center gap-4 gap-xl-5">
                <button className="icon-btn d-none d-md-flex align-items-center">
                  <i className="bi bi-geo-alt fs-5 text-dark"></i><span>Київ</span>
                </button>
                <button className="icon-btn d-none d-lg-flex align-items-center">
                  <i className="bi bi-person fs-5 text-dark"></i><span>Привіт! Увійдіть</span>
                </button>
                <div className="d-flex gap-4 ms-2">
                  <i className="bi bi-bag action-icon"></i>
                  <i className="bi bi-heart action-icon"></i>
                </div>
              </div>

            </div>

            <div className="search-container-wide">
              <div className="position-relative">
                <i className="bi bi-search position-absolute top-50 translate-middle-y search-icon"></i>
                <input type="text" className="search-bar" placeholder="Пошук..." />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;