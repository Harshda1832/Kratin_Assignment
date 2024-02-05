import React from 'react'
import profile from '../pictures/profile.jpeg'
import './profile.css'

const Profile = () => {
  return (
    <>
    <div>
      <img src={profile} alt='profile' className='profile-img'/>
      <h3 className='profile-name'>Sunita Sharma</h3>
    </div>

    <div className='info'>
      <h3>Age  :  67</h3>
      <h3>Height :  6.0 ft</h3>
      <h3>weight:  60 kg</h3>
      <h3>Gender : Female</h3>
      

    </div>
    </>
  )
}

export default Profile
