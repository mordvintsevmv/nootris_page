import "./Header.scss"

const Basket = ({items_num}) => {

    return (<span className="basket">

            <svg className="basket__img" width="32" height="28" viewBox="0 0 32 28" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M32 9.99998H26.5662L20.8575 0.485351C20.5743 0.012716 19.96 -0.141597 19.4854 0.142589C19.0118 0.426776 18.8585 1.041 19.1427 1.51464L24.2338 9.99998H7.76622L12.8574 1.51458C13.1416 1.04093 12.9883 0.426709 12.5147 0.142522C12.0391 -0.141665 11.4268 0.0126487 11.1426 0.485283L5.43389 9.99992H0V11.9999H2.17042L4.71093 25.5517C4.97653 26.9707 6.21676 28 7.66018 28H24.3399C25.7832 28 27.0235 26.9707 27.2881 25.5527L29.8295 11.9999H32.0001C32 11.9999 32 9.99998 32 9.99998ZM25.3222 25.1846C25.2344 25.6572 24.8213 26 24.3398 26H7.66018C7.17873 26 6.76568 25.6573 6.67681 25.1836L4.20463 11.9999H27.7954L25.3222 25.1846Z"
                    fill="white"/>
            </svg>

            <svg className="basket__circle" width="18" height="18" viewBox="0 0 18 18"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="9" fill="#FCB500"/>
                <text x="50%" y="70%" textAnchor="middle"
                      className={items_num >= 100 ? "basket__items basket__items-extra" : "basket__items"}>{items_num < 100 ? items_num : "99+"}</text>
            </svg>

        </span>)
}

export default Basket