import React from "react";

const numgen = (props) => {
    const { bgcolor, completed } = props;
    return (
        <div>
        <div>
            <span>{`${completed}%`}</span>
        </div>
        </div>
    );
}
export default numgen;
