import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import 'static/fonts/fonts.css'
import './index.css'
import App from 'components/App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
