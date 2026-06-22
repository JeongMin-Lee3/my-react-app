import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const useTodoStore = create(
    persist(    // persist 미들웨어를 사용하면 데이터를 브라우저의 로컬 스토리지에 저장 가능
        (set, get) => ({

            // 데이터
            todo:null,

            // 액션함수 선언 (데이터 변경하는 함수)
            setTodo: async (todoId)=>{
                var response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
                const result = response.data;
                
                set({ todo: result });
            }
        }),
        {
            name: 'todo-storage',
        }
    )
);

export default useTodoStore;