import React, { useState } from 'react';
import logo from "./img/header_vector.svg"
import '../Css/About.css'

const News = () =>{
    return(
        <section className="news el-anim" id="news">
            <div className="container">
                <h2>Последние новости</h2>
                <div className="news-content">
                <div className="news-item el-anim">
                    <div className="news-img">
                    <img src="img/1_news.jpg" alt="Новость об открытии офиса" />
                    </div>
                    <span className="news-date">18 мая 2022</span>
                    <p className="news-text">
                    Открыт новый офис в Санкт-Петебурге рядом со станцией метро Ладожская,
                    рекомендуем к посещению
                    </p>
                </div>
                <div className="news-item el-anim">
                    <div className="news-img">
                    <img src="img/2_news.jpg" alt="Новость о ремонте" />
                    </div>
                    <span className="news-date">2 апреля 2022</span>
                    <p className="news-text">
                    Офис на Москвоской закрыт на ремонт, приносим извинения и дарим
                    дополнительный месяц к абонементу
                    </p>
                </div>
                <div className="news-item el-anim">
                    <div className="news-img">
                    <img src="img/3_news.jpg" alt="Где будет новый офис" />
                    </div>
                    <span className="news-date">3 мая 2022</span>
                    <p className="news-text">
                    Планируем открывать офисы в других городах. Какой город станет
                    следующим можете решить именно Вы
                    </p>
                </div>
                </div>
            </div>
        </section>
        )
    }
export default News
