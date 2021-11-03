import React from "react";
import { Provider } from 'react-redux'
import AppRoutes from "./routes";
import store from './store'
import './assets/css/app.scss'
import { ThemeProvider } from '@mui/material/styles';
import theme from './services/theme'
import ErrorBoundaryComponent from "./components/ErrorBoundaryComponent/ErrorBoundaryComponent";

const App = () => {
  return (
    <ErrorBoundaryComponent>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </ErrorBoundaryComponent>
  )
}

export default App
