// Import React
import React from 'react';
// Import Styling
import './App.css'
// Import Other Components
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}

export default App;