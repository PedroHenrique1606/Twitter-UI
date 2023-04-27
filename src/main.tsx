import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import twitterLogo from './assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'
import { Tweet }from './components/Tweet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className='sidebar '>
        <img src={twitterLogo} className='logo' alt="twitter logo" />
        <nav className='main-navigation'>
          <a href="" className='active'>
            <House weight="fill"></House>
            Home
            </a>
          <a href="">
            <Hash></Hash>
            Explore
            </a>
          <a href="">
            <Bell></Bell>
            Notifications
          </a>
          <a href="">
            <Envelope></Envelope>
            Messages
          </a>
          <a href="">
            <BookmarkSimple></BookmarkSimple>
            Bookmarks
          </a>
          <a href="">
            <FileText></FileText>
            Lists
          </a>
          <a href="">
            <User></User>
            Profile
          </a>
          <a href="">
            <DotsThreeCircle></DotsThreeCircle>
            More
          </a>
        </nav>
        <button className='new-tweet' type='button'>Tweet</button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle></Sparkle>
          </div>
          
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/PedroHenrique1606.png" alt="Pedro Henrique" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <div className='separator'></div>
        </main>
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
      </div>
    </div>
  </React.StrictMode>,
)
