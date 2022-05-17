import {useEffect, useState} from 'react'
import './App.css'
import Person from './Person';

export default function App(params: {
  name: string;
  age?: number;
}) {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   setInterval(() => setCount(count + 1), 1000);
  // });

  return (
    <div className="App">
      <header className="App-header">
        <Person name={params.name} age={params.age}></Person>

        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

