import React from "react";
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

class Timer {
   secondos: number = 0;
   
   constructor() {
    makeAutoObservable(this);
   }

   increse() {
        this.secondos++;
    }

    decrese() {
        this.secondos--;
    }
}

const timer = new Timer();

export const ResetTimer = observer(() => {
    return (
        <span><button onClick={() => timer.secondos = 0}>Reset Timer</button></span>
    )
})


export const TimerView = observer(() => {
    return (
        <div>
            <button onClick={() => timer.decrese()}>-</button>
            <span>{timer.secondos}</span>
            <button onClick={() => timer.increse()}>+</button>
        </div>
    )
})
