import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const myName = 'User';
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: grey,
   },
});

ReactDOM.render(
 <React.StrictMode>
   <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <ThemeProvider theme = {theme}>
          <BrowserRouter>
            <App name={myName} />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
 </React.StrictMode>,
 document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
