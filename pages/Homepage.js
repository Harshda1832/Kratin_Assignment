import React from 'react'
import './Homepage.css'
import quick from '../pictures/quick-start.jpeg'
import diet from '../pictures/diet-div-img.jpeg'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='quickstart'>
        <img src={quick} alt='quick-start-img' className='quick-start-img'/>

        <h3 className='quickstart-content'>
        "Unlock a fountain of vitality in just 10 minutes a day. With every gentle stretch and mindful move, you're not just exercising; you're investing in the richness of your golden years. Embrace the power of consistent, short bursts of activity – your daily 10-minute ritual for a lifetime of well-lived moments."
        </h3>

        <button className='quick-start-button'>Quick Start</button>
    </div>

    <div className='diet-div'>
        <h3 className='diet-div-content'>
        "Nourish your golden years with a diet that speaks to the wisdom of well-being. In every wholesome bite, find the recipe for longevity and vitality. Your personalized diet plan, a symphony of nutrients and flavors, is not just about eating- 's a celebration of a vibrant, healthy life well-lived. Savor the journey, taste the essence of wellness every day."</h3>

        <img src={diet} alt='diet-div-img' className='diet-div-img'/>

        <button className='Meal-planning' onClick={()=>navigate('/Routine')}>Meal Planning</button>
    </div>
    
    </>
    
  )
}

export default Homepage
