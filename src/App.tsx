import React from 'react';
import SlideShow from './components/SlideShow';
import { GlobalStyle } from './style/style';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <SlideShow />
        </div>
    );
}

export default App;