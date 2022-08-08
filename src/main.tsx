import React, { useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./routes/post"

import { STRAPI } from "./lib/urls"
import AuthContext, { AuthProvider } from "./context/AuthContext"

interface AppWrapperProps {
  children: React.ReactNode
}
const AppWrapper = (props: AppWrapperProps) => {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (user) {
    }
  }, [user])
  return (<>{props.children}</>)
}

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path=":contentID" element={<Post />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
