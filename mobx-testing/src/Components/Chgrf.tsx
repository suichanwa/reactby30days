import React, { useRef } from "react";


export const Chgrf = () => {
    const ref = useRef<HTMLInputElement>(null);

    const onClick = () => {
        let value = ref.current!.value;
        console.log(value);
    }

    return (
        <div>
            <input type="text" ref={ref} />
            <button onClick={onClick}>Click</button>
        </div>
    )
}
