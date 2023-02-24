import logo from './logo.svg';
import './App.css';

import {Top_menu} from "./components/Top_menu";
import {Mainbody} from './components/Mainbody';
const obj={
  title:"Softfixed",
  source:"bootstarp"
}
function App() {
  return (
    
    <>
    
  <Top_menu obj={obj}/>
  <Mainbody body="hello" />
    </>
  );
}

export default App;
