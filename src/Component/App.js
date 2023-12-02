import React, { useState } from 'react';
import '../Css/App.css'
import Menu from './Menu/Menu'
import About from './About'
import Prem from './Prem'
import Price from './Price'
import Gallery from './Gallery'
import Price2 from './Price2'
import Sviaz from './Sviaz'
import News from './News'
import Free from './Free'
import Foot from './Foot'
import ChartComponent from './ChartComponent';
import { Helmet } from 'react-helmet';


const App = () =>{
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:"Главная", href: '#header'},{value:"О нас", href: '#'},{value:"Преимущества", href: '#story'},{value:"Стоимость услуг", href: '#price'},{value:"Мы на карте", href: '#contact'}]
    return(
        <div className = 'app'>

            <nav>
                    <div className ={`burger-btn ${menuActive ? 'active' : ''}`} onClick={()=> setMenuActive(!menuActive)}>
                        <span/>
                    </div>
            </nav>   
            <main>
                <About/>
                <Prem/>
                <Price/>
                <Gallery/>
                <ChartComponent/>
                <Price2/>
                <Sviaz/>
                <News/>
                <Free/>
            </main>
            <Foot/>
            <Menu active = {menuActive} setActive={setMenuActive} header={"OfficeCube"} items={items}/>
            
            <Helmet>
                <script src="./scripts/jquery.js" type="text/javascript" />
                <script type="text/javascript">
                    {`
                    (function() {
                        function onEntry(entry) {
                        entry.forEach(change => {
                            if (change.isIntersecting) {
                            change.target.classList.add('el-show');
                            }
                        });
                        }

                        let options = {
                        threshold: [0.1]
                        };
                        let observer = new IntersectionObserver(onEntry, options);
                        let elements = document.querySelectorAll('.el-anim');

                        for (let elm of elements) {
                        observer.observe(elm);
                        }
                    })();
                    `}
                    </script>     
                    <script type="text/javascript">
                    {`
                        (function() { 
                            $('.mini-img').click(function() {
                                $('.mini-img').removeClass('active');
                                $(this).addClass('active');
                                $('.full-image img').attr('src',$(this).attr('src'));
                                $('.full-image').attr('data-desc',$(this).attr('data-desc'));                      
                            })
                            let data = [
                                '+7 (495) 177-94-48',
                                '+7 (495) 177-94-49',
                                'OfficeCubeMSC@gmail.com',
                                'vk.com/officecubemsc',
                                'youtube.com/officecubemsc',
                                'tiktok.com/officecubespb'
                            ];
                            
                            let frame = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9593666059095!2d37.66292398845587!3d55.759208061846635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a8e8d4f2351%3A0xf03bb905ad50d44a!2sArma%20Coworking!5e0!3m2!1sru!2sru!4v1653283342062!5m2!1sru!2sru';
                            
                            $('.citybutton').click(function(e) {
                                e.preventDefault();
                                if ($(this).hasClass('active')){
                            
                                } else {
                                    $('.citybutton').removeClass('active');
                                    $(this).addClass('active');
                            
                                    let temp = $('.phones p:first-of-type').text();
                                    $('.phones p:first-of-type').text(data[0]);
                                    data[0] = temp;
                                    temp = $('.phones p:last-of-type').text();
                                    $('.phones p:last-of-type').text(data[1]);
                                    data[1] = temp;
                                    temp = $('.mail a').text();
                                    $('.mail a').text(data[2]);
                                    $('.mail a').attr('href','mailto:'+data[2]);
                                    data[2] = temp;
                                    temp = $('.soc a:first-of-type').text();
                                    $('.soc a:first-of-type').text(data[3]);
                                    $('.soc a:first-of-type').attr('href',data[3]);
                                    data[3] = temp;
                                    temp = $('.soc a:nth-of-type(2)').text();
                                    $('.soc a:nth-of-type(2)').text(data[4]);
                                    $('.soc a:nth-of-type(2)').attr('href',data[4]);
                                    data[4] = temp;
                                    temp = $('.soc a:last-of-type').text();
                                    $('.soc a:last-of-type').text(data[5]);
                                    $('.soc a:last-of-type').attr('href',data[5]);
                                    data[5] = temp;
                                    temp = $('.map-image iframe').attr('src');
                                    $('.map-image iframe').attr('src',frame);
                                    frame = temp;
                                }
                            });
                        })();
                    `}
                    </script>               

            </Helmet>
        </div> 
        
    )
    }

export default App