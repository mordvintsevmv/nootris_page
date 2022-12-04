import {useEffect, useState} from "react";

const Card = ({top_text, bottom_text, img_url, upper = false, mobile_order = 0}) => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        handleResize()

        window.addEventListener("resize", handleResize)
    }, [])

    const handleResize = () => {
        if (window.innerWidth < 1020) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    return (<div className={upper ? "card card-upper" : "card"} style={isMobile ? {order: mobile_order} : null}>

        <img className={upper ? "card__img card-upper__img" : "card__img"} src={process.env.PUBLIC_URL + img_url}
             alt="card_img"/>

        <h4 className={upper ? "card__top-text card-upper__top-text" : "card__top-text"}>{top_text}</h4>
        <h4 className={upper ? "card__bottom-text card-upper__bottom-text" : "card__bottom-text"}>{bottom_text}</h4>

    </div>)
}

export default Card