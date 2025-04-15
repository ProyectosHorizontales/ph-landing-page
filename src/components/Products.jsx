//Products.jsx
import React from 'react'
import Heading from './layout/Heading'
import WebAppWebM from '../assets/horizontepyme.webm'
import SignageWebM from '../assets/signage.webm'
import { Element } from 'react-scroll'; // Import Element if not already imported

const Products = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10' style={{ paddingTop: '60px' }}> {/* Added paddingTop */}
            <div>
                <Heading title1='Nuestros' title2='Productos' />
            </div>
            <div className='w-full py-8'> {/* Removed z-10 and adjusted padding */}
                <Element name="product1" className='scroll-snap-align-start min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center'> {/* First Product */}
                    <div className='w-full md:w-2/4 flex justify-center custom-shadow-pistacho rounded-md'> {/* Image Container */}
                        <div className="video-container">
                            <video
                                alt="Cartelería Digital Application"
                                width={943}
                                height={453}
                                className='rounded-md'
                                autoPlay
                                muted
                                loop
                            >
                                <source src={WebAppWebM} type="video/webm" />
                                Tu buscador no soporta este tipo de video webm.
                            </video>
                        </div>
                    </div>
                    <div className='w-full md:w-2/4 flex justify-center'> {/* Text Container */}
                        <div className=' bg-opacity-80 p-8 rounded-md mt-4 md:mt-0 border-2 border-gray-300'> {/* Added border classes */}
                            <h2 id='subtitle1' className='bg-[#9CD9AB] text-black rounded-md inline-block p-2'>Administrador Online de Listas de Precios</h2>
                            <h3 className='font-semibold text-black text-6xl text-center my-2'>
                                Horizonte PyME
                            </h3>
                            <h2 className=' text-brightBackground leading-tight p-2 mt-4 block'>¡Adiós a las Listas de Precios Desordenadas!</h2> {/* Added mt-6 for top spacing */}
                            <ul className=' text-xl p-2 mt-4'> {/* Added mt-4 for top spacing */}
                                <li className=' p-2'>● Centralización de listas de precios</li>
                                <li className=' p-2'>● Buscador de productos incluido</li>
                                <li className=' p-2'>● Administrá tus marcas y variables de venta</li>
                                <li className=' p-2'>● Reportes de negocio</li>
                            </ul>
                        </div>
                    </div>
                </Element>

                <Element name="product2" className='scroll-snap-align-start min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center mt-16'> {/* Second Product */}
                    <div className='w-full md:w-2/4 flex justify-center order-2 md:order-1'> {/* Text Container - Order 1 on medium+ */}
                        <div className=' bg-opacity-80 p-8 rounded-md mt-4 md:mt-0 border-2 border-gray-300'>
                            <h2 id='subtitle2' className='bg-[#FF9A8D] text-black rounded-md inline-block p-2'>Cartelería Digital WEB</h2>
                            <h3 className='font-semibold text-black text-6xl text-left my-2'>
                                Panoráma PyME
                            </h3>
                            <ul className=' text-xl p-2 mt-4'>
                                <li className=' p-2'>● Administración Online</li>
                                <li className=' p-2'>● Distribución multidispositivo</li>
                                <li className=' p-2'>● Formatos estáticos, animaciones y videos</li>
                                <li className=' p-2'>● Personalización de elementos de Marca</li>
                                <li className=' p-2'>● Integración con Horizonte PyME para terminales de autoconsulta</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full md:w-2/4 flex justify-center order-1 md:order-2 md:-translate-x-[0%] mt-8 md:mt-0'> {/* Video Container - Order 2 on medium+ */}
                        <div className='w-full md:w-2/4 flex justify-center custom-shadow-pink rounded-md'>
                            <div className="video-container">
                                <video
                                    alt="Cartelería Digital Application"
                                    width={429}
                                    height={644}
                                    className='rounded-md'
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source src={SignageWebM} type="video/webm" />
                                    Tu buscador no soporta este tipo de video webm.
                                </video>
                            </div>
                        </div>
                    </div>
                </Element>
            </div>
        </div>
    )
}

export default Products