
import './App.css'

// TodoList Components
import TodoAdd from './component/TodoAdd'
import TodoList from './component/TodoList'
// import TodoManager from './component/TodoManager'

// Course Registration Components (temporarily disabled)
// import CourseForm from './component/CourseForm'
// import CourseList from './component/CourseList'
// import CourseDrop from './component/CourseDrop'

// Counter Components (เดิม)
import CounterDec from './component/CounterDec'
import CounterInc from './component/CounterInc'
import CounterScore from './component/CounterScore'

function App() {
  console.log('App rendering - Testing components one by one');

  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1>Assignment: Counter, TodoList & Course Registration System</h1>
          <p style={{color: 'white', margin: '10px 0'}}>All Systems in One Page (ตามลำดับ)</p>
        </header>

        <main className="app-main" style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
          
          {/* Test: Simple content first */}
          <div style={{padding: '20px', background: 'white', marginBottom: '20px', borderRadius: '10px'}}>
            <h2 style={{color: 'black'}}>🧪 Testing - This should be visible</h2>
            <p style={{color: 'black'}}>If you can see this, the basic structure works!</p>
          </div>

          {/* 1. Counter System - Test this first */}
          <section style={{marginBottom: '40px', padding: '20px', background: 'lightblue', borderRadius: '10px'}}>
            <h2 style={{color: 'black', marginBottom: '20px'}}>1. ระบบ Counter (Zustand State Management)</h2>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <CounterScore />
              <CounterInc />
              <CounterDec />
            </div>
          </section>

          {/* 2. TodoList System - Testing TodoAdd + TodoList */}
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
                  <p style={{color: 'black', marginTop: '10px'}}>If you can see the todo list above, TodoList works!</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Course Registration System - Commented out to test */}
          <section style={{marginBottom: '40px', padding: '20px', background: 'lightyellow', borderRadius: '10px'}}>
            <h2 style={{color: 'black', marginBottom: '20px'}}>3. ระบบการถอนรายวิชา (Course Registration & Withdrawal)</h2>
            <div style={{background: 'white', padding: '20px', borderRadius: '10px', color: 'black'}}>
              <p style={{color: 'black'}}>Course system temporarily disabled for testing</p>
              {/* Course components temporarily commented out */}
            </div>
          </section>

        </main>
      </div>
    </>
  )
}

export default App
