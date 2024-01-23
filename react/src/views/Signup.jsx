import { Link } from "react-router-dom";

export default function Signup() {
  const onSubmit = (ev) => {
    ev.preventDefault()
}

  return (
    // Formular na novú registráciu
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
            <h1 className="t">Registrácia zadarmo</h1>
            <input type="name" placeholder="Meno" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Heslo" />
            <input type="passwordup" placeholder="Opakuj heslo" />
            <button className="btn btn-block">Registruj</button>
            <p className="message">
              Už ste registrovaný? <Link to="/login">Login</Link>
            </p>

        </form>

      </div>
   
    </div>
  )
}
