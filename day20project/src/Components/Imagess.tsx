import React from 'react';

const Image = (props:any) => {
    props = {
        ...props,
    }
    
    return (
        <div>
            <img src={props.image} alt={props.alt} />
        </div>
    );
}

export default Image;
