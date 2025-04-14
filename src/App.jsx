import React from 'react';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/contact';
import { Element } from 'react-scroll'; // Import Element

const App = () => {

    return (
        <div id='app-div' className='h-screen overflow-y-scroll scroll-snap-y snap-mandatory' style={{ scrollPaddingTop: '70px' }}>
            <Navbar />
            <main className='scroll-smooth'>
                <Element name="home" className='scroll-snap-align-start'>
                    <div id='home'>
                        <Home />
                    </div>
                </Element>

                <Element name="products" className='scroll-snap-align-start'>
                    <div id='products' >
                        <Products />
                    </div>
                </Element>

                <Element name="contact" className='scroll-snap-align-start'>
                    <div id='contact'>
                        <Contact />
                    </div>
                </Element>
            </main>
        </div>
    )
}

export default App