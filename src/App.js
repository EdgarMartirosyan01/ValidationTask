import React, {Component} from "react";
import { render } from "react-dom";
import Regist from "./Regist/Regist";
// import Login from "./Login/Login";
import Main from "./Main";

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
          <section>
              <Main/>
          </section>
        )
    
  }  
}




export default App;