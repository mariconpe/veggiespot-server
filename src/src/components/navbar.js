import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ setShow, size }) => {
    return (
        <main>
            <nav>
                <div className="nav_box">
                    <span className="my_shop" onClick={() => setShow(true)}>
                        Veggie Spot
                    </span>
                    <div className='cart' onClick={() => setShow(false)}>
                        <span>
                            <button className='lista'>Lista de compras</button>
                        </span>
                        <span>{size}</span>
                    </div>
                </div>
            </nav>
            <footer className='parte_final'>
                <h2 className="frase-consumidores"><strong>O que dizem os consumidores:</strong></h2>

                <div className="consumidor-um">
                    <p className="frase-lorem-um" id="frase-lorem">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem voluptatum doloribus quisquam! Provident explicabo voluptatibus accusantium assumenda mollitia, incidunt ut vero iusto maiores adipisci et consequatur eum eius sunt."</p>
                    <p className="nome-consumidor-um"><strong>Guilherme</strong></p>
                </div>

                <div className="consumidor-dois">
                    <p className="frase-lorem-dois" id="frase-lorem">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem voluptatum doloribus quisquam! Provident explicabo voluptatibus accusantium assumenda mollitia, incidunt ut vero iusto maiores adipisci et consequatur eum eius sunt."</p>
                    <p className="nome-consumidor-dois"><strong>Marina</strong></p>
                </div>

                <div className="consumidor-tres">
                    <p className="frase-lorem-tres" id="frase-lorem">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem voluptatum doloribus quisquam! Provident explicabo voluptatibus accusantium assumenda mollitia, incidunt ut vero iusto maiores adipisci et consequatur eum eius sunt."</p>
                    <p className="nome-consumidor-tres"><strong>Vítor</strong></p>
                </div>

                <div className="footer-um">
                    <ul className="footer">
                        <li><p className='rodape-um'><strong>Orgânicos</strong></p></li>
                        <li><p className='rodape-dois'><strong>Vegetais</strong></p></li>
                        <li><p className='rodape-tres'><strong>Veganos</strong></p></li>
                    </ul>
                </div>
                <div className='footer-dois'>
                    <h1 className="frase-final">© 2021 JS Template. Designd By Ojjomedia All Rights Reserved</h1>
                </div>
            </footer>
        </main>
    );
};

export default Navbar;
