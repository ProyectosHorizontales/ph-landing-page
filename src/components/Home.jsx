import React from 'react'
import Convertbutton from './layout/Button'
import hero from '../assets/hero.png'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'; // Import the Excel icon
import { MdScreenSearchDesktop, MdAddToHomeScreen } from 'react-icons/md'; // Import the other icons

const Home = () => {
    return (
        <div className=' min-h-screen flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
            <div className=' md:w-2/4 md:pl-10'> {/* Added md:pl-10 for rightward text positioning */}
                <h2 className=' text-brightBackground leading-tight p-1 mt-4 bg-[#9CD9AB] text-black rounded-md inline-block p-2'>Administrador Online de Listas de Precios - Carteleria Digital</h2> {/* Added mt-6 for top spacing */}
                {/*<span className=' text-black text-6xl font-semibold leading-tight ml-40 p-2 mt-4 block'>Horizonte PyME</span>*/}
                <span className=' text-black text-6xl font-semibold leading-tight p-2 mt-4 block'>¡Adiós a las Listas de Precios Desordenadas!</span> {/* Added mt-4 and block for top spacing */}
                <p className='text-2xl leading-tight text-left p-2 mt-4 text-black'>
                    Mejorá los tiempos de tu negocio con{' '}
                    <span className=' font-semibold text-black text-4xl rounded-md inline-block p-2'>
                        Inteligencia Artificial
                    </span>
                </p>
                {/*<h3 className=' text-[#2c2c2c] text-2xl font-semibold ml-8 mt-8'>Impulsa la eficiencia de tu negocio</h3>*/} {/* Added mt-8 for top spacing */}

                <p className=' text-xl font-medium leading-tight text-left ml-3 p-1 mt-4'> {/* Added mt-4 for top spacing */}
                    ¿Cansado de tener abiertos muchos archivos de listas de precios? ¿Necesitas mostrar tus promociones del día? Te ofrecemos:
                </p>
                <ul className=' text-xl ml-12 p-1 mt-4'> {/* Added mt-4 for top spacing */}
                    <li className=' p-2'><PiMicrosoftExcelLogoFill className='inline-block mr-2 align-middle' /> Gestionar todas tus listas de precios en un solo lugar</li>
                    <li className=' p-2'><MdScreenSearchDesktop className='inline-block mr-2 align-middle' /> Buscar tus productos de forma dinámica</li>
                    <li className=' p-2'><MdAddToHomeScreen className='inline-block mr-2 align-middle' /> Administrar tu propía cartelería digital</li>
                </ul>
                <div className=' w-full mt-8'> {/* Added mt-8 for top spacing */}
                    <a href="#contact">
                        <Convertbutton title='¡Pedí tu demo hoy!' className='w-full justify-center' />
                    </a>
                </div>
            </div>

            <div className=' w-full md:w-2/4 items-center'>
                <img src={hero} alt='hero' className=' scale-75' />
            </div>
        </div>
    )
}

export default Home
