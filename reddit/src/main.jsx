import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
      
    </React.StrictMode>
  </Router>,
)
