// Component: CourseList - แสดงรายวิชาที่เพิ่มทั้งหมด

import React from 'react';
import { useCourseStore } from '../store/courseStore';
import type { Course } from '../store/courseStore';

const CourseList: React.FC = () => {
    const registeredCourses = useCourseStore((state) => state.registeredCourses);
    const calculateGPA = useCourseStore((state) => state.calculateGPA);
    const dropCourse = useCourseStore((state) => state.dropCourse);

    const totalCredits = registeredCourses.reduce((sum, course) => sum + course.credits, 0);
    const gpa = calculateGPA();

    const handleDrop = (courseId: string) => {
        if (window.confirm('คุณต้องการถอนรายวิชานี้หรือไม่?')) {
            dropCourse(courseId);
        }
    };

    if (registeredCourses.length === 0) {
        return (
            <div style={{color: 'black', padding: '10px', border: '1px solid #ccc'}}>
                <h3 style={{color: 'black'}}>รายวิชาที่ลงทะเบียน</h3>
                <p style={{color: 'gray', fontStyle: 'italic'}}>ไม่มีรายวิชาที่ลงทะเบียน</p>
            </div>
        );
    }

    return (
        <div style={{color: 'black', padding: '10px', border: '1px solid #ccc'}}>
            <div style={{marginBottom: '15px'}}>
                <h3 style={{color: 'black', marginBottom: '5px'}}>รายวิชาที่ลงทะเบียน ({registeredCourses.length} วิชา)</h3>
                <div style={{color: 'black', fontSize: '14px'}}>
                    <span style={{marginRight: '15px'}}>หน่วยกิตรวม: {totalCredits}</span>
                    <span>GPA: {gpa.toFixed(2)}</span>
                </div>
            </div>
            
            <div style={{maxHeight: '400px', overflowY: 'auto'}}>
                {registeredCourses.map((course: Course) => (
                    <div 
                        key={course.id} 
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            padding: '10px',
                            margin: '5px 0',
                            backgroundColor: '#f9f9f9'
                        }}
                    >
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                            <div style={{flex: 1}}>
                                <div style={{fontWeight: 'bold', color: 'black', marginBottom: '2px'}}>
                                    {course.courseCode}
                                </div>
                                <div style={{color: 'black', marginBottom: '2px'}}>
                                    {course.courseNameTH}
                                </div>
                                <div style={{color: '#666', fontSize: '12px', marginBottom: '5px'}}>
                                    {course.courseNameEN}
                                </div>
                                <div style={{color: 'black', fontSize: '14px'}}>
                                    <span style={{marginRight: '10px'}}>หน่วยกิต: {course.credits}</span>
                                    <span style={{marginRight: '10px'}}>เกรด: {course.grade}</span>
                                </div>
                                <div style={{color: '#666', fontSize: '12px'}}>
                                    อาจารย์: {course.instructor}
                                </div>
                            </div>
                            <button
                                onClick={() => handleDrop(course.id)}
                                style={{
                                    background: '#ff4444',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px 10px',
                                    borderRadius: '3px',
                                    cursor: 'pointer',
                                    fontSize: '12px'
                                }}
                                title="ถอนรายวิชา"
                            >
                                ถอน
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
