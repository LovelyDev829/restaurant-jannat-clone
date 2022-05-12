import React from 'react'
import "./NavHeader.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavHeader() {
    return (
        <div className='navHeader'>
            {/* <h2>This is NavHeader</h2> */}
            <div className='topHeader_div'>
                <div lg={4} className='topHeader_logo'>
                    <img src='https://fleksa-cdn.s3.eu-central-1.amazonaws.com/v1-buck/img/restaurant_logos/jannat.png' alt='PIC'/>
                </div>
                <div className='topHeader_buttons'>
                    <div className='topHeader_button_1'>
                        <p>MENU</p>
                    </div>
                    <div className='topHeader_button'>
                        <p>RESERVATION</p>
                    </div>
                    <div className='topHeader_button'>
                        <p> CONTACT</p>
                    </div>
                    <div className='topHeader_button'>
                        <p> LOGIN</p>
                    </div>
                    <div className='topHeader_flag'>
                        <img src='	https://www.restaurant-jannat.de/assets/svg/flag-united-kingdom.svg' alt='PIC'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavHeader
