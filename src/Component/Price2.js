import React, { useState } from 'react';
import logo from "./img/header_vector.svg"
import '../Css/About.css'


const Price2 = () =>{
    return(
        <section className="price el-anim" id="price">
            <div className="container">
                <h2>Стоимость наших услуг</h2>
                <div className="price-content">
                <div className="price-item el-anim">
                    <span className="item-name">Дневной</span>
                    <div className="item-content">
                    <span className="item-price">Бесплатно</span>
                    <p className="item-text">
                        Первое посещение нашей сети коворкингов обойдется вам ровно в 0
                        рублей
                    </p>
                    <a href="#order" className="order-button">
                        Оформить заявку
                    </a>
                    </div>
                </div>
                <div className="price-item el-anim">
                    <span className="item-name">Месячный</span>
                    <div className="item-content">
                    <span className="item-price">19 990 ₽</span>
                    <p className="item-text">
                        Месячный абонемент открывает для Вас двери ко всем нашим офисам в
                        любой день
                    </p>
                    <a href="#order" className="order-button">
                        Оплатить
                    </a>
                    </div>
                </div>
                <div className="price-item el-anim">
                    <span className="item-name">Годовой</span>
                    <div className="item-content">
                    <span className="item-price">169 990 ₽</span>
                    <p className="item-text">
                        Годовой абонемент открывает для Вас двери ко всем нашим офисам в
                        любой день недели
                    </p>
                    <a href="#order" className="order-button">
                        Оплатить
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}
    
export default Price2