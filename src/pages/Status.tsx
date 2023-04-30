import { Key } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
const answers = [
    'Concordo',
    'Olha, faz sentido',
    'Escreveu não leu o pau comeu!!!',
]

export function Status(){
    return(
        <main className="Status">
          <Header title='Tweet'></Header>

            <Tweet content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius natus minus delectus voluptates quos sit, harum perspiciatis doloremque, praesentium cupiditate, tempora possimus voluptatem voluptas iusto minima! Aspernatur voluptatem ea fugiat.' ></Tweet>
            <Separator></Separator>
            <form className="answer-tweet-form">
                <label htmlFor="tweet">
                <img src="https://github.com/PedroHenrique1606.png" alt="Pedro Henrique" />
                <textarea id="tweet" placeholder="Tweet your answer"/>
                </label>

                <button type='submit'>Answer</button>
            </form>
            {answers.map(answers =>{
                return <Tweet key={answers} content={answers}></Tweet>
            })}
        </main>
    )
}