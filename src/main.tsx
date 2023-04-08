import React from 'react'
import ReactDOM from 'react-dom/client'

const editUser = false;
//Programação declarativa
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Hello, World.</h1>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ratione asperiores deserunt, consequuntur minima velit voluptatibus pariatur obcaecati itaque expedita harum voluptates, nemo sed temporibus sunt quasi saepe dignissimos impedit.</p>
      <button>{editUser ? 'Editar usuário' : 'Criar usuário'}</button>
    </div>
  </React.StrictMode>,
)
//Componentes: pequenas partes de inferface reuitilizavéis. 