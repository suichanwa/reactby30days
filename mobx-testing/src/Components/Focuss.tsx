import React, {useRef, useState} from "react";

interface IProps {
    onClick: () => void;
}

export const Focuss = () => {
    const ref = useRef<HTMLInputElement>(null);

    const onClick = () => {
        ref.current!.style.backgroundColor = '#61dbfb'
        ref.current!.style.padding = '50px'
        ref.current!.style.textAlign = 'center'
    }
        
    return (
        <div>
            <input type="text" ref={ref} />
            <button onClick={onClick}>Click</button>
        </div>
    )
}
