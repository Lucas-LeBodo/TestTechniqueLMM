// import Libs
import React, { Fragment, useEffect, useState } from 'react';

// import Component
import Btn from "../components/button";

const Home = () => {

    let addBtn = '';
    let removeBtn = '';

    const [bgColor, setBgColor] = useState(null);
    const [imgUrl, setImgUrl] = useState();
    const [count, setCount] = useState(1);

    useEffect( ()  => {
        fetch(`http://localhost:8000/${count}`)
            .then(response => {
                if(response.ok){
                    return response.blob();
                }
                throw response;
            })
            .then(imageBlob => {
                const urlImageBlob = URL.createObjectURL(imageBlob);
                setImgUrl(urlImageBlob);
            })
            .catch(err => {
                console.error("Error :", err);
            })

            if( (count%2) === 0) {
                setBgColor("bgpink")
            } else { 
                setBgColor("bgwhite")
            }
    }, [count, bgColor]);
           
    if(count === 1 ){
        addBtn = <Btn name="+" onClick={() =>  setCount(count => count + 1)}/>;
    }
    if(count > 1 && count < 10){
        addBtn = <Btn name="+" onClick={() =>  setCount(count => count + 1)}/>;
        removeBtn = <Btn name="-" onClick={() => setCount(count => count - 1)}/>;
    }
    if(count === 10){
        removeBtn = <Btn name="-" onClick={() => setCount(count => count - 1)}/>;
    }

    return (
        <Fragment>
            <div className={"container " + bgColor}>
                <h1>Combien d'oreillers dans votre vie ?</h1>
                <div className="carrousel">
                    <img src={imgUrl} alt="coussin.png"/>
                </div>
                <div className="control">
                    {removeBtn}
                    <h2>{count}</h2>
                    {addBtn}
                </div>
            </div>
        </Fragment>
    )
};

export default Home;