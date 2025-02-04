import React from 'react'
import PropTypes from 'prop-types'
import './cardss.css'
import 'animate.css';





 
function Card({tittle, imageSource, text, URL}) {

  return (
         <div className="card text-center bg-dark animate__animated animate__fadeInUp"> 

            <div className="overflow">
            <img src=  {imageSource}   alt=""  className='card-img-top'/> 
            </div>
         
          
         <div className="card-body text-light">
          <h4 className="card-tittle">{tittle}</h4>
          <p className="card-text text-dark">
           </p>
            <a href={URL} className='btn btn-outline-secondary rounded -0 ' target="_blank" rel="noreferrer">
             vamos
            </a>

         </div> 
              
          </div>
  )
}

Card.propTypes={
  tittle: PropTypes.string.isRequired,
  URL: PropTypes.string,
  imageSource: PropTypes.string
}

export default Card