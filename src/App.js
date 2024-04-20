import React from 'react';
import Footer from './Components/Footer';
import { AppProvider } from './AppContext';
import Cart from './Components/Cart';
const App = () => {
    return (
        <div>
            <AppProvider> 
                <h1>Useeffect</h1>
                <Footer />
                <Cart />
            </AppProvider>
            
        </div>
    );
}

export default App;
