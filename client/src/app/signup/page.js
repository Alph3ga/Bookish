'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import '@/styles/Signup.css';

export default function Signup(){
    const [formData, setFormData] = useState({
        username: '',   
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    });
    
    const router= useRouter();

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTogglePassword = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, name, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post((process.env.SERVER || "http://localhost")+":8080/signup", {
                userName: username,
                name: name,
                email: email,
                password: password,
            });

            if(response.status!=201){
                setError(response.message);
                return;
            }

            setError('');
            router.push('/login');
            return;
        } 
        catch (error) {
            setError(error.response.data.message);
            return;
        }
    };

    return (
    <div className="signup-form">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Name:</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Password:</label>
            <input
            type={formData.showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Confirm Password:</label>
            <input
            type={formData.showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>
            <input
                type="checkbox"
                checked={formData.showPassword}
                onChange={handleTogglePassword}
            />
            Show Password
            </label>
        </div>
        <button type="submit">Sign Up</button>
        </form>
    </div>
    );
};
