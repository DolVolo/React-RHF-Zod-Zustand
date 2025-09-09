// Component: DropButton - ปุ่มสำหรับถอนรายวิชา

import React from 'react';
import { useCourseStore } from '../store/courseStore';

interface DropButtonProps {
    courseId: string;
}

const DropButton: React.FC<DropButtonProps> = ({ courseId }) => {
    const dropCourse = useCourseStore((state) => state.dropCourse);

    const handleDrop = () => {
        if (window.confirm('คุณต้องการถอนรายวิชานี้หรือไม่?')) {
            dropCourse(courseId);
        }
    };

    return (
        <button
            onClick={handleDrop}
            className="drop-button"
            title="ถอนรายวิชา"
        >
            ถอน
        </button>
    );
};

export default DropButton;
