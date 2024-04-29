import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nemo veniam quis officia amet voluptatum similique maiores blanditiis ipsam quaerat error deserunt, cumque repellendus facere optio fugit sit! Autem, amet.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-left">
                <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>9463563971</li>
                        <li>contact@YummyBites.com</li>
                    </ul>
            </div> 
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All rights reserved.</p>
    </div>
  )
}

export default footer