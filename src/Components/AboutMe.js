import React from 'react'
import image from '../Image/arslanimage.jpeg'

const aboutMe = (props) => {
    return (
        <>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" className='blue-image' alt="" />
            <div className='container d-flex query-textcenter-md align-items-center  margin-top ' style={{ height: "650px" }}>
                <div className="query-textcenter " >
                    <img src={image} alt="Display_Picture" className='img' />
                </div>
                <div id='backColor' className={`text-${props.mode === 'light' ? 'black' : 'white'} p-3 ps-md-4 mt-5 mt-md-0 aboutme-query shadow-lg aboutme-fs `} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(35, 35, 35)' }}>
                    <div>
                        <p>Frontend Developer &#38; a Content Writer looking for decent opportunities to hop onto.</p>
                        <p className='mb-0'>COVID made me realize that physical jobs are no longer in fashion. So, I started my journey in TECH.</p>
                        <p>  After approx. 100 hours of learning &#38; practice, I can say I am skilled in HTML and CSS and working toward JS expertise. My future goals are to be adept in MERN Stack, Game Dev, and Blockchain Dev.</p>
                        <p className='mb-0 fw-bold'>WHY SHOULD YOU HIRE ME?</p>
                        <p>You can trust me to be 0.1% better every day at my job. I cannot stop learning and that is my biggest strength.</p>
                    </div>
                    <div className='text-center text-lg-start'>
                        <a href='/ArslanNadeem-Frontend Developer.pdf' download="Arslan Nadeem-Frontend Developer" target='_blank'>
                            <button type="button" className="md_small_button aboutme-btntopmargin btn btn-primary text-white custom-btn btn-design mb-4 mt-4 margin-top-query query-textcenter ">Download Resume</button>
                        </a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default aboutMe