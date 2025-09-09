// Component สำหรับแสดงผลรายการ Todo - Step 1: Add Zustand

import React from 'react';
import { useTodoStore } from '../store/todoStore';

const TodoList: React.FC = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <div style={{color: 'black', padding: '10px', border: '1px solid #ccc'}}>
            <h3 style={{color: 'black'}}>รายการงาน</h3>
            <p style={{color: 'black'}}>Todos count: {todos.length}</p>
            <p style={{color: 'black'}}>Zustand connected successfully!</p>
        </div>
    );
};

export default TodoList;
