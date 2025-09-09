// TodoList store using Zustand

import { create } from "zustand";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

interface TodoState {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    clearCompleted: () => void;
}

// Simple ID generator fallback for crypto.randomUUID()
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    
    addTodo: (text: string) => set((state) => ({
        todos: [
            ...state.todos,
            {
                id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : generateId(),
                text,
                completed: false,
                createdAt: new Date(),
            }
        ]
    })),
    
    deleteTodo: (id: string) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    
    toggleTodo: (id: string) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
    
    clearCompleted: () => set((state) => ({
        todos: state.todos.filter(todo => !todo.completed)
    })),
}));

export type { Todo };
