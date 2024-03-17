import { useState } from 'react'
import './App.css'
import  Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "rishu",
    age: 25
  }

  let myArray = [1,2,3,4,5];

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind Test</h1>
    {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="data:image/jpeg;base64,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" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    <Card name="Rishu" btnName = "Visit Profile" />
    <Card name="rimmy" btnName = "check Profile"/>
    <Card name="RANDOM" />
    </>
  )
}

export default App
