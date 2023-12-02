import React, { useState } from 'react';
import logo from "./img/header_vector.svg"
import '../Css/About.css'


const Prem = () =>{
    return(
            <section className="story el-anim" id="story">
                <div className="container">
                    <div className="story-content">
                    <div className="story-image">
                        <img src={logo} alt="Наша команда" />
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