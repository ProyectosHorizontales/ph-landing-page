//Contact.jsx
import React, { useRef } from 'react'; // Import useRef
import mailImage from '../assets/mail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Contact = () => {
    // Create refs for the input fields
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0966f29d-23af-451b-8334-39a19a27e3c2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title:"Mensaje enviado",
                text: "En breve estaremos comunicándonos",
                icon: "success"
            });
            // Reset the input fields using the refs
            if (nameInputRef.current) {
                nameInputRef.current.value = '';
            }
            if (emailInputRef.current) {
                emailInputRef.current.value = '';
            }
            if (messageInputRef.current) {
                messageInputRef.current.value = '';
            }
        }
    };

    return (
        <div className=' min-h-screen flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
            <div className=' md:w-2/4 text-center'>
                <span className=' text-black text-5xl font-semibold leading-tight p-4'>¿Listo para solicitar tu demo?</span>
                <h2 className=' text-xl font-semibold leading-tight p-6'>Déjanos un mensaje y te responderemos a la brevedad</h2>

                <section className='p-4'>
                    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
                        <div>
                            <label htmlFor="name" className='block text-left font-medium leading-tight p-1'>Nombre</label>
                            <input
                                type='text'
                                id="name"
                                name='name'
                                placeholder='Ingrese su nombre'
                                required
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brightBackground focus:border-transparent'
                                ref={nameInputRef} // Attach the ref to the input
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-left font-medium leading-tight p-1'>Correo</label>
                            <input
                                type='email'
                                id="email"
                                name='email'
                                placeholder='Ingrese correo de contacto'
                                required
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brightBackground focus:border-transparent'
                                ref={emailInputRef} // Attach the ref to the input
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-left font-medium leading-tight p-1'>Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Quisiera más información sobre los productos'
                                required
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brightBackground focus:border-transparent'
                                ref={messageInputRef} // Attach the ref to the textarea
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className='bg-[#fe802b] text-2xl text-white font-semibold py-3 px-6 rounded-md hover:bg-[#fe802b] hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 flex items-center gap-2'
                        >
                            Enviar Mensaje
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </form>
                </section>
            </div>

            <div className=' w-full md:w-2/4 flex justify-center items-center'>
                <img src={mailImage} alt='Contact Us' className=' scale-75'/>
            </div>
        </div>
    );
}

export default Contact