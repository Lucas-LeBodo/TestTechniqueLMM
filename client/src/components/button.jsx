import React, { Fragment } from 'react';

const Button = (props) => {

    
    return (
        <Fragment>
            <span className="btn" onClick={props.onClick}>
                {props.name}
            </span>
        </Fragment>
    )
};

export default Button;