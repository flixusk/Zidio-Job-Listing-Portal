import React, { useState } from 'react';

const Login = () => {
  
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee" // Default role
  }); 

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const login = async () => {
    console.log(formData);
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  const sign_up = async () => {
    console.log("Signup function executed", formData);
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while signing up. Please try again.');
    }
  };

  return (
    <section className="flexCenter flex-col pt-32 bg-stone-950 min-h-screen">
        <div className="max-w-[555px] h-[600px] bg-neutral-950 m-auto px-14 py-10 rounded-md">
            <h3 className="text-white text-3xl font-bold">{state}</h3>
            <div className="flex flex-col gap-4 mt-7">
                {state === "Sign Up" && (
                    <input
                        name='name'
                        value={formData.name}
                        onChange={changeHandler}
                        type="text"
                        placeholder="Your Name"
                        className="h-14 w-full pl-5 bg-stone-900 text-white outline-none rounded-xl"
                    />
                )}
                <input
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    type="text"
                    placeholder="Email"
                    className="h-14 w-full pl-5 bg-stone-900 text-white outline-none rounded-xl"
                />
                <input
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    type="text"
                    placeholder="Password"
                    className="h-14 w-full pl-5 bg-stone-900 text-white outline-none rounded-xl"
                />
                {state === "Sign Up" && (
                    <div className="flex flex-col">
                        <label className="mb-2 text-white">Register as:</label>
                        <select
                            name='role'
                            value={formData.role}
                            onChange={changeHandler}
                            className="h-14 w-full pl-5 bg-stone-900  outline-none rounded-xl text-white"
                        >
                            <option value="employee">Employee</option>
                            <option value="employer">Employer</option>
                        </select>
                    </div>
                )}
            </div>
            <button
                onClick={() => { state === "Login" ? login() : sign_up() }}
                className="bg-cyan-600 text-white my-5 w-full rounded-md py-2 px-4 hover:bg-cyan-700 transition-colors"
            >
                Continue
            </button>
            {state === "Sign Up" ? (
                <p className="text-white font-bold">
                    Already have an account?{" "}
                    <span
                        onClick={() => { setState("Login") }}
                        className="text-cyan-400 underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            ) : (
                <p className="text-white font-bold">
                    Don't have an account?{" "}
                    <span
                        onClick={() => { setState("Sign Up") }}
                        className="text-cyan-400 underline cursor-pointer"
                    >
                        Register
                    </span> Here
                </p>
            )}
            <div className="flexCenter mt-6 gap-3 text-white">
                <input type="checkbox" name="" id="" />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
        </div>
    </section>
);

}

export default Login;
