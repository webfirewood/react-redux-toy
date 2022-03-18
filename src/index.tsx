import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./modules";
import {ThemeProvider} from "styled-components";
import {whiteTheme} from "./theme";
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={whiteTheme}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);
