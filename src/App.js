import React, { useEffect, useState } from 'react'
import data from './data'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Products from './components/Products/Products'
import Topbar from './components/Topbar/Topbar'
import { Provider } from 'react-redux'
import store from './store/store'


const App = () => {

    const [active, setActive] = useState(false)
    const [currentActive, setCurrentActive] = useState(0)
    const [combinedArray, setCombinedArra] = useState(data)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Provider store={store}>
            <Navbar />
            <main>
                {
                    windowWidth < 768
                        ? <Topbar currentActive={currentActive} data={combinedArray} />
                        : <Sidebar currentActive={currentActive} data={combinedArray} />
                }
                <Products setCurrentActive={setCurrentActive} setActive={setActive} data={combinedArray} />
            </main>
        </Provider>
    )
}

export default App
