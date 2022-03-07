import { useRef } from "react"
import classes from "./Ui/Global.module.css"

const Main = (props) => {

    const login = useRef(null);
    const pass = useRef(null);

    const logReg = /^\S+\@\gmail|mail\.com$|\.ru$|\.org$|.am$/;
    const PasswordRegex = /^\S+\[A-Z]|[0-9]|[@#][A-Za-z0-9]{7,13}$/;


    const checkLogin =() => {
        if(logReg.test(login.current.value) ){
            console.log("true")
        }
        else{
            console.log("false")
        }
    }

    return(
        <section>
            <div className={classes['main']}>

            <div className={classes['box']}>
                    <div className={classes['logo']}>
                        <div className={classes['img']}></div>
                        <h1> Sharp Brain</h1>
                    </div>


              
                <div className={classes['inputs']} >
                    <h2>Login</h2>
                    <input type="email" className={classes['login']} ref={login} />    
                </div>

                <div className={classes['inputs2']} >
                 <h2>Password</h2>
                 <input type="password" className={classes['password']} ref={pass} />
                </div>

                  <div className={classes['forgetPassword']}>
                      <a href="">Forget Password?</a>
                  </div>

                  <div className={classes['btn']}>
                  <button onClick={checkLogin}>SEND</button>
                  </div>
               

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
export default Main;