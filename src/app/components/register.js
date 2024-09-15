"use client";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async() => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if(user){
                console.log('User Eklendi..');
            }
        } catch (error) {
            const errorCode = error.code;
            if (errorCode == "auth/email-already-in-use") {
                alert("Böyle bir kullanıcı zaten var.");
            } else if (errorCode == "auth/invalid-email") {
                alert("Hatalı e-posta adresi");
            } else if (errorCode == "auth/operation-not-allowed") {
                alert("Operation not allowed.");
            } else if (errorCode == "auth/weak-password") {
                alert("Şifreniz güvenli değil");
            }
        }
    };

    return (
        <div>3
            <div>
              <label>Email</label>
              <input
                type="text"
                className='text-black'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                className='text-black'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button onClick={register} className="button">Kaydol</button>
            </div>
        </div>
      );
}