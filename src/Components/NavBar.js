import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Logo/AR.png'
// import { useState } from 'react'


export default function Navbar(props) {
    const hideNavbar = () => {
        setTimeout(() => {
            
            document.getElementById('navbarSupportedContent').classList.remove("show")
        }, 60);
    }

    return (
        <>
           
            <nav  id='nav-bg' className={`navbar navbar-expand-sm shadow `} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(35, 35, 35)' }}>
                <div className="container">
                    <Link className="navbar-brand  font-family" to="/"> <img src={logo} alt="Logo" width="45" height="40"/> </Link>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={hideNavbar} className={`nav-link active font-family  letter-spcaing text-${props.mode === 'light' ? 'primary' : 'white'} navbar-items`} style={{ fontSize: '14px' }} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link onClick={hideNavbar} className={`nav-link font-family  letter-spcaing ms-sm-2 me-sm-2 ms-md-5 me-md-5 text-${props.mode === 'light' ? 'primary' : 'white'} navbar-items`} style={{ fontSize: '14px' }} to="/aboutme">About me</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={hideNavbar} className={`nav-link font-family  letter-spcaing text-${props.mode === 'light' ? 'primary' : 'white'} navbar-items me-md-4 me-lg-5`} style={{ fontSize: '14px' }} to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <span><i className='fa-solid fa-moon fa-xl ps-1' style={{ color: props.mode === 'light' ? 'black' : 'white' }}></i></span>
                        </div>


                    </div>
                </div>
            </nav>
        </>

    )


}

// export default Navbar
