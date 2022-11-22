import React from 'react'
import "./home.scss"
import SideBar from '../SideBar/SideBar'

function Home({ currentUser, signOut }) {
  return (
    <div className='home'>
        <div className='home-container'>
            <SideBar currentUser={currentUser} signOut={signOut} />
            <div className='home-bg'>
                
            </div>
        </div>
    </div>
  )
}

export default Home