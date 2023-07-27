import { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer () {
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        const updateTime = () => {
          const date = new Date();
          const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
          };
          const formattedTime = date.toLocaleTimeString([], timeOptions);
          setCurrentTime(formattedTime);
        };
    
        const timer = setInterval(updateTime, 1000);

        return () => {
            clearInterval(timer);
          };
        }, []);

    return (
        <footer className="home__footer" id="js-footer">
            <div className="home__footer__center">
                <div className="footer__links">
                    <div className="link__flex">
                        <div className="link__flex__inner">
                            <a href="https://twitter.com/damola_tech" target="_blank" rel="noopener noreferrer" className="c-button">
                                <span className="c-link">
                                    <span className="c-link__inner">
                                        <span> Twitter </span>
                                        <span className="c-link__animated"> Twitter </span>
                                    </span>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/damola_tec/" target="_blank" rel="noopener noreferrer" className="c-button">
                                <span className="c-link">
                                    <span className="c-link__inner">
                                        <span> INSTAGRAM </span>
                                        <span className="c-link__animated"> INSTAGRAM </span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="link__flex">
                        <div className="link__flex__inner second">
                            <a href="https://github.com/v0pe" target="_blank" rel="noopener noreferrer" className="c-button">
                                <span className="c-link">
                                    <span className="c-link__inner">
                                        <span> GITHUB </span>
                                        <span className="c-link__animated"> GITHUB </span>
                                    </span>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/victor-aderibigbe/" className="c-button" target="_blank" rel="noopener noreferrer">
                                <span className="c-link">
                                    <span className="c-link__inner">
                                        <span> LINKEDIN </span>
                                        <span className="c-link__animated"> LINKEDIN </span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__footer__left">
                <p className="place">LARAMIE, WY</p>
                <div className="time">
                    <a className="clock24"></a> - <span>{currentTime}</span>
                </div>
            </div>
            <p className="home__footer__right"> Design inspired 
                 &nbsp; <a href="https://fayemi.design/" target="_blank" rel="noopener noreferrer">
                Isaac Fayemi &nbsp; 
                </a>
                &  <a href="https://seyi.dev/" target="_blank" rel="noopener noreferrer">
                Oluwaseyi Oluwadare
                </a>
            </p>
        </footer>
    );
}
