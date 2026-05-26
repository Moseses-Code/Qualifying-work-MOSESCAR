import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="contacts-content">
          <h1>Контакты</h1>
          <div className="contacts-grid">
            <div className="contact-info">
              <h2>Наши контакты</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Адрес</strong>
                  <p>г. Новочеркасск, ул. Дубовского 3</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Телефон</strong>
                  <p>+7 (993) 846-86-44</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p>mosescars@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <strong>Время работы</strong>
                  <p>Пн-Пт: 9:00-20:00<br />Сб-Вс: 10:00-15:00</p>
                </div>
              </div>

              <div className="map-placeholder">
                <h3>Мы на карте</h3>
                <div className="map">
                  нету карты.
                  украли.
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Обратная связь</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ваш email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ваш телефон"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ваше сообщение"
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;