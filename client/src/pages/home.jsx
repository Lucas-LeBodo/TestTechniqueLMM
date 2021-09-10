import React, { Fragment, useEffect, useState } from 'react';

const Home = () => {

    const  [imgUrl, setImgUrl] = useState();
    useEffect( ()  => {
        let id = 1;
        fetch(`http://localhost:8000/${id}`)
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

    }, []);

    return (
        <Fragment>
            <image src={imgUrl} alt="image de coussin"/>
        </Fragment>
    )
};

export default Home;