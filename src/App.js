import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Admin from './pages/Admin/Admin';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);

  // Функция для входа в админку
  const handleLogin = () => {
    const password = prompt('Введите пароль для доступа к админке:');
    if (password === 'admin123') {
      setIsAdmin(true);
      setCurrentPage('admin');
      alert('Добро пожаловать в панель администратора!');
    } else if (password) {
      alert('Неверный пароль! Попробуйте снова.');
    }
  };

  // Функция для выхода из админки
  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentPage('home');
    alert('Вы вышли из панели администратора');
  };

  // Рендер текущей страницы
  const renderPage = () => {
    switch(currentPage) {
      case 'catalog':
        return <Catalog />;
      case 'about':
        return <About />;
      case 'contacts':
        return <Contacts />;
      case 'admin':
        return <Admin isAdmin={isAdmin} handleLogin={handleLogin} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isAdmin={isAdmin}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;