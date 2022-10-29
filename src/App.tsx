import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import { SelectBoxAlphaPage } from './experiments/select-box-alpha'
import { ListPage } from './experiments/list-alpha'
import { NumberSelectAlphaPage } from './experiments/number-select-alpha'
import { ColorPickerPage } from './experiments/colorPicker'

// TODO: nice navbar
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selectbox-alpha" element={<SelectBoxAlphaPage />}></Route>
        <Route path="/list-alpha" element={<ListPage />}></Route>
        <Route
          path="/number-select-alpha"
          element={<NumberSelectAlphaPage />}
        />
        <Route path="/color-picker" element={<ColorPickerPage />} />
        <Route
          path="/"
          element={
            <nav>
              <ul>
                <li>
                  <Link to="/selectbox-alpha">Selectbox Alpha</Link>
                </li>
                <li>
                  <Link to="/list-alpha">List Alpha</Link>
                </li>
                <li>
                  <Link to="/number-select-alpha">Number Select Alpha</Link>
                </li>
                <li>
                  <Link to="/color-picker">Color picker</Link>
                </li>
              </ul>
            </nav>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
