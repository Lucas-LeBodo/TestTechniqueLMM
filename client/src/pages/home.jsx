// import Libs
import React, { Fragment, useEffect, useState } from 'react';

// import Component
import Btn from "../components/button";

const Home = () => {

    let addBtn = '';
    let removeBtn = '';

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

    }, [count]);

                
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
            {removeBtn}
            <img src={imgUrl} alt="coussin"/>
            {addBtn}
        </Fragment>
    )
};

export default Home;