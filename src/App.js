import './App.css';
import { Reset } from 'styled-reset';
import { MainBackgroundComponent } from './components/layout/MainBackgroundComponent';
import { HomePage } from './pages/HomePage';

const App = () => {
    return (
        <>
            <Reset />
            <MainBackgroundComponent>
                <HomePage />
            </MainBackgroundComponent>
        </>
    );
};

export default App;
