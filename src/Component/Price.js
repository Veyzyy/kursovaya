import React, { useState } from 'react';
import logo from "./img/header_vector.svg"
import '../Css/About.css'


const Price = () =>{
    return(
        <section className="benefits el-anim" id="benefits">
        <div className="container">
          <h2>Почему клиенты выбирают нас</h2>
          <div className="benefits-content">
            <div className="benefit">
              <div className="benefit-image">
                <img src={logo} alt="Еда" />
              </div>
              <p className="benefit-text">
                Вкусная и полезная кухня, а также освежающие напитки
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-image">
                <img src={logo}  alt="Доступ" />
              </div>
              <p className="benefit-text">
                Один абонемент открывает доступ во все наши офисы
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-image">
                <img src={logo}  alt="Техника" />
              </div>
              <p className="benefit-text">
                Все наши помещения оснащены современным оборудованием
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-image">
                <img src={logo}  alt="Положение" />
              </div>
              <p className="benefit-text">
                Большое количество офисов в городе с удобным расположением
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-image">
                <img src={logo}  alt="Акции" />
              </div>
              <p className="benefit-text">
                Большие скидки и разнообразные акции для постоянных клиентов
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-image">
                <img src={logo}  alt="Бронь" />
              </div>
              <p className="benefit-text">
                Онлайн бронь помещений без звонков и посещений
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Price