import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Main from './pages/Main'
import Contact from './pages/Contact'
import About from './pages/About'
import Categories from './pages/Categories'

export default function Routes() {
    return (
        <BrowserRouter>

            <Header />
            
            <Switch>
                
                <Route 
                path="/" 
                component={ Main } 
                exact />

                <Route 
                path="/categories" 
                component={ Categories } />
                
                <Route 
                path="/contact" 
                component={ Contact } />
                
                <Route 
                path="/about" 
                component={ About } />

            </Switch>

        </BrowserRouter>
    )
}