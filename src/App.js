import React, { useContext } from 'react';
import Footer from './Components/Footer';
import { AppContext, AppProvider } from './AppContext';
import Cart from './Components/Cart';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
const App = () => {
    const{cart}=useContext(AppContext)

    return (
        <div>
            <AppProvider> 
            
            <BrowserRouter>
            <h1>Useeffect</h1>
            <Link to='/cart'>Cart</Link>
            <Routes>
                <Route index element={<Footer />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
                
                

            </BrowserRouter>
                
            </AppProvider>
            
        </div>
    );
}

export default App;
