import "./Main.scss"
import NootrisComponents from "./NootrisComponents";

const Main = () => {
    return(
        <div className="main" style={{backgroundImage: `url(${process.env.PUBLIC_URL+ "/img/background.png"})`}}>

            <h1>АКТИВИРУЙ ИММУНИТЕТ!</h1>

            <p>Всего пять секунд в день помогут укрепить иммунитет
                и повысить защитные силы организма</p>

            <h3>NOOTRIS ПОМОГАЕТ</h3>

            <p>Вашему организму во время пандемии
                и сезонных простуд</p>

            <NootrisComponents/>

        </div>
    )
}

export default Main