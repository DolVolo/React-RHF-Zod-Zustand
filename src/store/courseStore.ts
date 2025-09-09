// Course Registration/Withdrawal store using Zustand

import { create } from "zustand";

interface Course {
    id: string;
    courseCode: string;
    courseNameTH: string;
    courseNameEN: string;
    credits: number;
    instructor: string;
    grade: string;
}

interface CourseState {
    registeredCourses: Course[];
    droppedCourses: Course[];
    addCourse: (course: Omit<Course, 'id'>) => void;
    dropCourse: (courseId: string) => void;
    restoreCourse: (courseId: string) => void;
    calculateGPA: () => number;
}

// Simple ID generator fallback for crypto.randomUUID()
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Grade point mapping
const gradePoints: { [key: string]: number } = {
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
    'D+': 1.5,
    'D': 1.0,
    'F': 0.0,
    'W': 0.0, // Withdrawn
    'I': 0.0, // Incomplete
    'P': 0.0, // Pass (no grade points)
};

export const useCourseStore = create<CourseState>((set, get) => ({
    registeredCourses: [
        {
            id: '1',
            courseCode: '10301211',
            courseNameTH: 'คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์',
            courseNameEN: 'Mathematics for Computer Science',
            credits: 3,
            instructor: 'อาจารย์ ดร.พยุงศักดิ์ เกษมสำราญ',
            grade: 'A'
        },
        {
            id: '2',
            courseCode: '10301222',
            courseNameTH: 'โครงสร้างข้อมูลและอัลกอริทึม',
            courseNameEN: 'Data Structure and Algorithm',
            credits: 3,
            instructor: 'ดร.ปวีณ เขื่อนแก้ว',
            grade: 'B+'
        },
        {
            id: '3',
            courseCode: '10301223',
            courseNameTH: 'ฐานข้อมูลโครงสร้างเชิงสัมพันธ์',
            courseNameEN: 'Structure Relational Database',
            credits: 3,
            instructor: 'อาจารย์อรรถวิท ชังคมานนท์',
            grade: 'A'
        },
        {
            id: '4',
            courseCode: '10301225',
            courseNameTH: 'วิศวกรรมซอฟต์แวร์',
            courseNameEN: 'Software Engineering',
            credits: 3,
            instructor: 'ดร.สมนึก สินธุปวน',
            grade: 'B'
        },
        {
            id: '5',
            courseCode: '10301231',
            courseNameTH: 'เว็บเทคโนโลยี',
            courseNameEN: 'Web Technology',
            credits: 3,
            instructor: 'อาจารย์อรรถวิท ชังคมานนท์',
            grade: 'A'
        },
        {
            id: '6',
            courseCode: '10700313',
            courseNameTH: 'ภาษาอังกฤษเชิงวิทยาศาสตร์และนวัตกรรม',
            courseNameEN: 'English for Science and Innovation',
            credits: 3,
            instructor: 'อาจารย์กนกวรรณ สัมพันธ์',
            grade: 'B+'
        }
    ],
    droppedCourses: [
        {
            id: '7',
            courseCode: '10301214',
            courseNameTH: 'การออกแบบและพัฒนาเกม',
            courseNameEN: 'Game Design and Development',
            credits: 3,
            instructor: 'ดร.วิชาญ เกมเมอร์',
            grade: 'B'
        },
        {
            id: '8',
            courseCode: '10301215',
            courseNameTH: 'ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง',
            courseNameEN: 'Artificial Intelligence and Machine Learning',
            credits: 3,
            instructor: 'ดร.ปัญญา ไอเอไอ',
            grade: 'A'
        }
    ],
    
    addCourse: (course: Omit<Course, 'id'>) => set((state) => ({
        registeredCourses: [
            ...state.registeredCourses,
            {
                ...course,
                id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : generateId(),
            }
        ]
    })),
    
    dropCourse: (courseId: string) => set((state) => {
        const courseToMove = state.registeredCourses.find(course => course.id === courseId);
        if (!courseToMove) return state;
        
        return {
            registeredCourses: state.registeredCourses.filter(course => course.id !== courseId),
            droppedCourses: [...state.droppedCourses, courseToMove]
        };
    }),
    
    restoreCourse: (courseId: string) => set((state) => {
        const courseToRestore = state.droppedCourses.find(course => course.id === courseId);
        if (!courseToRestore) return state;
        
        return {
            droppedCourses: state.droppedCourses.filter(course => course.id !== courseId),
            registeredCourses: [...state.registeredCourses, courseToRestore]
        };
    }),
    
    calculateGPA: () => {
        const { registeredCourses } = get();
        if (registeredCourses.length === 0) return 0;
        
        let totalPoints = 0;
        let totalCredits = 0;
        
        registeredCourses.forEach(course => {
            const gradePoint = gradePoints[course.grade] || 0;
            totalPoints += gradePoint * course.credits;
            totalCredits += course.credits;
        });
        
        return totalCredits > 0 ? totalPoints / totalCredits : 0;
    },
}));

export type { Course };
