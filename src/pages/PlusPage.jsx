import { useState } from 'react';
import useCountStore from '../stores/useCountStore';

export default function PlusPage() {
    
    const countStore = useCountStore();

    return (
        <div>
            <h1>PlusPage : {countStore.count}</h1>
            <button onClick={countStore.plus}>+1 증가</button>
        </div>
    )
}