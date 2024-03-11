import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/sunglass/Watch/Watch'

function App() {

  const [watchs, setWatches] = useState([])

  useEffect(()=>{
     fetch('watch.json')
     .then(res => res.json())
     .then(data => setWatches(data))

  },[])
   
  // const watchs = [
  //   { id: 1, name: 'Rolex Submariner', price: 10000 },
  //   { id: 2, name: 'Omega Speedmaster Professional', price: 5000 },
  //   { id: 3, name: 'Seiko Presage', price: 800 },
  //   { id: 4, name: 'Casio G-Shock', price: 100 },
  //   { id: 5, name: 'Tag Heuer Carrera', price: 3000 },
  // ];

  return (
    <>
        
      <h1>Vite + React</h1>
      {
        watchs.map(watch => <Watch key={watch.id} watch = {watch}></Watch> )
      }
    
    </>
  )
}

export default App
