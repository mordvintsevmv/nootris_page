import "./Header.scss"

const Nav = () => {
    return (<nav className="navigation">
            <a href="#" className="navigation__item">FAQ</a>
            <a href="#" className="navigation__item">Оплата и доставка</a>
            <a href="#" className="navigation__item">Возврат</a>
            <a href="#" className="navigation__item">Исследования</a>
            <a href="#" className="navigation__item">Личный кабинет</a>
            <span className="navigation__item">
                8 (800) 600-09-90
            </span>
        </nav>)
}

export default Nav