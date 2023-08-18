import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    //  d'authentification ici
    
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Se connecter</h2>
      </div>
    );
  }

  return (
    <div className='register-box' >
        <div className='image-container'>
            <img src="05.png" alt="" />
        </div>
        <div className='register-container'>
      <h2>Connectez vous</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Adresse e-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <Link to = "register">
      <h5>S'INSCRIRE</h5>
      </Link>
      </div>
    </div>
  );
}

export default Login;