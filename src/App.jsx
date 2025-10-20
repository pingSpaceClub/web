import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';

function App() {
    return (
        <Router basename='/web'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='privacy' element={<Privacy />} />
                    <Route path='terms' element={<Terms />} />
                    <Route path='FAQ' element={<FAQ />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
