const NootrisComponents = () => {
    return (<div className="nootrisimg">
        <img className="nootrisimg__nootris" src={process.env.PUBLIC_URL + "/img/nootris.png"} alt="Nootris"/>
        <img className="nootrisimg__lemon" src={process.env.PUBLIC_URL + "/img/lemon.png"} alt="lemon"/>
        <img className="nootrisimg__ginger" src={process.env.PUBLIC_URL + "/img/ginger.png"} alt="ginger"/>
    </div>)
}

export default NootrisComponents