import React, { useState } from 'react';
import '../Css/About.css'
import logo from "./img/header_vector.svg"
import { Helmet } from 'react-helmet';

const About = () =>{
    return(
        <header id="header">
                <div className="container">
                    <div className="header-content">
                        <div className="usp">
                        <h1>
                            Не можешь продуктивно работать на дому? <br />У нас есть решение —
                            OfficeCube
                        </h1>
                        <p>
                            Самая крупная сеть коворкингов по Москве и Санкт-Петербургу приглашает{" "}
                            <br />
                            Вас записаться на первое бесплатное посещение наших офисов
                        </p>
                        <a href="#order" className="order-button">
                            Оформить заявку
                        </a>
                        </div>
                        <div className="header-image">
                        <img data-depth="0.3" src={logo} alt="header-image" />
                        </div>
                    </div>
                    <div className="arrow-container">
                        <a href="#story" className="next">
                        <i className="fa-solid fa-angle-down" />
                        </a>
                    </div>
            </div>
            </header>      
    )
    }

export default About