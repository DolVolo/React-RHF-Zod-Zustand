// Component สำหรับเพิ่มข้อมูล Todo

import React, { useState } from 'react';
import { useTodoStore } from '../store/todoStore';

const TodoAdd: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) {
            addTodo(inputText.trim());
            setInputText('');
        }
    };

    return (
        <div className="todo-add">
            <h3>เพิ่ม Todo ใหม่</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="พิมพ์งานที่ต้องทำ..."
                        className="todo-input"
                    />
                    <button type="submit" className="add-button">
                        เพิ่ม
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TodoAdd;
