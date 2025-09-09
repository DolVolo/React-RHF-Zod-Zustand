import './App.css'

// TodoList Components
import TodoAdd from './component/TodoAdd'
import TodoList from './component/TodoList'

// Course Registration Components
import CourseForm from './component/CourseForm'
import CourseList from './component/CourseList'

// Counter Components
import CounterDec from './component/CounterDec'
import CounterInc from './component/CounterInc'
import CounterScore from './component/CounterScore'

// Import course store to access dropped courses
import { useCourseStore } from './store/courseStore'

function App() {
  console.log('App rendering - All components with inline CourseDrop');
  
  // Access dropped courses directly in App component
  const droppedCourses = useCourseStore((state) => state.droppedCourses);
  const restoreCourse = useCourseStore((state) => state.restoreCourse);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Assignment: Counter, TodoList & Course Registration System</h1>
      </header>
      <main className="app-main" style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
        
        {/* 1. Counter System */}
        <section style={{marginBottom: '40px', padding: '20px', background: 'lightblue', borderRadius: '10px'}}>
          <h2 style={{color: 'black', marginBottom: '20px'}}>1. ระบบ Counter (Zustand State Management)</h2>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <CounterScore />
            <CounterInc />
            <CounterDec />
          </div>
        </section>

        {/* 2. TodoList System */}
        <section style={{marginBottom: '40px', padding: '20px', background: 'lightgreen', borderRadius: '10px'}}>
          <h2 style={{color: 'black', marginBottom: '20px'}}>2. ระบบ TodoList (Zustand State Management)</h2>
          <div style={{background: 'white', padding: '20px', borderRadius: '10px', color: 'black'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
              <div>
                <h3 style={{color: 'black', marginBottom: '15px'}}>เพิ่ม Todo</h3>
                <TodoAdd />
              </div>
              <div>
                <h3 style={{color: 'black', marginBottom: '15px'}}>รายการ Todo</h3>
                <TodoList />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Course Registration System */}
        <section style={{marginBottom: '40px', padding: '20px', background: 'lightyellow', borderRadius: '10px'}}>
          <h2 style={{color: 'black', marginBottom: '20px'}}>3. ระบบการลงทะเบียนรายวิชา</h2>
          <div style={{background: 'white', padding: '20px', borderRadius: '10px', color: 'black'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
              <div>
                <h3 style={{color: 'black', marginBottom: '15px'}}>เพิ่มรายวิชา</h3>
                <CourseForm />
              </div>
              <div>
                <h3 style={{color: 'black', marginBottom: '15px'}}>รายวิชาที่ลงทะเบียน</h3>
                <CourseList />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Dropped Courses - Inline Implementation */}
        <section style={{marginBottom: '40px', padding: '20px', background: 'lightcoral', borderRadius: '10px'}}>
          <h2 style={{color: 'black', marginBottom: '20px'}}>ระบบรายวิชาที่ถอนแล้ว (Dropped Courses)</h2>
          <div style={{background: 'white', padding: '20px', borderRadius: '10px', color: 'black'}}>
            <h3 style={{color: 'black', marginBottom: '15px'}}>
              รายวิชาที่ถอนแล้ว ({droppedCourses.length} วิชา)
            </h3>
            
            {droppedCourses.length === 0 ? (
              <p style={{color: '#666', fontStyle: 'italic', textAlign: 'center', padding: '20px'}}>
                ไม่มีรายวิชาที่ถอน
              </p>
            ) : (
              <div style={{border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden'}}>
                <div style={{
                  display: 'grid', 
                  gridTemplateColumns: '100px 2fr 80px 150px 60px 100px',
                  background: '#f7f7f7',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #ddd'
                }}>
                  <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd'}}>รหัสวิชา</div>
                  <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd'}}>ชื่อวิชา</div>
                  <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd'}}>หน่วยกิต</div>
                  <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd'}}>อาจารย์</div>
                  <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd'}}>เกรด</div>
                  <div style={{padding: '10px', textAlign: 'center'}}>การจัดการ</div>
                </div>
                
                {droppedCourses.map((course) => (
                  <div 
                    key={course.id}
                    style={{
                      display: 'grid', 
                      gridTemplateColumns: '100px 2fr 80px 150px 60px 100px',
                      borderBottom: '1px solid #eee',
                      background: '#fffaf0'
                    }}
                  >
                    <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd', fontWeight: 'bold', color: '#667eea'}}>
                      {course.courseCode}
                    </div>
                    <div style={{padding: '10px', borderRight: '1px solid #ddd'}}>
                      <div style={{fontWeight: '500'}}>{course.courseNameTH}</div>
                      <div style={{fontSize: '0.9em', color: '#666', fontStyle: 'italic'}}>{course.courseNameEN}</div>
                    </div>
                    <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd', fontWeight: 'bold'}}>
                      {course.credits}
                    </div>
                    <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd', color: '#4a5568'}}>
                      {course.instructor}
                    </div>
                    <div style={{padding: '10px', textAlign: 'center', borderRight: '1px solid #ddd'}}>
                      <span style={{
                        background: course.grade === 'A' ? '#38a169' : course.grade === 'B' ? '#68d391' : '#ed8936',
                        color: 'white',
                        padding: '2px 6px',
                        borderRadius: '3px',
                        fontWeight: 'bold'
                      }}>
                        {course.grade}
                      </span>
                    </div>
                    <div style={{padding: '10px', textAlign: 'center'}}>
                      <button
                        onClick={() => {
                          if (window.confirm('คุณต้องการลงทะเบียนรายวิชานี้อีกครั้งหรือไม่?')) {
                            restoreCourse(course.id);
                          }
                        }}
                        style={{
                          background: '#38a169',
                          color: 'white',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          fontSize: '0.9em'
                        }}
                      >
                        ลงทะเบียนใหม่
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
