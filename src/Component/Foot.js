import React, { useState } from 'react';
import '../Css/About.css'
import logo from "./img/logotypewhite.svg"

const Foot = () =>{
    return(
        <footer>
        <div className="footer-content">
            <div className="footer-logo">
            <a href="#header">
                <img src={logo} alt="" /> <br />
            </a>
            <span>© Все права защищены</span>
            </div>
            <div className="footer-links">
            <a href="https://vk.com" target="_blank">
                Контакты
            </a>
            <a href="https://vk.com" target="_blank">
                Поддержка
            </a>
            <a href="https://vk.com" target="_blank">
                условия посещения
            </a>
            <a href="https://vk.com" target="_blank">
                Работа у нас
            </a>
            </div>
            <div className="footer-call">
            <a href="#" className="call-btn">
                <span>+7 (945) 177-94-59</span> <i className="fa-solid fa-phone" />
            </a>
            </div>
        </div>
        </footer>
    )
}

export default Foot