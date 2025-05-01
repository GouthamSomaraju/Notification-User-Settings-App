import React,{ useState } from 'react'

// import './App.css'
import Notification from './Notification'
import { ThemeProvider } from './ThemeContext'
import ControlledComp from './ControlledComp'
import UnControlledComp from './UnControlledComp'
import ErrorBoundary from './ErrorBoundary'

function BuggyComp(){
  throw new Error('Simulated Crash')
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  let [crash,setCrash]=useState(false)

  return (
  
   <ThemeProvider>
    <div className="App">
      <ThemeToggle/>
      <button onClick={()=>setModalOpen(true)}>Open</button>
      {modalOpen&&<Notification close={()=>setModalOpen(false)}/>}

        <h2>Controlled Form</h2>
        <ControlledComp />

        <h2>UnControlled Form</h2>
        <UnControlledComp />

        <h2>Crash Test</h2>
        <ErrorBoundary>
          {crash?<BuggyComp/> : <button onClick={() => setCrash(true)}>Crash App</button>}
        </ErrorBoundary>
    </div>
   </ThemeProvider>
 
  
  )
}

export default App
