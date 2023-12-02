import React, { useState } from 'react';
import history_full  from "./img/history_full.jpg"
import history_mid from "./img/history-mid.jpg"
import history_min from "./img/history-min.jpg"
import '../Css/About.css'


const Prem = () =>{
    return(
            <section className="story el-anim" id="story">
                <div className="container">
                    <div className="story-content">
                    <div className="story-image">
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={history_full} />
                                <source media="(max-width: 768px)" srcSet={history_min} />
                                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={history_mid} />
                                <img data-depth="0.3"  src={history_full} alt="" className="form vector" />
                            </picture>
                    </div>
                    <div className="story-text">
                        <h2>Немного нашей истории</h2>
                        <p>
                        Наша сеть коворкингов была создана в 2003 году и изначально не
                        планировалось, что это будет именно сеть. Первый офис был открыт в
                        Санкт-Петербурге на улице Ленина. На данный момент этот офис, к
                        сожалению, закрыт.
                        </p>
                        <p>
                        Основной целью нашей компании является помощь начинающим фрилансерам в
                        предоставлении удобного рабочего места и рабочей атмосферы, которая
                        позволит быстро достигнуть новых высот. Однако мы также не забываем о
                        уже состоявшихся компаниях. Таким клиентам мы предлагаем большие и
                        просторные помещения. При желании, можно арендовать даже целый этаж.
                        </p>
                        <p>
                        На данном этапе наша компания не планирует останавливаться и
                        продолжает расширяться. Уже в ближайших планх открытие офисов не
                        только в Москве и Санкт-Петербург, но и в других городах нашей
                        необъятной страны.
                        </p>
                        <div className="social">
                        <a href="https://vk.com" target="_blank">
                            <i className="fa-brands fa-vk" />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <i className="fa-brands fa-youtube" />
                        </a>
                        <a href="https://tiktok.com" target="_blank">
                            <i className="fa-brands fa-tiktok" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    )
}


export default Prem