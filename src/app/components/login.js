"use client";
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async() => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if(user){
                console.log('User Eklendi..', user);
            }
        } catch (error) {
            console.log(error.message);
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
              <button onClick={login} className="button">Giriş Yap</button>
            </div>
        </div>
      );
}