import React, { useState } from 'react';
import news1_full from "./img/news1_full.jpg"
import news2_full from "./img/news2_full.jpg"
import news3_full from "./img/news3_full.jpg"
import news1_mid from "./img/news1_mid.jpg"
import news2_mid from "./img/news2_mid.jpg"
import news3_mid from "./img/news3_mid.jpg"
import news1_min from "./img/news1_min.jpg"
import news2_min from "./img/news2_min.jpg"
import news3_min from "./img/news3_min.jpg"
import '../Css/About.css'

const News = () =>{
    return(
        <section className="news el-anim" id="news">
            <div className="container">
                <h2>Последние новости</h2>
                <div className="news-content">
                <div className="news-item el-anim">
                    <div className="news-img">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={news1_full} />
                        <source media="(max-width: 768px)" srcSet={news1_mid} />
                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={news1_min} />
                        <img data-depth="0.3"  src={news1_full} alt="" className="form vector" />
                    </picture>
                    </div>
                    <span className="news-date">4 ноября 2023</span>
                    <p className="news-text">
                    Открыт новый офис в Санкт-Петебурге рядом со станцией метро Ладожская,
                    рекомендуем к посещению
                    </p>
                </div>
                <div className="news-item el-anim">
                    <div className="news-img">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={news2_full} />
                        <source media="(max-width: 768px)" srcSet={news2_mid} />
                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={news2_min} />
                        <img data-depth="0.3"  src={news2_full} alt="" className="form vector" />
                    </picture>
                    </div>
                    <span className="news-date">16 октября 2023</span>
                    <p className="news-text">
                    Офис на Москвоской закрыт на ремонт, приносим извинения и дарим
                    дополнительный месяц к абонементу
                    </p>
                </div>
                <div className="news-item el-anim">
                    <div className="news-img">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={news3_full} />
                        <source media="(max-width: 768px)" srcSet={news3_mid} />
                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={news3_min} />
                        <img data-depth="0.3"  src={news3_full} alt="" className="form vector" />
                    </picture>
                    </div>
                    <span className="news-date">15 июля 2023</span>
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
