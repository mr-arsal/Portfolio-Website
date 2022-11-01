import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = (props) => {


    // Code for Contact Form Validation
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    // const [name, setName] = useState('');

    const handleOnChange = (e) => {
        setEmail(e.target.value);

    }
    const toEditName = (e) => {
        setName(e.target.value);
    }
    // const Validation = () => {
    //     let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     let email = document.getElementById('email');
    //     let string = email.value;
    //     if (emailRegex.test(string)) {
    //         email.classList.remove('is-invalid');

    //     } else {
    //         email.classList.add('is-invalid')

    //     }

    // }


    // Code for contact page tp work 
    const form = useRef('');

    const sendEmail = async (e) => {
        e.preventDefault();
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let nameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
        let email = document.getElementById('email');
        let name = document.getElementById('name');
        let string = email.value;
        let regular = name.value;
        if (emailRegex.test(string) && nameRegex.test(regular)) {
            name.classList.remove('is-invalid');
            email.classList.remove('is-invalid');
            await emailjs.sendForm('service_7m15y24', 'template_s9wdnon', form.current, 'nW4fVme9JLnT2p0Uc')
                .then((result) => {
                    console.log(result.text);
                    alert('Message has sent to Arslan Nadeem')
                }, (error) => {
                    console.log(error.text);
                    alert('Message has not sent')
                });
        }
        else {
            email.classList.add('is-invalid');
            name.classList.add('is-invalid');
            alert('Message has not sent')
        }




        e.target.reset()
    };




    return (
        <>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" className='blue-image' alt="" />
            <div className='container d-flex  align-items-center query-textcenter-md ' style={{ height: "650px" }}>
                <form ref={form} onSubmit={sendEmail} className='full-widht margin-top ' style={{ width: '40%' }}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"><span className={`fs-5 fw-bold  contact-npem text-${props.mode === 'light' ? 'black' : 'white'}`}>Name</span> </label>
                        <input type="text" name="user_name" className="form-control" id="name" value={name} onChange={toEditName} placeholder="Enter Your Full Name" />
                        <small id="namevalid" className="form-text text-red invalid-feedback fs-6">
                            Your name must be 2-15 characters long and should not start with a number
                        </small>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"><span className={`fs-5 fw-bold  contact-npem text-${props.mode === 'light' ? 'black' : 'white'}`}>Phone Number</span></label>
                        <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"><span className={`fs-5 fw-bold  contact-npem text-${props.mode === 'light' ? 'black' : 'white'}`}>Email</span></label>
                        <input type="email" name="user_email" className="form-control" id="email" value={email} placeholder="Enter Your Valid Email" onChange={handleOnChange} />
                        <small id="emailvalid" className="form-text text-red invalid-feedback fs-6">
                            Enter a valid email
                        </small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><span className={`fs-5 fw-bold  contact-npem text-${props.mode === 'light' ? 'black' : 'white'}`}>Massage</span></label>
                        <textarea name="message" className="form-control" id="message" rows="3" placeholder='Type your message here'></textarea>
                    </div>
                    {/* <button type="button" className="btn btn-primary">Submit</button> */}
                    <input className='btn btn-primary ps-3 pe-3' type="submit" value="Submit" ></input>
                </form>

                <div className={`contact_middle text-${props.mode === 'light' ? 'primary' : 'white'} full-widht container margin-top p-lg-4  json-middle lh-lg fs-5 json-text json-width-contact shadow  rounded json-padding`} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(35, 35, 35)' }}>
                    <div>1 &nbsp; &nbsp; &nbsp; &#123;</div>
                    <div>2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"e-mail" : "<span className='fw-bold'>arslandev7@gmail.com</span>", </div>
                    <div>3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"phone" : "<span className='fw-bold'>+92335 0505088</span>" </div>

                    <div>4 &nbsp; &nbsp; &nbsp; &#125;</div>
                </div>
            </div>
        </>
    )
}

export default Contact
