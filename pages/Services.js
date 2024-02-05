import React from 'react'
import meditation from '../pictures/meditation.jpeg'
import audiobook from '../pictures/audiobook.jpeg'
import './services.css'

const Services = () => {
  return (
    <>
    <ul className='services'>
      <li className='services-list'>
        <img src={meditation} alt='meditation' className='meditation'/>
        <h3><a href='https://www.youtube.com/watch?v=ZToicYcHIOU' className='meditation-clip' >Meditation clip</a></h3>
      </li>

      <li className='services-list'>
        <img src={audiobook} alt='audio-book' className='audio-book'/>
        <h3><a href='https://archive.org/details/aesop_fables_volume_one_librivox/fables_01_00_aesop.mp3' className='audio-Book-link' >Audio Book</a></h3>
      </li>

    </ul>
    </>
  )
}

export default Services
