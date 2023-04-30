import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const tweets = [
    'Meu primeiro tweet',
    'testando a plataforma',
    'deploy ok!',
]
import './Timeline.css';

export function Timeline(){
    return(
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
            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet}></Tweet>
            })}
        </main>
    )
}