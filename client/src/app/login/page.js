'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuthToken from 'util/AuthToken.js';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { saveToken } = useAuthToken();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router= useRouter();

  useEffect(()=>{
    if(localStorage.getItem('loggedIn')){
        router.push('/');
        router.refresh();
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post((process.env.SERVER || "http://localhost")+":8080/login", {
        userName: username,
        password: password,
      });

      if (response.status==200) {
        saveToken(response.data.jwt_token);
        console.log("Login success");
        router.push('/')
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
