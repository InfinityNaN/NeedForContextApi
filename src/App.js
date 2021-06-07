import React,{useState} from 'react';



const Sing =(props)=>{
  return(
    <div>
       <h1>I am Singing</h1>
       <Dance value={props.value}/>
    </div>
  )
}


const Dance =(props)=>{
  return(
    <div>
       <h1>I am Dancing and my score is {props.value}</h1>

    </div>
  )
}



const App =()=>{
  const [score, setScore] = useState(100)
  return(
    <div>
       <h1>I am App</h1>
       <Sing value={score}/>
    </div>
  )
}

export default App;