import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Katalog from './pages/Katalog/Katalog'
import Dastavka from './pages/Dastavka/Dastavka'
import Navbar from './components/Navbar/Navbar'
import NotDFound from './pages/NotFound/NotDFound'


function App() {

  return (
    <>
      < Header about = {["+ 375 736 463 64 72", "/", "+ 375 736 463 64 72"]} />
      <Navbar />
      <Routes>
        <Route path='/' element = { < Home />}/>
        <Route path='/katalog' element = { < Katalog />}/>
        <Route path='/dostavka' element = { < Dastavka />}/>
        <Route path='/contact' element = { < Contact   />}/>
        <Route path='*' element = { < NotDFound   />}/>
      </Routes>
      < Footer information = {["Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.", "УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299{``}", "Политика конфиденциальности"]} menu = {["Главная | Каталог | Товары в наличии", "кидки | Популярное | Вдохновение", "Доставка | Услуги | Условия", "Контакты | Вставить | Cписок покупок", "Корзина | Личный кабинет | Избранное"]} contact = {["г.Минск", "Ул. Первомайская, Д. 1, Кв. 43", "+ 375 434 847 28 84", "+ 375 448 473 09 48", "ikeaekspress@gmail.com"]} />
    </>
  )
}

export default App
