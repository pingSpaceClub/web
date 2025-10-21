import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import { routes } from './constants/routes';

function App() {
    return (
        <Router basename='/web'>
            <Routes>
                <Route path={routes.home} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={routes.privacy} element={<Privacy />} />
                    <Route path={routes.terms} element={<Terms />} />
                    <Route path={routes.faq} element={<FAQ />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
