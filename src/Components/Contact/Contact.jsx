import React, { useState } from 'react';

import './Contact.css';
const Contact = () => {
  // const [items, SetItems] = useState({ name: '', email: '', message: '' });

  // const onChange = (e, key) => {
  //   SetItems({ ...items, [key]: e.target.value });
  // };

  const onSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    var name = formData.get('name');
    var email = formData.get('email');
    var message = formData.get('message');

    if (!name || !email || !message) {
      alert('Please fill in all the fields.');
      return;
    }
    if (!email.includes('@gmail.com')) {
      alert('Please enter correct email id');
      return;
    }
    console.log(formData);
    formData.append('access_key', '82b5016c-6c1d-487e-ab09-3ab2eb3c16df');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());

    if (res.success) {
      alert(res.message);
      // Clear the input fields for email and message
      event.target.querySelector('input[name="name"]').value = '';
      event.target.querySelector('input[name="email"]').value = '';
      event.target.querySelector('textarea[name="message"]').value = '';
    }
  };

  return (
    <div
      id="contact"
      className="contact flex flex-col items-center justify-center gap-20 my-10 mx-[170px] max-md:mx-[30px] max-md:items-start"
    >
      <div className="contact-title relative">
        <h1 className="text-5xl px-15 max-md:text-3xl">Get in touch</h1>
        <img
          src="/assets/theme_pattern.svg"
          alt=""
          className="absolute bottom-0 right-0 h-[80%] z-[-1]"
        />
      </div>
      <div className="contact-section flex gap-36 max-md:gap-3 max-md:flex-col max-xl:gap-28 max-lg::flex-wrap">
        <div className="contact-left flex flex-col gap-14 ">
          <h1 className="text-4xl font-bold bg-gradient-custom bg-clip-text text-transparent max-md:text-2xl">
            Let's talk
          </h1>
          <p className="max-w-[550px] leading-8 text-lg">
            I'm currently available to take on new projects, so feel free to
            send me a message
          </p>
          <div className="contact-details flex flex-col gap-7 text-lg">
            <div className="contact-detail">
              <img src="/assets/mail_icon.svg" alt="" className="max-md:w-7" />
              <p>muhammed10rafi@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/call_icon.svg" alt="" className="max-md:w-7" />
              <p>+91 9995162529</p>
            </div>
            <div className="contact-detail">
              <img
                src="/assets/location_icon.svg"
                alt=""
                className="max-md:w-7"
              />
              <p>Ernakulam</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="contact-right w-full flex flex-col items-start gap-7 max-md:mt-10"
        >
          <label htmlFor="" className="text-lg font-bold">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="border-none w-full h-[78px] pl-5 rounded-md bg-[#32323c] max-md:w-[100%] max-md:h-12 max-md:p-5"
          />
          <label htmlFor="" className="text-lg">
            Your Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="border-none w-full h-[78px] pl-5 rounded-md bg-[#32323c] max-md:w-[100%] max-md:h-12 max-md:p-5"
          />
          <label htmlFor="" className="text-lg">
            Write your message here
          </label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full border-none p-6 rounded-sm bg-[#32323c] max-md:w-[100%]"
          />
          <button
            type="submit"
            className="contact-submit border-none rounded-3xl bg-gradient-custom text-xl py-4 px-6 mb-12 max-md:text-lg max-md:mx-auto cursor-pointer ease-in duration-300 hover:scale-105"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
