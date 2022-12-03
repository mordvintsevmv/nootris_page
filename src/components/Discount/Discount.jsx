import "./Discount.scss"
import Card from "./Include";

const Discount = () => {
    return(
        <div className="discount">
            <div className="discount-title discount__title">
                <h1 className="discount-title__white">ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</h1>
                <h1 className="discount-title__gold">СО СКИДКОЙ -15% ПЕРВЫМ!</h1>
            </div>

            <div className="discount-price discount__price">
                <h3 className="discount-price__old">750₽</h3>
                <h2 className="discount-price__new">690₽</h2>
            </div>

            <div className="discount-offer discount__offer">
                <Card top_text="Содержит" bottom_text="имбирь" img_url="/img/ginger.png"/>
                <Card top_text="+Бесплатная доставка" bottom_text="Специальная цена" img_url="/img/nootris_h.png" upper={true}/>
                <Card top_text="Нейтрализует" bottom_text="вирусы" img_url="/img/virus.png"/>
            </div>

            <div className="discount-order-button discount__order-button">
                <p>Оформить заказ!</p>
            </div>



        </div>
    )
}

export default Discount