import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'
import './global.css'
//Ferramenta de tipagem estática para o JS
//Tipagem estática: mecanismo par evitar erros ENQUANTO estamos desenvolvendo

//Programação declarativa
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Hello, World.</h1>
    <Tweet user='Pedro' likes={10}>
      Meu primeiro tweet
    </Tweet>
    <Tweet user='Rodrigo'>
      Meu primeiro tweet
    </Tweet>
    <Tweet user='Dante'>
      Meu primeiro tweet
    </Tweet>
    <Tweet user='Ana'>
      Meu primeiro tweet
    </Tweet>

    <Tweet user='Carina'>
      Conteúdo 4
    </Tweet>
  </React.StrictMode>,
)
//Componentes: pequenas partes de inferface reuitilizavéis. 