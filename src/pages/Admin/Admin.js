import React, { useState, useEffect } from 'react';
import { carsData } from '../../data/carsData';
import './Admin.css';

const Admin = ({ isAdmin, handleLogin }) => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    const savedCars = localStorage.getItem('carShopCars');
    setCars(savedCars ? JSON.parse(savedCars) : carsData);
  }, []);

  const handleAddCar = (e) => {
    e.preventDefault();
    const carToAdd = {
      ...newCar,
      id: Date.now(),
      year: parseInt(newCar.year),
      price: parseInt(newCar.price)
    };
    const updatedCars = [...cars, carToAdd];
    setCars(updatedCars);
    localStorage.setItem('carShopCars', JSON.stringify(updatedCars));
    setNewCar({ brand: '', model: '', year: '', price: '', image: '', description: '' });
    alert('Автомобиль успешно добавлен!');
  };

  const handleDeleteCar = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот автомобиль?')) {
      const updatedCars = cars.filter(car => car.id !== id);
      setCars(updatedCars);
      localStorage.setItem('carShopCars', JSON.stringify(updatedCars));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Защита админ-панели
  if (!isAdmin) {
    return (
      <div className="page">
        <div className="container">
          <div className="admin-access-denied">
            <h2>Доступ запрещен</h2>
            <p>Для доступа к панели администратора требуется авторизация.</p>
            <button onClick={handleLogin} className="login-btn">
              Войти в админку
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <div className="admin-header">
          <h1>Панель администратора</h1>
          <p>Управление автомобилями в магазине</p>
        </div>

        <section className="add-car-form">
          <h2>Добавить новый автомобиль</h2>
          <form onSubmit={handleAddCar}>
            <div className="form-row">
              <input
                type="text"
                name="brand"
                value={newCar.brand}
                onChange={handleInputChange}
                placeholder="Марка автомобиля"
                required
              />
              <input
                type="text"
                name="model"
                value={newCar.model}
                onChange={handleInputChange}
                placeholder="Модель автомобиля"
                required
              />
            </div>
            
            <div className="form-row">
              <input
                type="number"
                name="year"
                value={newCar.year}
                onChange={handleInputChange}
                placeholder="Год выпуска"
                required
              />
              <input
                type="number"
                name="price"
                value={newCar.price}
                onChange={handleInputChange}
                placeholder="Цена (руб)"
                required
              />
            </div>
            
            <input
              type="url"
              name="image"
              value={newCar.image}
              onChange={handleInputChange}
              placeholder="URL изображения"
              required
            />
            
            <textarea
              name="description"
              value={newCar.description}
              onChange={handleInputChange}
              placeholder="Описание автомобиля"
              rows="4"
              required
            ></textarea>
            
            <button type="submit" className="submit-btn">
              Добавить автомобиль
            </button>
          </form>
        </section>

        <section className="admin-cars-list">
          <h2>Список автомобилей ({cars.length})</h2>
          <div className="admin-cars-grid">
            {cars.map(car => (
              <div key={car.id} className="admin-car-card">
                <img src={car.image} alt={`${car.brand} ${car.model}`} />
                <div className="admin-car-info">
                  <h3>{car.brand} {car.model}</h3>
                  <p><strong>Год:</strong> {car.year}</p>
                  <p><strong>Цена:</strong> {car.price.toLocaleString('ru-RU')} ₽</p>
                  <p className="admin-car-description">{car.description}</p>
                  <button 
                    onClick={() => handleDeleteCar(car.id)}
                    className="delete-btn"
                  >
                    Удалить автомобиль
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;