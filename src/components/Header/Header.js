import React from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage, isAdmin, handleLogin, handleLogout }) => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <span className="logo-icon">⚡</span>
          <span className="logo-text">MOSESCAR</span>
        </div>

        {/* Навигация */}
        <nav className="nav">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            <span className="nav-icon">🏠</span>
            <h4 class="textMobile">Главная</h4> 
          </button>
          <button 
            className={`nav-link ${currentPage === 'catalog' ? 'active' : ''}`}
            onClick={() => setCurrentPage('catalog')}
          >
            <span className="nav-icon">🚗</span>
            <h4 class="textMobile">Каталог</h4> 
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setCurrentPage('about')}
          >
            <span className="nav-icon">ℹ️</span>
            <h4 class="textMobile">О нас</h4> 
            
          </button>
          <button 
            className={`nav-link ${currentPage === 'contacts' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contacts')}
          >
            <span className="nav-icon">📞</span>
            <h4 class="textMobile">Контакты</h4> 
            
          </button>
        </nav>

        {/* Админ кнопка */}
        <div className="header-actions">
          <button 
            className={`admin-btn ${isAdmin ? 'admin-active' : ''}`}
            onClick={isAdmin ? handleLogout : handleLogin}
          >
            <span className="admin-icon">⚙️</span>
            {isAdmin ? 'Панель' : 'Админ'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;