import "./Header.scss"
import {useEffect, useState} from "react";

const Nav = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

    useEffect(() => {

        if (window.innerWidth < 1280) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScrollCloseMenu)

    }, [])

    const handleResize = () => {
        if (window.innerWidth < 1280) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const handleOpenMenu = () => {
        setIsMenu(true)
    }

    const handleMouseCloseMenu = () => {
        setIsMenu(false)
    }


    const handleScrollCloseMenu = () => {
        if (window.scrollY > 90) {
            setIsMenu(false)
        }
    }

    return (<span>

        {(isMobile && !isMenu) && <span>
            <img className="navigation__button" src={process.env.PUBLIC_URL + "/img/menu.png"} alt="menu"
                 onClick={handleOpenMenu}/>
            </span>}

        {(!isMobile || isMenu) && <nav className="navigation" onMouseLeave={handleMouseCloseMenu}>
            <a href="#" className="navigation__item">FAQ</a>
            <a href="#" className="navigation__item">Оплата и доставка</a>
            <a href="#" className="navigation__item">Возврат</a>
            <a href="#" className="navigation__item">Исследования</a>
            <a href="#" className="navigation__item">Личный кабинет</a>
            <span className="navigation__item">8 (800) 600-09-90</span>
        </nav>}
                    </span>)
}

export default Nav