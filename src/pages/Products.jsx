import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Products.css';

const Products = () => {
  return (
    <div>
      <Header isTransparent={false} />

      <main className="container-fluid px-4 px-md-5 products-page-container">
        
        {/* --- 1. ТОВАРИ (Карусель) --- */}
        <section className="categories-wrapper">
          <h2 className="page-section-title">ТОВАРИ</h2>
          <div className="categories-carousel">
            {/* Картинки 1-6 */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                className="cat-card" 
                key={item}
                style={{ backgroundImage: `url('/images/image-${item}.jpg')` }}
              >
                <div className="cat-pill">НАЗВА НАБОРУ</div>
              </div>
            ))}
            <button className="scroll-next-btn shadow" style={{top: '45%'}}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <a href="#" className="more-categories-link">дивитися більше категорій +</a>
        </section>

        {/* --- 2. ПЕРША СІТКА "ТОВАРИ З ОДНОГО НАБОРУ" (4 блоки) --- */}
        <section className="one-set-section">
          <h2 className="page-section-title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
          <p className="one-set-desc">
            lorem ipsum dolor sit amet consectetur. gravida convallis id orci egestas non. rhoncus vitae quis
            sem massa id imperdiet arcu vulputate. magna id facilisi diam arcu ipsum. magna accumsan sed
            urna non fermentum. tristique in turpis dolor in pulvinar pellentesque faucibus.
          </p>
          
          <div className="grid-layout-1">
            <div className="grid-1-row top">
              {/* Картинки 7 та 8 */}
              <div className="grid-1-box grid-1-small" style={{ backgroundImage: "url('/images/image-7.jpg')" }}></div>
              <div className="grid-1-box grid-1-large" style={{ backgroundImage: "url('/images/image-8.jpg')" }}></div>
            </div>
            <div className="grid-1-row bottom">
              {/* Картинки 9 та 10 */}
              <div className="grid-1-box grid-1-large" style={{ backgroundImage: "url('/images/image-9.jpg')" }}></div>
              <div className="grid-1-box grid-1-small" style={{ backgroundImage: "url('/images/image-10.jpg')" }}></div>
            </div>
          </div>
        </section>

        {/* --- 3. НОВИНКИ --- */}
        <section className="mb-80">
          <h2 className="page-section-title">НОВИНКИ</h2>
          <div className="grid-3-cols">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                {/* Картинки 11-13 */}
                <div 
                  className="grid-item-img"
                  style={{ backgroundImage: `url('/images/image-${item + 10}.jpg')` }}
                ></div>
                <p className="grid-item-text">
                  lorem ipsum dolor sit amet consectetur. gravida convallis id orci egestas non. rhoncus vitae quis sem.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. ЗАТИШНІ НАБОРИ --- */}
        <section className="mb-80">
          <h2 className="page-section-title">ЗАТИШНІ НАБОРИ</h2>
          <div className="grid-3-cols">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                {/* Картинки 14-16 */}
                <div 
                  className="grid-item-img"
                  style={{ backgroundImage: `url('/images/image-${item + 13}.jpg')` }}
                ></div>
                <p className="grid-item-text">
                  lorem ipsum dolor sit amet consectetur. gravida convallis id orci egestas non. rhoncus vitae quis sem.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. ДРУГА СІТКА "ТОВАРИ З ОДНОГО НАБОРУ" (4 блоки) --- */}
        <section className="one-set-section">
          <h2 className="page-section-title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
          <p className="one-set-desc">
            lorem ipsum dolor sit amet consectetur. dignissim urna cras tempor tristique non pulvinar libero non. 
            odio velit rhoncus nec tellus non pellentesque ullamcorper enim aenean. 
          </p>
          
          <div className="grid-layout-2">
            {/* Ліва колонка: Високий -> Низький */}
            <div className="grid-2-col">
              <div className="grid-2-box box-tall" style={{ backgroundImage: "url('/images/image-17.jpg')" }}></div>
              <div className="grid-2-box box-short" style={{ backgroundImage: "url('/images/image-18.jpg')" }}></div>
            </div>
            
            {/* Права колонка: Низький -> Високий */}
            <div className="grid-2-col">
              <div className="grid-2-box box-short" style={{ backgroundImage: "url('/images/image-19.jpg')" }}></div>
              <div className="grid-2-box box-tall" style={{ backgroundImage: "url('/images/image-20.jpg')" }}></div>
            </div>
          </div>
        </section>

        {/* --- 6. ІНФО-БЛОКИ (Доставка, Оплата...) --- */}
        <section className="features-row">
          <div className="feature-block">
            <i className="bi bi-box-seam"></i>
            <h6>Доставка</h6>
            <p>lorem ipsum dolor sit amet<br/>consectetur. egestas viverra</p>
          </div>
          <div className="feature-block">
            <i className="bi bi-credit-card"></i>
            <h6>Оплата</h6>
            <p>lorem ipsum dolor sit amet<br/>consectetur. egestas viverra</p>
          </div>
          <div className="feature-block">
            <i className="bi bi-briefcase"></i>
            <h6>Організація</h6>
            <p>lorem ipsum dolor sit amet<br/>consectetur. egestas viverra</p>
          </div>
          <div className="feature-block">
            <i className="bi bi-journal-check"></i>
            <h6>Планування</h6>
            <p>lorem ipsum dolor sit amet<br/>consectetur. egestas viverra</p>
          </div>
        </section>

        {/* --- 7. ТЕКСТОВІ РОЗДІЛИ --- */}
        <section>
          {[1, 2, 3].map((item) => (
            <div className="seo-text-section" key={item}>
              <h4>НАЗВА РОЗДІЛУ</h4>
              <p>
                lorem ipsum dolor sit amet consectetur. habitasse consequat egestas lectus blandit consequat. a sed placerat sapien amet scelerisque
                ullamcorper amet. elementum consequat risus nullam augue lorem turpis rutrum enim. sagittis magnis adipiscing non pulvinar ut lacus et
                montes molestie.
              </p>
              <p>
                sed id scelerisque. ipsum cras vivamus sit ultrices pulvinar. aliquam donec leo aliquam ornare in enim proin proin eget. pellentesque
                tempus eget viverra volutpat nunc hac.
              </p>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Products;