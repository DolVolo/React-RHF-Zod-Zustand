// Simple version of CourseDrop for testing

import { useCourseStore } from '../store/courseStore';

const CourseDropSimple = () => {
    const droppedCourses = useCourseStore((state) => state.droppedCourses);

    return (
        <div>
            <h3>รายวิชาที่ถอนแล้ว (Simple Version)</h3>
            <p>จำนวนรายวิชาที่ถอน: {droppedCourses.length}</p>
            {droppedCourses.length > 0 ? (
                <ul>
                    {droppedCourses.map((course) => (
                        <li key={course.id}>
                            {course.courseCode} - {course.courseNameTH}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>ไม่มีรายวิชาที่ถอน</p>
            )}
        </div>
    );
};

export default CourseDropSimple;
