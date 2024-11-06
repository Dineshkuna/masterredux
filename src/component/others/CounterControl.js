import React from "react";
import { useDispatch } from "react-redux";
import {increment} from './CounterSlice';
import {decrement} from './CounterSlice';
import {reset} from './CounterSlice';

const CounterControl = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            <button onClick={()=> dispatch(reset())} >reset</button>
        </div>
    )
}
export default CounterControl;