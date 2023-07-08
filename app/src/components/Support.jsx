import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Support = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wl7b4oo', 'template_w7q2khb', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='bg-customBlack min-h-screen'>
            <h1 className='text-white text-5xl flex justify-center pt-8 mb-8'>Contact me</h1>
            <div className="flex justify-center">
                <div className='flex justify-center bg-formMain rounded-lg p-8'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                        <label className='text-white text-lg'></label>
                        <input type="text" name="user_name" placeholder='Your Name' className='bg-formFill rounded-lg px-4 py-2 mb-4 text-xl' />
                        <label className='text-white text-lg'></label>
                        <input type="email" name="user_email" placeholder="Your Email" className='bg-formFill rounded-lg px-4 py-2 mb-4 text-xl' />
                        <label className='text-white text-lg'></label>
                        <textarea name="message" className='bg-formFill rounded-lg px-4 py-2 mb-4 text-xl'></textarea>

                        <input type="submit" value="Send" className='bg-blue-700 hover:bg-submit text-white font-bold py-2 px-4 rounded' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;

