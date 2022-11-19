import './App.css';
import {useReducer} from "react"
import Navbar from './Component/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

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
  const {isLight} = useContext(ThemeContext)
const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className={`App ${isLight ? "light":"dark"}`}>
      
      <Navbar/>
      <h1>Masai Counter</h1>
      <button onClick={()=>dispatch({type:"Increament"})}>+</button>
      {state}
      <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
    </div>
  );
}

export default App;
