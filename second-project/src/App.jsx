import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/sunglass/Watch/Watch'
import Bottles from './bottles/Bottles'

function App() {

  const [watchs, setWatches] = useState([])
  const [count, setCount] = useState([]);
  
  const handleCard = (values)=>{
     const newCount = [...count,values]
     setCount(newCount)
  }

  useEffect(()=>{
     fetch('watch.json')
     .then(res => res.json())
     .then(data => setWatches(data))

  },[])
   
  
  return (
    <>
        
      <h1>Vite + React</h1>
      <h4>Add:{count.length}</h4>
      <div className='design'>
      {
        watchs.map(watch => <Watch watch={watch} handleCard={handleCard}></Watch> )
      }
      </div>
    </>
  )
}

export default App
