
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () =>{

    const logGoogleUser =  async () =>{

        const response = await signInWithGooglePopup();
        console.log("JI");
        console.log(response);
    }


  return(
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>
              Sign in With Google Pop Up
        </button>
      </div>
  )

}


export default SignIn;