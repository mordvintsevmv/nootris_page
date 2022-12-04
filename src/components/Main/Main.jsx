import "./Main.scss"
import NootrisComponents from "./NootrisComponents";

const Main = () => {
    return (<div className="main" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/img/background.png"})`}}>

        <NootrisComponents/>

        <div className="tagline">
            <h1 className="tagline__title">АКТИВИРУЙ ИММУНИТЕТ!</h1>

            <p className="tagline__description">Всего пять секунд в день помогут укрепить иммунитет
                и повысить защитные силы организма</p>
        </div>


        <div className="advantage">
            <h3 className="advantage__title">NOOTRIS ПОМОГАЕТ</h3>

            <p className="advantage__description">Вашему организму во время пандемии
                и сезонных простуд</p>
        </div>


    </div>)
}

export default Main