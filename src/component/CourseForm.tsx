// Component: CourseForm - แบบฟอร์มการเพิ่มรายวิชา

import React, { useState } from 'react';
import { useCourseStore } from '../store/courseStore';

const CourseForm: React.FC = () => {
    const [formData, setFormData] = useState({
        courseCode: '',
        courseNameTH: '',
        courseNameEN: '',
        credits: 0,
        instructor: '',
        grade: 'A'
    });
    
    const addCourse = useCourseStore((state) => state.addCourse);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.courseCode.trim() && formData.courseNameTH.trim()) {
            addCourse(formData);
            setFormData({
                courseCode: '',
                courseNameTH: '',
                courseNameEN: '',
                credits: 0,
                instructor: '',
                grade: 'A'
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'credits' ? parseInt(value) || 0 : value
        }));
    };

    return (
        <div className="course-form">
            <h3>เพิ่มรายวิชา</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>รหัสวิชา:</label>
                    <input
                        type="text"
                        name="courseCode"
                        value={formData.courseCode}
                        onChange={handleChange}
                        placeholder="เช่น CS101"
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>ชื่อวิชา (ไทย):</label>
                    <input
                        type="text"
                        name="courseNameTH"
                        value={formData.courseNameTH}
                        onChange={handleChange}
                        placeholder="ชื่อวิชาภาษาไทย"
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>ชื่อวิชา (อังกฤษ):</label>
                    <input
                        type="text"
                        name="courseNameEN"
                        value={formData.courseNameEN}
                        onChange={handleChange}
                        placeholder="Course Name in English"
                    />
                </div>
                
                <div className="form-group">
                    <label>หน่วยกิต:</label>
                    <input
                        type="number"
                        name="credits"
                        value={formData.credits}
                        onChange={handleChange}
                        min="1"
                        max="6"
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>อาจารย์ผู้สอน:</label>
                    <input
                        type="text"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        placeholder="ชื่ออาจารย์"
                    />
                </div>
                
                <div className="form-group">
                    <label>เกรด:</label>
                    <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                    >
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                </div>
                
                <button type="submit" className="submit-button">
                    เพิ่มรายวิชา
                </button>
            </form>
        </div>
    );
};

export default CourseForm;
