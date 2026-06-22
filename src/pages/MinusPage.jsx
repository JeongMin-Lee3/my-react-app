import { useState } from 'react';
import useCountStore from '../stores/useCountStore';

export default function MinusPage() {
    const {count, minus} = useCountStore();
    
    return (
        <div>
            <h1>MinusPage : {count}</h1>
            <button onClick={minus}>-1 감소</button>
        </div>
    )
}