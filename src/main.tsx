import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import twitterLogo from './assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

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
        Content
      </div>
    </div>
  </React.StrictMode>,
)
