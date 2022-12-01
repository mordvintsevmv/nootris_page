import "./Header.scss"
import Logo from "./Logo";
import Basket from "./Basket";
import Nav from "./Nav";

const Header = () => {
    return(
        <div className="header">

            <Logo/>

            <Nav/>


            <Basket items_num={132312}/>

        </div>
    )
}

export default Header