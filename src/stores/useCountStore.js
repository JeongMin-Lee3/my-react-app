import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCountStore = create(
    persist(    // persist 미들웨어를 사용하면 데이터를 브라우저의 로컬 스토리지에 저장 가능
        (set, get) => ({

            // 데이터
            count: 0,

            // 액션함수 선언 (데이터 변경하는 함수)
            plus: () => {
                set({ count: get().count + 2 });
            },

            minus: () => {
                set({ count: get().count - 2 });
            },
        }),
        {
            name: 'count-storage',
            partialize: (state) => ({ count: state.count }),
        }
    )
);

export default useCountStore;
