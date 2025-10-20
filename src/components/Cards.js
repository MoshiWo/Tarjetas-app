import React from 'react'
import Card from './Card'
import image1 from '../assets/spring.jpg'
import image2 from '../assets/python.png'
import image3 from '../assets/laravel.webp'

const cards=[
{
  id:1,
  title: 'Curso de Spring',
image:image1,
instructor: 'Pablo Ibarra'
},
{
 id:2,
  title: 'Curso de Python',
image: image2,
instructor: 'Christian Valencia'
}, 
{id:3,
  title: 'Curso de laravel',
image: image3,
instructor: 'Benito Lopez'
}
]


export default function Cards() {
  return (
  <div className='container d-flex justify-content-center align-items-center h-100'>
    <div className='row'>
      {
        cards.map( c=>( 
      <div className='col-md-4' key={cards.id}>
       <Card
       key={c.id}
       id={c.id}
       title={c.title}
       image={c.image}
       instructor={c.instructor}
       />
     </div>
        ))
      }
    </div>
  </div>

  )
}
