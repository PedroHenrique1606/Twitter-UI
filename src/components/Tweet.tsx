import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TweetProps{
    content: string
}

export function Tweet(props: TweetProps){
    return(
        <Link to='/status' className="tweet">
            <img src="https://github.com/PedroHenrique1606.png" alt="Pedro Henrique" />
            <div className='tweet-content'>
                <div className='tweet-content-header'>
                    <strong>Pedro Henrique</strong>
                    <span>@pedrohenrique1606 </span>
                </div>
                <p>{props.content}</p>
                    <div className="tweet-content-footer">
                        <button type='button'>
                            <ChatCircle></ChatCircle> 20
                        </button>
                        <button type='button'>
                            <ArrowsClockwise></ArrowsClockwise> 30
                        </button>
                        <button type='button'>
                            <Heart></Heart> 40
                        </button>
                    </div>
            </div>
        </Link >
    )
}