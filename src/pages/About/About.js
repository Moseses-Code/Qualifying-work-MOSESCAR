import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="about-content">
          <h1>О нашем магазине</h1>
          <div className="about-grid">
            <div className="about-text">
              <p className="intro">
                <strong>MosesCar</strong> - это ведущий дилер автомобилей с многолетним опытом 
                на рынке. Мы предлагаем широкий выбор новых автомобилей от проверенных производителей.
              </p>
              
              <h2>Наши преимущества</h2>
              <div className="advantages">
                <div className="advantage-item">
                  <span className="advantage-icon">🚗</span>
                  <div>
                    <h3>Широкий выбор</h3>
                    <p>Более 50 моделей различных марок и классов</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <span className="advantage-icon">💰</span>
                  <div>
                    <h3>Лучшие цены</h3>
                    <p>Конкурентные цены и специальные предложения</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <span className="advantage-icon">✅</span>
                  <div>
                    <h3>Гарантия качества</h3>
                    <p>Все автомобили проходят тщательную проверку</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <span className="advantage-icon">🔧</span>
                  <div>
                    <h3>Сервис</h3>
                    <p>Полное сопровождение и обслуживание</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <h2>Наша статистика</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">проданных автомобилей</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">марок в наличии</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">довольных клиентов</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5 лет</div>
                  <div className="stat-label">на рынке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;