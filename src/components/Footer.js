import React from 'react'
import "./Footer.css"

import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_div'>
                <div className='footer_left_div'>
                    <div className='footer_left_text'>Lagerstraße 23</div>
                    <div className='footer_left_text'>82178 Puchheim</div>
                    <div className='footer_left_text'>jannatlagerstr@gmail.com</div>
                    <div className='footer_left_text'>+49 8961203673</div>
                </div>
                <div className='footer_center_div'>
                    <div className='footer_center_text_1'>Online Ordering System</div>
                    <div className='footer_center_text_2'>Powered By</div>
                    <img src='https://www.restaurant-jannat.de/assets/svg/fleksa-logo.svg' height="25px" alt='SVG' />
                </div>
                <div className='footer_right_div'>
                    <div className='footer_right_up'>
                        <div className='footer_right_up_circle'>
                            <FiTwitter className='footer_right_up_icon' />
                        </div>
                        <div className='footer_right_up_circle'>
                            <FiFacebook className='footer_right_up_icon' />
                        </div>
                        <div className='footer_right_up_circle'>
                            <FiInstagram className='footer_right_up_icon' />
                        </div>
                    </div>
                    <div className='footer_right_down'>©2021 Fleksa | Terms & Conditions | Privacy Policy | Imprint</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
