
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter} from "react-router-dom";
import Appbar from './components/Appbar';
import Home from './components/Home';
import Education from "./components/Education";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
   <div>
       <HashRouter>
     <Appbar/>
     <Route>
        
      <Switch>
                    
        <Route path="/components/Education"> <Education/></Route>
        <Route path="/components/Experience" ><Experience/></Route>
        <Route path="/components/Projects" ><Projects/> </Route>
        <Route path="/components/Contact" > <Contact/></Route>
        <Route path="/"><Home/></Route>
                      
      </Switch>
                
     </Route>
     </HashRouter>

   </div>
  );
}

export default App;