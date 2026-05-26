import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Клиентская часть подвала*/}
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">MOSESCAR</span>
            </div>
            <p className="footer-description">
  Ведущий дилер автомобилей MosesCar с гарантией качества и лучшими ценами на рынке
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Навигация</h3>
            <div className="footer-links">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Главная</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Каталог</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>О нас</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Контакты</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>г. Новочеркасск, ул. Дубовского 3</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+7 (993) 864-86-44</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>mosescars@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Пн-Пт: 10:00-18:00</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Услуги</h3>
            <div className="footer-links">
              <a href="#">Продажа авто</a>
              <a href="#">Trade-in</a>
              <a href="#">Сервис</a>
              <a href="#">Финансирование</a>
              <a href="#">Страхование</a>
            </div>
          </div>
        </div>

        {/* юр часть подвала */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 MosesCar. Все права защищены наверное, я не знаю. Я не умею защищать свои права - их защищает мое государство.
            </div>
            <div className="footer-legal">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;