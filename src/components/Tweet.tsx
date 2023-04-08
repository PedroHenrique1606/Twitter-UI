interface TweetProps{
    user : string
    children: string
    likes?: number
}
const tweetStyles = {
    borderRadius: 8
}

export function Tweet(props:TweetProps){
    return  (
        <div className="tweet" style={tweetStyles}>
            <strong>{props.user}</strong>
            <p>{props.children}</p>
            <button>Like {props.likes ?? 0}</button>
        </div>
    );
}
