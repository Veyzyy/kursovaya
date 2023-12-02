import React, { useState } from 'react';
import GAL1 from "./img/1_gallery.jpg"
import GAL2 from "./img/2_gallery.jpg"
import GAL3 from "./img/3_gallery.jpg"
import GAL4 from "./img/4_gallery.jpg"
import GAL5 from "./img/5_gallery.jpg"
import GAL6 from "./img/6_gallery.jpg"
import '../Css/About.css'


const Gallery = () =>{
    return(
        <section className="gallery el-anim" id="gallery">
        <div className="container">
            <h2>Посмотрите как у нас красиво</h2>
            <div className="gallery-content">
            <div className="mini-gallery">
                <img
                data-desc="Санкт-Петербург, м. Московская, ул. Пушкина, д. 12, лит. А"
                className="mini-img active"
                src={GAL1}
                alt="1_офис"
                />
                <img
                data-desc="Санкт-Петербург, м. Ладожская, ул. Передовиков, д. 13 "
                className="mini-img"
                src={GAL2}
                alt="2_офис"
                />
                <img
                data-desc="Москва, м. Беговая, ул. Ленина, д. 25, 2 этаж"
                className="mini-img"
                src={GAL3}
                alt="3_офис"
                />
                <img
                data-desc="Санкт-Петербург, м. Адмиралтейская, ул. Большая М, д. 22"
                className="mini-img"
                src={GAL4}
                alt="4_офис"
                />
                <img
                data-desc="Москва, м. Щукинская, ул. Лермонтова, д. 1, лит. Б"
                className="mini-img"
                src={GAL5}
                alt="5_офис"
                />
                <img
                data-desc="Москва, м. Курская, ул. Простая, д. 3"
                className="mini-img"
                src={GAL6}
                alt="6_офис"
                />
            </div>
            <div
                className="full-image"
                data-desc="Санкт-Петербург, м. Московская, ул. Пушкина, д. 12, лит. А"
            >
                <img src={GAL1} alt="Офис" />
            </div>
            </div>
        </div>
        </section>  
    )
    }
    
    export default Gallery