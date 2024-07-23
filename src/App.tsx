import Router from 'router/Router';
import { GlobalStyle } from 'styles/GlobalStyles';
import ThemeModeProvider from 'context/ThemeModeProvider';

const App = () => {
    return (
        <ThemeModeProvider>
            <GlobalStyle />
            <Router />
        </ThemeModeProvider>
    );
};

export default App;
