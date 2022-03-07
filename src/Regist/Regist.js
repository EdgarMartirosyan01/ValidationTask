import React, {Component} from "react";
import classes from "../Ui/Global.module.css"
// import Login from "../Login/Login";
// import Password from "../Password/Password";
// import Button from "../Button/Button";
import Main from "../Main";

class Regist extends Component {
    constructor(props){
        super(props);
      }
      
      render(){
          return(
              <section>
                  <div className={classes['main']}>

                     <div className={classes['box']}>
                          <div className={classes['logo']}>
                              <div className={classes['img']}>
                              </div>
                              <h1> Sharp Brain</h1>
                          </div>


                        
                          <div className={classes['inputs']} >
                           <h2>Login</h2>
                           
                          {/* <Login  />       */}
                          </div>

                          <div className={classes['inputs2']} >
                           <h2>Password</h2>
                          {/* <Password  />   */}
                          </div>

                            <div className={classes['forgetPassword']}>
                                <a href="">Forget Password?</a>
                            </div>

                            {/* <Button></Button> */}
                          {/* <div className={classes['btn']}>
                          <button>Log In</button>
                          </div> */}

                            <div className={classes['hr']}>

                            <hr color="lightgray"  /> <p>OR</p> <hr color="lightgray" />

                        </div>

                        <div className={classes['signupNow']}>
                            <p>Not yet Member? <a href="">Signup Now</a></p> 
                        </div>
                     </div>

                  </div>
              </section>
          )
      }
}



export default Regist;