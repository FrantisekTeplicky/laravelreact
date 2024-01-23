import { Link } from "react-router-dom";

export default function Login() {
 
  const onSubmit = (ev) => {
    ev.preventDefault()
}

  return (
    // Formular na prihlásenie
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
            <h1>Prihlásenie</h1>
            <input type="email" placeholder="Zadaj email" />
            <input type="password" placeholder="Zadaj heslo" />
            <button className="btn btn-block">Login</button>
            <p className="message">
              Nie ste registrovaný? <Link to="/signup">Nová registrácia</Link>
            </p>

        </form>

      </div>
   
    </div>
  )
}


