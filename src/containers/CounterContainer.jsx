import React from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { plusCounter, minusCounter } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter, shallowEqual);

    const handlePlus = (plus) => () => {
        dispatch(plusCounter(plus));
    };
    const handleMinus = (minus) => () => {
        dispatch(minusCounter(minus));
    };

    return (
        <div>
            <Counter onPlus={handlePlus} onMinus={handleMinus} />
            현재 값은 {count} 입니다.
        </div>
    );
}

export default CounterContainer;