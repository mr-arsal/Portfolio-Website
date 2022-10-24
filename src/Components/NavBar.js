import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const hideNavbar = () => {
        document.getElementById('navbarSupportedContent').classList.remove("show")
    }
    return (

        <nav id='nav-bg' className={`navbar navbar-expand-sm shadow`} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(35, 35, 35)' }}>
            <div className="container">
                <Link className="navbar-brand fs-5 font-family" to="/"> <span className={`fs-2 fw-semibold text-${props.mode === 'light' ? 'primary' : 'white'}`} style={{ color: props.mode === 'light' ? 'rgb(109, 131, 242)' : 'white' }}>Port</span> <span className={`fs-2 fst-italic text-${props.mode === 'light' ? 'primary' : 'white'}`}>folio</span> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link onClick={hideNavbar} className={`nav-link active font-family fs-5 letter-spcaing text-${props.mode === 'light' ? 'primary' : 'white'} navbar-items`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link onClick={hideNavbar} className={`nav-link font-family fs-5 letter-spcaing ms-sm-5 me-sm-5 text-${props.mode === 'light' ? 'primary' : 'white'} navbar-items`} to="/aboutme">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={hideNavbar} className={`nav-link font-family fs-5 letter-spcaing text-${props.mode === 'light' ? 'primary' : 'white'} navbar-items me-sm-5`} to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <span><i className='fa-solid fa-moon fa-xl ps-1' style={{ color: props.mode === 'light' ? 'black' : 'white' }}></i></span>
                    </div>


                </div>
            </div>
        </nav>

    )


}

// export default Navbar
