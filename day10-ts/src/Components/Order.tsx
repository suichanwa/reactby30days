import React from 'react';


const highterOrder = (component: any) => {
    return (props: any) => {
        return (
            <div className="order">
                {component(props)}
            </div>
        );
    }
}

export default highterOrder;
