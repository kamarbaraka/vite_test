import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {MySection} from "./MySection.tsx";
import {MyButton} from "./MyButton.tsx";
import CustomComponents from "./CustomComponents.tsx";
import Mapping from "./Mapping.tsx";

const value = Math.random()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
      <CustomComponents>
          {value}
      </CustomComponents>
      <MySection>
          <MyButton>Button text</MyButton>
      </MySection>
      <Mapping></Mapping>
  </React.StrictMode>,
)
