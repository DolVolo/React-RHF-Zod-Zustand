import './App.css'

// TodoList Components
import TodoAdd from './component/TodoAdd'
import TodoList from './component/TodoList'

// Course Registration Components
import CourseForm from './component/CourseForm'
import CourseList from './component/CourseList'
import CourseDropSimple from './component/CourseDropSimple'

// Counter Components (เดิม)
import CounterDec from './component/CounterDec'
import CounterInc from './component/CounterInc'
import CounterScore from './component/CounterScore'

function App() {
  console.log('App rendering - Testing simple CourseDrop component');

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

        {/* 4. Dropped Courses System */}
        <section style={{marginBottom: '40px', padding: '20px', background: 'lightcoral', borderRadius: '10px'}}>
          <h2 style={{color: 'black', marginBottom: '20px'}}>4. ระบบรายวิชาที่ถอนแล้ว</h2>
          <div style={{background: 'white', padding: '20px', borderRadius: '10px', color: 'black'}}>
            <CourseDropSimple />
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
