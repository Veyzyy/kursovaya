import React, { useState } from 'react';
import logo from "./img/header_vector.svg"
import '../Css/About.css'


const Sviaz = () =>{
return(
    <section className="contant el-anim" id="contact">
        <div className="container">
            <h2>Где найти и как связаться</h2>
            <div className="contact-content">
            <div className="contact-info">
                <div className="city-info">
                <div className="choose-city">
                    <a href="#" className="citybutton">
                    Москва
                    </a>
                    <a href="#" className="citybutton active">
                    Санкт-Петебург
                    </a>
                </div>
                <div className="data">
                    <div className="phones">
                    <h3>Телефоны</h3>
                    <p>+7 (495) 177-94-58</p>
                    <p>+7 (495) 177-94-59</p>
                    </div>
                    <div className="mail">
                    <h3>Почта</h3>
                    <a href="mailto:OfficeCubeSPB@gmail.com">
                        OfficeCubeSPB@gmail.com
                    </a>
                    </div>
                    <div className="soc">
                    <h3>Соцсети</h3>
                    <a href="vk.com/officecubespb" target="_blank">
                        vk.com/officecubespb
                    </a>
                    <a href="youtube.com/officecubespb" target="_blank">
                        youtube.com/officecubespb
                    </a>
                    <a href="tiktok.com/officecubespb" target="_blank">
                        tiktok.com/officecubespb
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="map-image">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5653.617113272174!2d30.36534124119026!3d59.93453990062565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631bd1cd21521%3A0x1bb09697ec3c42a1!2z0JrQvtCy0L7RgNC60LjQvdCzINCf0YDQsNC60YLQuNC6!5e0!3m2!1sru!2sru!4v1653218283495!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
        </div>
    </section>
    )
}
    
export default Sviaz