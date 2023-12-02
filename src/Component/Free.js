import React, { useState } from 'react';
import '../Css/About.css'
import logo from "./img/header_vector.svg"

const Free = () =>{
    return(
        <section className="order-section" id="order">
        <div className="container">
          <h2>Заявка на бесплатное посещение</h2>
          <div className="order-content">
            <form  className="order-form">
              <input type="text" name="userName" placeholder="ФИО" required="" />
              <input
                type="tel"
                name="userNumber"
                placeholder="Номер телефона"
                required=""
              />
              <input
                type="text"
                name="officeAddress"
                placeholder="Офис"
                required=""
              />
              <input
                type="date"
                name="visitDate"
                placeholder="Дата посещения"
                required=""
              />
              <input
                type="submit"
                className="order-button"
                name="confirm"
                required=""
              />
            </form>
            <div className="order-img">
              <picture>
                <source media="(min-width: 1024px)" srcSet={logo} />
                <source media="(max-width: 768px)" srcSet={logo} />
                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={logo} />
              <img data-depth="0.3"  src={logo} alt="" className="form vector" />
              </picture>
            </div>
          </div>
        </div>
      </section>
        )
    }

export default Free