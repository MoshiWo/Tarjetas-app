import React from 'react'

export default function Card({id, image, title, instructor}) {
  return (
    <div className='card text-center bg-dark'>
    <div className='card-body text-light'>
      <img src={image} alt='no file'/>
      <h4 className='card-title'>{title}</h4>
      <p className='card-text text-secondary'>Instructor: {instructor}</p>
    
      <a href='#!' className='btn btn-outline-secondary rounded-0'>Ir al sitio web</a>
     </div>
    </div>
  )
}
