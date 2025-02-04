import React from 'react';
import Card from './Cardd';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import './cardss.css'; // Import your styles

const cards = [
    {
        id: 1,
        tittle: 'Nuestras redes',
        image: image1,
        URL: 'https://www.instagram.com/golden.boystore/'
    },
    {
        id: 2,
        tittle: 'Nuestra tienda',
        image: image2,
        URL: 'https://goldenboystore.mercadoshops.com.mx'
    },
    {
        id: 3,
        tittle: 'Nuestro patrón',
        image: image3,
        URL: 'https://sinapsis.ucuauhtemoc.edu.mx/alumnos/index.php'
    }
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-md-4" key={card.id}>
                            <Card tittle={card.tittle} imageSource={card.image} URL={card.URL} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;