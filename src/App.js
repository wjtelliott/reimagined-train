import './App.css';
import Home from './Components/Home/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import ContactForm from './Components/Contact/ContactForm';

// todo: add routing for contact me
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/contact' element={<ContactForm />} />
                <Route path='/' element={<Home />} /> 
            </Routes>         
        </Router>
    );
}

export default App;
