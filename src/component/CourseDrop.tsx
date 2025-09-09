// Component: CourseDrop - แสดงรายวิชาที่ถอนแล้ว

import React from 'react';
import { useCourseStore } from '../store/courseStore';
import type { Course } from '../store/courseStore';

const CourseDrop: React.FC = () => {
    const { droppedCourses, restoreCourse } = useCourseStore((state) => ({
        droppedCourses: state.droppedCourses,
        restoreCourse: state.restoreCourse,
    }));

    const handleRestore = (courseId: string) => {
        if (window.confirm('คุณต้องการลงทะเบียนรายวิชานี้อีกครั้งหรือไม่?')) {
            restoreCourse(courseId);
        }
    };

    if (droppedCourses.length === 0) {
        return (
            <div className="course-drop">
                <h3>รายวิชาที่ถอนแล้ว</h3>
                <p className="empty-message">ไม่มีรายวิชาที่ถอน</p>
            </div>
        );
    }

    return (
        <div className="course-drop">
            <h3>รายวิชาที่ถอนแล้ว ({droppedCourses.length} วิชา)</h3>
            
            <div className="dropped-course-table">
                <div className="table-header">
                    <div>รหัสวิชา</div>
                    <div>ชื่อวิชา</div>
                    <div>หน่วยกิต</div>
                    <div>อาจารย์</div>
                    <div>เกรดเดิม</div>
                    <div>การจัดการ</div>
                </div>
                
                {droppedCourses.map((course: Course) => (
                    <div key={course.id} className="table-row dropped">
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
                                onClick={() => handleRestore(course.id)}
                                className="restore-button"
                                title="ลงทะเบียนอีกครั้ง"
                            >
                                ลงทะเบียนใหม่
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDrop;
