import { useState, useEffect } from 'react';
import axios from 'axios';


export default function AxiosPage() {
    
    const [todoData, setTodoData] = useState(null);


    const getTodoData= async ()=>{
        // 서버에 요청 todo 응답 처리
        var response = await axios.get(`https://jsonplaceholder.typicode.com/todos/12`)
        const result = response.data;

        setTodoData(result);
    }

    useEffect(() => {
        getTodoData();
    }, []);


    return (
        <div>
            <h1>AxiosPage</h1>

            {todoData ?
            (    
                <>
                <h3>title : {todoData.title}</h3>
                <h3>id : {todoData.id}</h3>
                <h3>userId : {todoData.userId}</h3>
                <h3>completed : {todoData.completed ? '완료' : '미완료'}</h3>
                </>
            )
            :
                <h3>데이터 없음</h3>
            }
        </div>
    )
}