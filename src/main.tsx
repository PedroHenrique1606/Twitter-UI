import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Tweet }from './components/Tweet';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Separator } from './components/Separator';

const tweets = [
  'Meu primeiro tweet',
  'testando a plataforma',
  'deploy ok!',
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar></Sidebar>
      <div className="content">
        <main className="timeline">
          <Header title='Home'></Header>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/PedroHenrique1606.png" alt="Pedro Henrique" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>

            <button type='submit'>Tweet</button>
          </form>
          <Separator></Separator>
        </main>
        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}></Tweet>
        })}
      </div>
    </div>
  </React.StrictMode>,
)
