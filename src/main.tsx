import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/scss/style.scss';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material"
import themes from './themes/Theme/index.ts'
import config from './config.ts'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './feature/store.ts';

const init = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={config.basename}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themes(init)}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
