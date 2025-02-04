import React from 'react';
import logo from '../assets/logo.jpg';
import logo2 from '../assets/logo2.jpeg';
import logo3 from '../assets/logo3.jpeg';
import './Acerca.css';
import 'animate.css';  // Importando animate.css para las animaciones

function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Imagen destacada */}
        <div className="col-md-6 mb-4 princi-img animate__animated animate__fadeInUp logo-img">
          <img
            src={logo}
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        {/* Texto descriptivo */}
        <div className="col-md-6">
          <h1 className="mb-4 animate__animated animate__fadeInUp">Sobre Nosotros</h1>
          <p className="text-muted animate__animated animate__fadeInUp">
            Bienvenido a nuestra tienda, donde la pasión por el diseño, la
            innovación y la moda se encuentran. Nos dedicamos a ofrecer
            productos únicos que combinan estilo y calidad.
          </p>
          <p className="animate__animated animate__fadeInUp">
            Desde nuestro lanzamiento en <strong>2023</strong>, hemos trabajado
            incansablemente para ofrecer una experiencia de compra inolvidable.
            Cada artículo en nuestro catálogo ha sido cuidadosamente
            seleccionado para reflejar lo mejor de las tendencias actuales.
          </p>
          <p className="animate__animated animate__fadeInUp">
            <em>
              “Nuestro objetivo es ayudarte a destacar, sin importar dónde
              estés.”
            </em>
          </p>
        </div>
      </div>
      {/* Sección de equipo */}
      <div className="mt-5 us">
        <h2 className="text-center mb-4 animate__animated animate__fadeInUp">Nuestro Equipo</h2>
        <div className="row justify-content-center text-center">
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
            <img
              src={logo2}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 team-img animate__animated animate__fadeInUp"
            />
            <h5 className="animate__animated animate__fadeInUp">Henry Martín</h5>
            <p className="text-muted animate__animated animate__fadeInUp">Obrero</p>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
            <img
              src={logo3}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 team-img animate__animated animate__fadeInUp"
            />
            <h5 className="animate__animated animate__fadeInUp">Goet R.</h5>
            <p className="text-muted animate__animated animate__fadeInUp">Fundador & CEO</p>
          </div>
        </div>
      </div>
      {/* Sección de misión */}
      <div className="mt-5">
        <h2 className="text-center mb-4 animate__animated animate__fadeInUp">Nuestra Misión</h2>
        <p className="text-center text-muted animate__animated animate__fadeInUp">
          Proveer productos excepcionales que inspiren confianza y estilo en
          nuestros clientes, mientras fomentamos prácticas responsables y
          sostenibles en la industria de la moda.
        </p>
      </div>
    </div>
  );
}

export default About;
