// Component: CourseList - แสดงรายวิชาที่เพิ่มทั้งหมด

import React from 'react';
import { useCourseStore } from '../store/courseStore';
import type { Course } from '../store/courseStore';

const CourseList: React.FC = () => {
    const { registeredCourses, calculateGPA, dropCourse } = useCourseStore((state) => ({
        registeredCourses: state.registeredCourses,
        calculateGPA: state.calculateGPA,
        dropCourse: state.dropCourse,
    }));

    const totalCredits = registeredCourses.reduce((sum, course) => sum + course.credits, 0);
    const gpa = calculateGPA();

    const handleDrop = (courseId: string) => {
        if (window.confirm('คุณต้องการถอนรายวิชานี้หรือไม่?')) {
            dropCourse(courseId);
        }
    };

    if (registeredCourses.length === 0) {
        return (
            <div className="course-list">
                <h3>รายวิชาที่ลงทะเบียน</h3>
                <p className="empty-message">ไม่มีรายวิชาที่ลงทะเบียน</p>
            </div>
        );
    }

    return (
        <div className="course-list">
            <div className="course-header">
                <h3>รายวิชาที่ลงทะเบียน ({registeredCourses.length} วิชา)</h3>
                <div className="summary">
                    <span>หน่วยกิตรวม: {totalCredits}</span>
                    <span>GPA: {gpa.toFixed(2)}</span>
                </div>
            </div>
            
            <div className="course-table">
                <div className="table-header">
                    <div>รหัสวิชา</div>
                    <div>ชื่อวิชา</div>
                    <div>หน่วยกิต</div>
                    <div>อาจารย์</div>
                    <div>เกรด</div>
                    <div>การจัดการ</div>
                </div>
                
                {registeredCourses.map((course: Course) => (
                    <div key={course.id} className="table-row">
                        <div className="course-code">{course.courseCode}</div>
                        <div className="course-name">
                            <div className="name-th">{course.courseNameTH}</div>
                            {course.courseNameEN && (
                                <div className="name-en">{course.courseNameEN}</div>
                            )}
                        </div>
                        <div className="credits">{course.credits}</div>
                        <div className="instructor">{course.instructor}</div>
                        <div className={`grade grade-${course.grade.replace('+', 'plus')}`}>
                            {course.grade}
                        </div>
                        <div className="actions">
                            <button
                                onClick={() => handleDrop(course.id)}
                                className="drop-button"
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
