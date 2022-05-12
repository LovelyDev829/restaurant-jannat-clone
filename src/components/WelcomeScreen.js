import React from 'react'
import "./WelcomeScreen.css"
import PickIcon from '../image/pick.png'
import { BsPencil } from 'react-icons/bs';


function WelcomeScreen() {
    return (
        <div className='welcomeScreen'>
            <div className='welcomeScreen_img_div'>
                <img src='https://www.restaurant-jannat.de/_next/image?url=https%3A%2F%2Ffleksa-cdn.s3.eu-central-1.amazonaws.com%2Fv1-buck%2Fimg%2Frestaurant_covers%2Feeb40cb438eb2d4bd7b218.jpg&w=1920&q=75' alt='GOGO' />
            </div>
            <div className='welComeScreen_img_over'>
                <div className='welComeScreen_img_over_div'>
                    <div className='welComeScreen_img_over_text'>
                        <div className='welComeScreen_img_over_text_1'>Restaurant Jannat</div>
                        <div className='welComeScreen_img_over_text_2'>Indian Restaurant in Puchheim</div>
                        <div className='welComeScreen_img_over_text_3'>Pre-Order available (Open Today: 17:00)</div>
                        <div className='welComeScreen_img_over_text_button'>
                            <img src={PickIcon} alt='PNG' />
                            <p>PICKUP</p>
                            <BsPencil className='pencilPick' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen
