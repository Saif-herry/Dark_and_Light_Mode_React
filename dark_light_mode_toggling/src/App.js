import logo from './logo.svg';
import './App.css';
import {useReducer} from "react"

const initialState = 0;

const reducer = (state,action) =>{

  console.log(state,action)
  switch(action.type){
    case "Increament":
      return state+1;
    case "Decreament":
      return state-1;
    default:
      return state;
  }
}

function App() {

const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
      <h1>Setup ready</h1>
      <button onClick={()=>dispatch({type:"Increament"})}>+</button>
      {state}
      <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
    </div>
  );
}

export default App;
