import "./Main.scss"

const Main = () => {
    return(
        <div className="main" style={{backgroundImage: `url(${process.env.PUBLIC_URL+ "/img/background.png"})`}}>
        </div>
    )
}

export default Main