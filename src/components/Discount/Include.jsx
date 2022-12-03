const Card = ({top_text, bottom_text, img_url, upper = false}) => {
    return (<div className={upper ? "card card-upper" : "card"}>

        <img className={upper ? "card__img card-upper__img" : "card__img"} src={process.env.PUBLIC_URL + img_url}
             alt="card_img"/>

        <h4 className={upper ? "card__top-text card-upper__top-text" : "card__top-text"}>{top_text}</h4>
        <h4 className={upper ? "card__bottom-text card-upper__bottom-text" : "card__bottom-text"}>{bottom_text}</h4>

    </div>)
}

export default Card