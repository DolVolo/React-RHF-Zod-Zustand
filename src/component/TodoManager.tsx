// Component สำหรับจัดการการลบข้อมูล Todo

import React from 'react';
import { useTodoStore } from '../store/todoStore';

const TodoManager: React.FC = () => {
    const { todos, clearCompleted } = useTodoStore((state) => ({
        todos: state.todos,
        clearCompleted: state.clearCompleted,
    }));

    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const pendingCount = totalCount - completedCount;

    return (
        <div className="todo-manager">
            <h3>จัดการรายการ</h3>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">ทั้งหมด:</span>
                    <span className="stat-value">{totalCount}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">เหลือ:</span>
                    <span className="stat-value pending">{pendingCount}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">เสร็จแล้ว:</span>
                    <span className="stat-value completed">{completedCount}</span>
                </div>
            </div>
            
            {completedCount > 0 && (
                <div className="actions">
                    <button
                        onClick={clearCompleted}
                        className="clear-button"
                    >
                        ลบงานที่เสร็จแล้ว ({completedCount})
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodoManager;
