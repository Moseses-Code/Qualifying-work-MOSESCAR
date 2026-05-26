import React from 'react';
import './Home.css';

const Home = ({ setCurrentPage }) => {
const featuredCars = [
  {
    id: 1,
    brand: "BMW",
    model: "X7",
    price: "8 500 000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    type: "Luxury SUV"
  },
  {
    id: 2,
    brand: "Tesla",
    model: "Model S",
    price: "7 900 000",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    type: "Electric"
  },
  {
    id: 3,
    brand: "Porsche",
    model: "911",
    price: "9 900 000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    type: "Sports Car"
  }
];  

  const stats = [
    { number: "500+", label: "Автомобилей в наличии" },
    { number: "98%", label: "Довольных клиентов" },
    { number: "15+", label: "Брендов" },
    { number: "24/7", label: "Поддержка" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Найдите автомобиль 
                <span className="highlight"> вашей мечты</span>
              </h1>
              <p className="hero-subtitle">
                Самый большой выбор новых и премиальных автомобилей с гарантией качества и лучшими ценами на рынке
              </p>
              <div className="hero-actions">
                <button 
                  className="btn-primary"
                  onClick={() => setCurrentPage('catalog')}
                >
                  Смотреть каталог
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => setCurrentPage('about')}
                >
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Премиум подборка</h2>
            <p>Самые популярные модели этого месяца</p>
          </div>
          <div className="featured-grid">
            {featuredCars.map(car => (
              <div key={car.id} className="featured-card">
                <div className="car-image">
                  <img src={car.image} alt={`${car.brand} ${car.model}`} />
                  <div className="car-type">{car.type}</div>
                </div>
                <div className="car-info">
                  <h3>{car.brand} {car.model}</h3>
                  <div className="car-price">{car.price} ₽</div>
                  <button 
                    className="btn-outline"
                    onClick={() => setCurrentPage('catalog')}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Почему выбирают нас</h2>
            <p>Мы предлагаем лучший сервис на автомобильном рынке</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚗</div>
              <h3>Широкий выбор</h3>
              <p>Более 500 автомобилей различных марок и моделей на любой вкус и бюджет</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Лучшие цены</h3>
              <p>Гарантируем конкурентные цены и прозрачные условия покупки</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Гарантия качества</h3>
              <p>Все автомобили проходят многоуровневую проверку перед продажей</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Быстрая доставка</h3>
              <p>Доставим автомобиль в любую точку страны в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы найти свой идеальный автомобиль?</h2>
            <p>Начните поиск прямо сейчас и получите персональную консультацию</p>
            <button 
              className="btn-primary large"
              onClick={() => setCurrentPage('catalog')}
            >
              Начать поиск
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;