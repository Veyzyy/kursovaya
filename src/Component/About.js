import React, { useState } from 'react';
import '../Css/About.css'
import history_full from "./img/gif1.gif"
import history_mid from "./img/gif1.gif"
import history_min from "./img/gif1.gif"
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
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={history_full} />
                                <source media="(max-width: 768px)" srcSet={history_mid} />
                                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={history_min} />
                            <img data-depth="0.3"  src={history_full} alt="" className="form vector" />
                            </picture>
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