import React from 'react'
import './routine.css'
import wakeup from '../pictures/wakeup.jpeg'
import breakfast from '../pictures/breakfast.jpeg'
import newspaper from '../pictures/newspaper.jpeg'
import walk from '../pictures/walk.jpeg'
import phone from '../pictures/phone.jpeg'
import tea from '../pictures/tea.jpeg'
import dinner from '../pictures/dinner.jpeg'
import night from '../pictures/night.jpeg'

const Routine = () => {
  return (
    <>
    <div className='Productive-daily-routine'>
        <h2 className='routine-text'>Productive Daily Routine</h2>
    </div>

    <div className='task1'>
        <h3 className='task1-time'>At 8:00 AM</h3>
        <div className='task1-todo'>
            <ul>
                <li>Wake up.</li>
                <li>Gentle Stretches before leaving bed.</li>
                <li>Morning hygiene routine</li>
            </ul>
        </div>
        <img src={wakeup} alt='wakeup' className='wakeup'/>
        
    </div>

    <div className='task2'>
        <h3 className='task2-time'>At 8:30 AM</h3>
        <div className='task2-todo'>
            <ul>
                <li>Enjoy cup of tea or coffee.</li>
                <li>Healthy breakfast.</li>
                <li>Morning medications.</li>
            </ul>
        </div>
        <img src={breakfast} alt='breakfast' className='breakfast'/>
    </div>

    <div className='task3'>
        <h3 className='task3-time'>At 9:00 AM</h3>
        <div className='task3-todo'>
            <ul>
                <li>Read paper OR </li>
                <li>Watch the news.</li>
            </ul>
        </div>
        <img src={newspaper} alt='newspaper' className='newspaper'/>
        
    </div>

    <div className='task4'>
        <h3 className='task4-time'>At 10:00 AM</h3>
        <div className='task4-todo'>
            <ul>
                <li>Take a walk.</li>
                <li>Exercise at home or class.</li>
            </ul>
        </div>
        <img src={walk} alt='walk' className='walk'/>
    </div>

    <div className='task5'>
        <h3 className='task5-time'>At 11:00 AM</h3>
        <div className='task5-todo'>
            <ul>
                <li>Connect with friend on phone.</li>
                <li>Lunch</li>
                <li>Mid-day medications</li>
                <li>Appointments, social time </li>
            </ul>
        </div>
        <img src={phone} alt='phone' className='phone'/>
    </div>

    <div className='task6'>
        <h3 className='task6-time'>At 3:00 PM</h3>
        <div className='task6-todo'>
            <ul>
                <li>Quite reading/puzzle time.</li>
                <li>short nap.</li>
                <li>Tea/coffee time.</li>

            </ul>
        </div>
        <img src={tea} alt='tea' className='tea'/>
    </div>

    <div className='task7'>
        <h3 className='task7-time'>At 4:30 PM</h3>
        <div className='task7-todo'>
            <ul>
                <li>Start preparing to make food.</li>
                <li>6:00 PM - Dinner time.</li>
                <li>7:30 PM - winiding down for evening.</li>
                <li>take evening medications.</li>


            </ul>
        </div>
        <img src={dinner} alt='dinner' className='dinner'/>
    </div>

    <div className='task8'>
        <h3 className='task8-time'>At 4:30 PM</h3>
        <div className='task8-todo'>
            <ul>
                <li>Head to bed.</li>
                
            </ul>
        </div>
        <img src={night} alt='night' className='night'/>
    </div>
    </>
    
  )
}

export default Routine
