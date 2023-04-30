import { Link } from 'react-router-dom';
import twitterLogo from '../assets/logo-twitter.svg'
import './Sidebar.css';
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
export function Sidebar(){
    return(
        <aside className='sidebar '>
        <img src={twitterLogo} className='logo' alt="twitter logo" />
        <nav className='main-navigation'>
          <Link className='active' to='/'>
            <House weight="fill"></House>
            Home
            </Link>
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
    )
}