import React, { useEffect, useRef, useState } from "react";
import {mail,whatsapp} from '../assets/icons/index';
import emailjs from '@emailjs/browser';

function CopyText({ text }) {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 sec
    });
  };

  return (
    <div className="relative group flex items-center space-x-2">
      <p className="text-lg text-textBase/75 cursor-pointer">{text}</p>

      {/* Copy button - visible on hover */}
      <button
        onClick={handleCopy}
        className="absolute -top-7 right-5 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-300/85 rounded-xl px-2 py-1 text-sm text-gray-700 hover:bg-gray-400"
        aria-label="Copy to clipboard"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rih6am6', 'template_eqlq0sp', form.current, {
        publicKey: 'QzsptgdZFjee98ogE',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          console.log(result.text);
          form.current.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [toggle,setToggle] = useState(false);


  return (
    <section  className="flex flex-col gap-8 w-full h-[700px] xl:h-screen font-poppins justify-center bg-primary/5 dark:bg-primary/85 pt-10 pb-0">
      <div id="contact" className="flex flex-col items-center">
        <p className="text-lg font-light text-textBase/75">Get in Touch</p>
        <p className="text-5xl md:text-6xl font-extrabold text-textBase/85 mt-1">Contact Me</p>
      </div>
      <div className="flex w-full justify-center pt-10">

          <form ref={form} onSubmit={sendEmail} className="flex w-[80%] md:w-[60%] xl:w-[30%] flex-col gap-5 items-center">
            <input type="text" name="user_name" placeholder="Enter your name" className="py-2 px-5 w-full  border-b text-sm  border-0 border-textBase/25 rounded-xl dark:bg-neutral-800 md:dark:bg-primary/5 bg-primary/5" />
            <input type="text" name="user_email" placeholder="Enter your email address" className="py-2 px-5 w-full  border-b text-sm  border-0 border-textBase/25 rounded-xl dark:bg-neutral-800 md:dark:bg-primary/5 bg-primary/5" />
            <textarea type="textarea" rows={6} name="message" placeholder="Enter your message ..."  className="py-2 px-5 w-full  border-b text-sm  border-0 border-textBase/25 rounded-xl dark:bg-neutral-800 md:dark:bg-primary/5 bg-primary/5" />
            <button type="submit" value="Send" className="py-2 px-5 w-full rounded-2xl border-2 border-textBase/25 bg-primary/0 text-textBase/85 text-lg font-semibold hover:bg-textBase/75 hover:text-primary/85 transition-colors">Send </button>
          </form>
        
      </div>
     
   <div className="flex flex-col md:flex-row gap-2 items-center md:justify-center w-full md:pt-5  p-4"> 
          <div className="w-full md:w-[70%] xl:w-auto xl:p-5 border-2 border-textBase/25 rounded-3xl flex flex-col md:flex-row gap-8 items-center md:justify-center py-6 md:py-4">
                <div className="flex items-center gap-4">
                  <img
                      src={mail}
                      alt="Gmail"
                      className="w-7 h-7 md:w-6 md:h-6 object-contain dark:bg-textBase/85 rounded-full px-1"
                    />
                  <CopyText text="sanjithnagaraja@gmail.com" />

                </div>

                <div className="flex items-center gap-4">
                  <img
                      src={whatsapp}
                      alt="WhatsApp"
                      className="w-7 h-7 md:w-6 md:h-6 object-contain dark:bg-textBase/85 rounded-full px-1"
                    />
                  <CopyText className="pl-5" text="+94 76 7959624" />
                </div>
          </div>
        </div>
    
    </section>
  );
}

export default Contact;
