// Component สำหรับแสดงผลรายการ Todo - Simple Working Version

import React from 'react';
import { useTodoStore } from '../store/todoStore';

const TodoList: React.FC = () => {
    const todos = useTodoStore((state) => state.todos);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    if (todos.length === 0) {
        return (
            <div style={{color: 'black', padding: '10px', border: '1px solid #ccc'}}>
                <h3 style={{color: 'black'}}>รายการงาน</h3>
                <p style={{color: 'gray', fontStyle: 'italic'}}>ไม่มีงานในรายการ</p>
            </div>
        );
    }

    return (
        <div style={{color: 'black', padding: '10px', border: '1px solid #ccc'}}>
            <h3 style={{color: 'black'}}>รายการงาน ({todos.length} รายการ)</h3>
            {todos.map((todo) => (
                <div key={todo.id} style={{margin: '5px 0', padding: '5px', border: '1px solid #ddd'}}>
                    <span style={{color: 'black'}}>{todo.text}</span>
                    <button 
                        onClick={() => deleteTodo(todo.id)}
                        style={{marginLeft: '10px', color: 'red'}}
                    >
                        ลบ
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
