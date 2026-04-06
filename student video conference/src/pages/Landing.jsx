import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Student Video Conference</h2>
                </div>
                <div className='navLinks'>
                    <p> Join as Guest</p>
                    <p>Register</p>
                    <div role='button'><p>Login</p></div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>
                    <p> Join seamless video calls, share screens, and collaborate effortlessly with our intuitive video conferencing platform.</p>
                    <div role='button'>
                        <Link to={'/auth'}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}