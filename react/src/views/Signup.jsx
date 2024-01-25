import { Link } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axios-client.js";

export default function Signup() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();


  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    //console.log(payload)
    axiosClient.post( '/signup', payload)
    .then(({data}) => {
      setUser(data.user)
      setToken(data.token)

    })
    .catch((err) => {

      const response = err.response; 
      if (response && response.status === 422) {
        //const errors = response.data.errors;
        console.log(response.data.errors);
      }
     })
    }






  return (
    // Formular na novú registráciu
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
            <h1 className="title">Registrácia zadarmo</h1>
            <input ref={nameRef} placeholder="Meno" />
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Heslo" />
            <input ref={passwordConfirmationRef} type="passwordup" placeholder="Heslo znova" />
            <button className="btn btn-block">Registruj</button>
            <p className="message">
              Už ste registrovaný? <Link to="/login">Login</Link>
            </p>

        </form>

      </div>
   
    </div>
  )
}
