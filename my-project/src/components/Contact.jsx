import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { getAuth,sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase';
import wave from '../images/wave (3).png'
import wavetop from '../images/wave (4).png'


function Contact() {
    const auth = getAuth();
const name = useRef()
const mail = useRef()
const password = useRef()
const massage = useRef()
const autorize = ()=>{
    console.log("start")
    createUserWithEmailAndPassword(auth, mail.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
 console.log(user)
 sendEmailVerification(auth.currentUser).then(() => {
    // Email verification sent!
    // ...
    console.log("email sended");
  });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+errorMessage)
    // ..
  });

}

    return (
        <> 
       <div className=' fixed  z-40'>
            <Header/>
        </div>
        <img className=' z-0  fixed top-0' src={wavetop}/>
        <img className=' z-0 h-40  fixed w-screen bottom-0' src={wave} />
    
        <div className="  ">
                <div id="Contact" className=" mx-auto flex flex-col min-h-screen justify-center items-center">

                    
                    <div className="w-2/3 md:w-1/3 space-y-8 flex flex-col">
                        <div>
                            <input
                            
                                ref={name}
                                type="text"
                                name="name"
                                className=" border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full  py-3 transition-transform hover:border-b-2"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                            ref={mail}
                                type="text"
                                name="Email"
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="email"
                            />
                        </div>
                        <div>
                            <input
                            ref={password}
                                type="password"
                                name="password"
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="password"
                            />
                        </div>
                        <div>
                            <textarea
                            ref={massage}
                                name="message"
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button
                           onClick={autorize}
                            className="bg-amber-950 text-amber-50 mx-auto mt-4 p-2 w-48"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </>
           

    );
}

export default Contact;