import React, { useState, useEffect } from 'react';
import { carsData } from '../../data/carsData';
import './Catalog.css';

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const savedCars = localStorage.getItem('carShopCars');
    setCars(savedCars ? JSON.parse(savedCars) : carsData);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <h1>Каталог автомобилей</h1>
        <p className="catalog-subtitle">Найдено {cars.length} автомобилей</p>
        
        <div className="cars-grid">
          {cars.map(car => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={`${car.brand} ${car.model}`} className="car-image" />
              <div className="car-info">
                <h3>{car.brand} {car.model}</h3>
                <p><strong>Год:</strong> {car.year}</p>
                <p><strong>Цена:</strong> {car.price.toLocaleString('ru-RU')} ₽</p>
                <p className="car-description">{car.description}</p>
                <div className="car-actions">
                  <button className="details-btn">Подробнее</button>
                  <button className="buy-btn">Купить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;