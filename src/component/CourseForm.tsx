// Component: CourseForm - แบบฟอร์มการเพิ่มรายวิชา

import React, { useState } from 'react';
import { useCourseStore } from '../store/courseStore';

const CourseForm: React.FC = () => {
    const [formData, setFormData] = useState({
        courseCode: '',
        courseNameTH: '',
        courseNameEN: '',
        credits: 3,
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
                credits: 3,
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
        <div style={{color: 'black', padding: '10px', border: '1px solid #ccc'}}>
            <h3 style={{color: 'black'}}>เพิ่มรายวิชา</h3>
            <form onSubmit={handleSubmit}>
                <div style={{margin: '10px 0'}}>
                    <label style={{color: 'black', display: 'block', marginBottom: '5px'}}>รหัสวิชา:</label>
                    <input
                        type="text"
                        name="courseCode"
                        value={formData.courseCode}
                        onChange={handleChange}
                        placeholder="เช่น CS101"
                        required
                        style={{width: '100%', padding: '5px', border: '1px solid #ccc'}}
                    />
                </div>
                
                <div style={{margin: '10px 0'}}>
                    <label style={{color: 'black', display: 'block', marginBottom: '5px'}}>ชื่อวิชา (ไทย):</label>
                    <input
                        type="text"
                        name="courseNameTH"
                        value={formData.courseNameTH}
                        onChange={handleChange}
                        placeholder="ชื่อวิชาภาษาไทย"
                        required
                        style={{width: '100%', padding: '5px', border: '1px solid #ccc'}}
                    />
                </div>
                
                <div style={{margin: '10px 0'}}>
                    <label style={{color: 'black', display: 'block', marginBottom: '5px'}}>ชื่อวิชา (อังกฤษ):</label>
                    <input
                        type="text"
                        name="courseNameEN"
                        value={formData.courseNameEN}
                        onChange={handleChange}
                        placeholder="Course Name in English"
                        required
                        style={{width: '100%', padding: '5px', border: '1px solid #ccc'}}
                    />
                </div>
                
                <div style={{margin: '10px 0'}}>
                    <label style={{color: 'black', display: 'block', marginBottom: '5px'}}>หน่วยกิต:</label>
                    <input
                        type="number"
                        name="credits"
                        value={formData.credits}
                        onChange={handleChange}
                        min="1"
                        max="6"
                        required
                        style={{width: '100%', padding: '5px', border: '1px solid #ccc'}}
                    />
                </div>
                
                <div style={{margin: '10px 0'}}>
                    <label style={{color: 'black', display: 'block', marginBottom: '5px'}}>ชื่ออาจารย์ผู้สอน:</label>
                    <input
                        type="text"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        placeholder="ชื่ออาจารย์"
                        required
                        style={{width: '100%', padding: '5px', border: '1px solid #ccc'}}
                    />
                </div>
                
                <div style={{margin: '10px 0'}}>
                    <label style={{color: 'black', display: 'block', marginBottom: '5px'}}>เกรด:</label>
                    <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        style={{width: '100%', padding: '5px', border: '1px solid #ccc'}}
                    >
                        <option value="A">A (4.0)</option>
                        <option value="B+">B+ (3.5)</option>
                        <option value="B">B (3.0)</option>
                        <option value="C+">C+ (2.5)</option>
                        <option value="C">C (2.0)</option>
                        <option value="D+">D+ (1.5)</option>
                        <option value="D">D (1.0)</option>
                        <option value="F">F (0.0)</option>
                    </select>
                </div>
                
                <button 
                    type="submit" 
                    style={{
                        background: '#4CAF50',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    เพิ่มรายวิชา
                </button>
            </form>
        </div>
    );
};

export default CourseForm;
