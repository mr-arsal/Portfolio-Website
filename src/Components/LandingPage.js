import React from 'react'
import pdf from '../Resume/Arslan Nadeem-Frontend Developer.pdf'

const landingPage = (props) => {

    document.title = `${props.home} - Arslan Nadeem`
    return (
        <>

            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" className='blue-image' alt="" />
            <div className='container d-flex justify-content-around align-items-center query-textcenter-md screen-height' style={{ height: "650px" }}>
                <div className="container margin-top ">
                    <div className={`fs_creative fs-5 font-family query-textcenter pb-2 p-lg-0 text-${props.mode === 'light' ? 'black' : 'white'}`}>Hello, I'm</div>
                    <div className={`text-uppercase  font-family query-textcenter fontsize-arslan pb-3 p-lg-0 text-${props.mode === 'light' ? 'black' : 'white'}`} style={{ fontWeight: '1000', fontSize: '2.5rem' }}>Arslan Nadeem</div>
                    <div className={`fs_creative text-uppercase  font-family query-textcenter text-adjustment text-${props.mode === 'light' ? 'black' : 'white'}`} style={{ fontSize: '22px' }}>Creative Front-End Web Developer</div>
                    <div className=' text-center text-md-start'>
                    <a href={pdf} download="Arslan Nadeem-Frontend Developer" rel="noreferrer" target='_blank' >
                        <button type="button" className="md_small_button custom-btn btn-design query-textcenter btn-primary btn text-white" style={{marginTop:'2rem'}}>Download Resume</button>
                    </a>
                    </div>
                    
                    <div className=' text-center text-md-start mt-5'>
                        <a href="https://github.com/mr-arsal" target="_blank" rel="noopener noreferrer"><i className="md_social_icon fa-2xl p-3 ps-0 fa-brands fa-github" ></i></a>
                        <a href="https://www.linkedin.com/in/arslan-nadeem-1a0199166/" target="_blank" rel="noopener noreferrer"><i className="md_social_icon fa-2xl p-3 fa-brands fa-linkedin" ></i></a>
                        <a href="https://twitter.com/arsal__AR" target="_blank" rel="noopener noreferrer"><i className="md_social_icon fa-2xl p-3 fa-brands fa-twitter" ></i></a>
                        <a href="https://www.instagram.com/_mr.arsal_/" target="_blank" rel="noopener noreferrer"><i className="md_social_icon fa-2xl p-3 fa-brands fa-instagram" ></i></a>
                    </div>
                </div>

                <div  className={`text-${props.mode === 'light' ? 'primary' : 'white'} container margin-top p-lg-4 margin-for-center json-middle lh-lg fs-5 json-text json-text-ntas-smallscreen json-width shadow  rounded json-padding`} style={{backgroundColor : props.mode === 'light' ? 'white' : 'rgb(35, 35, 35)'}}>
                    <div>1 &nbsp; &nbsp; &nbsp; &#123;</div>
                    <div>2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"name" : "<span className='fw-bold'>Arslan Nadeem</span>", </div>
                    <div>3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"traits" : ["<span className='fw-bold'>Power</span>", "<span className='fw-bold'>Warmth</span>"],</div>
                    <div>4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"age" : 21,</div>
                    <div className='width-solution'>5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"skills" : ["HTML", "CSS", <span className='json-margin'>"JAVASCRIPT"</span>  ] </div>
                    <div>6 &nbsp; &nbsp; &nbsp; &#125;</div>
                </div>
            </div>

        </>
    )
}

export default landingPage