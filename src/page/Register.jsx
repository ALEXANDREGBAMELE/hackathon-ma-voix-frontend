import React, { useState } from 'react';
import "./Register.css"

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Nom:', firstName);
    console.log('Prénom:', lastName);
    console.log('Numéro de téléphone:', phoneNumber);
    console.log('Adresse e-mail:', email);
    console.log('Numéro de pièce d\'identité:', idNumber);
    console.log('Mot de passe:', password);
  };

  return (
    <div className='register-box'> 
        <div className='image-container'>
            <img src="05.png" alt="" />
        </div>
        <div className='register-container'>
      <h2>Creer votre compte</h2>
      <form onSubmit={handleSubmit}>
        <div className='name-container'>
        <div>
          <label>Nom *</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Prénom *</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        </div>
        <div>
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Telephone *</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Numéro de la pièce d'identité *</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
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
        <button type="submit">S'INSCRIRE</button>
      </form>
      <h5>Se connecter</h5>
    </div>
    </div>
    

  );
}

export default Register