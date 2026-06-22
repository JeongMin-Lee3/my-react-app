import { useEffect, useState } from 'react'


export default function LifeCyclePage() {
    
    const [text, setText] = useState('A'); // text 변수를 선언하고 A라는 값을 할당
    
    useEffect(() => {
        alert('text가 변경됨 : ');
    }, [text]);

    // 컴포넌트가 마운트될 때 실행되는 함수
    useEffect(() => {
        console.log('LifeCyclePage 준비됨');
    }, []);

    const handleClick = () => {
        setText('B');         // 버튼을 클릭하면 text 변수를 B로 변경
    }
    
    return (
        <div>
            <h1>LifeCyclePage : {text}</h1>
            <button onClick={handleClick}>변경하기</button>
        </div>
    )
}