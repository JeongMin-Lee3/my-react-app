import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useTodoStore from '../stores/useTodoStore';

export default function TodoPage() {
    
    const {todo, setTodo} = useTodoStore();
    const [searchParams] = useSearchParams(); 
  
    // .get('파라미터명')을 사용하여 값을 꺼냅니다.
    const todoId = searchParams.get('todoid');


    useEffect(() => {
        setTodo(todoId);
    }, [todoId]);


    return (
        <div>
            <h1>TodoPage</h1>

            {todo ?
            (    
                <>
                <h3>title : {todo.title}</h3>
                <h3>id : {todo.id}</h3>
                <h3>userId : {todo.userId}</h3>
                <h3>completed : {todo.completed ? '완료' : '미완료'}</h3>
                </>
            )
            :
                <h3>데이터 없음</h3>
            }
        </div>
    )
}