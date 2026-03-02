import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* === КОНТЕЙНЕР ДЛЯ ФОНОВОЇ КАРТИНКИ ТА ГРАДІЄНТА === */}
      <div className="hero-bg-wrapper">
        
        {/* Хедер у прозорому режимі */}
        <Header isTransparent={true} />

        {/* Головний банер (Hero Section) */}
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
              style={{ backgroundImage: `url(/images/variant-${item}.jpg)` }}
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

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Home;