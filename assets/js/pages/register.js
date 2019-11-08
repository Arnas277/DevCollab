import React, { useState } from 'react';
import { Particles } from '../components';

const CLASSES = {
    main: "poppins container h-auto w-full mx-auto flex justify-center items-start xl:items-center mt-4 xl:mt-24 pb-8",
    container: "w-full max-w-xs md:max-w-md md:z-10",
    form: {
      wrapper: "bg-white shadow-lg rounded px-8 py-10 mb-2",
      divider: "mb-6",
      label: "block text-gray-900 text-md font-semibold mb-2",
      input: "shadow-md appearance-none border-1 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-xl",
      button: "bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-md hover:shadow-xl"
    }
}

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  }

  const handleSubmit = () => {
    setUsername(username.toLowerCase())
    console.log("Username: " + username);
    console.log("Password: " + password);
  }

  const { main, container, form } = CLASSES; 
    return(
        <div className={main}>
        <div className={container} style={{zIndex: 2}}>
          <form className={form.wrapper}>
            <div className={form.divider}>
              <label
                className={form.label}
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={form.input}
                id="username"
                type="text"
                placeholder="Username"
                onChange={handleUsername}
                value={username}
              />
            </div>
            <div className={form.divider}>
              <label
                className={form.label}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={form.input}
                id="email"
                type="text"
                placeholder="Email"
                onChange={handleEmail}
                value={email}
              />
            </div>
            <div className={form.divider}>
              <label
                className={form.label}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={form.input}
                id="password"
                type="password"
                placeholder="******************"
                onChange={handlePassword}
                value={password}
              />
            </div>
            <div className={form.divider}>
              <label
                className={form.label}
                htmlFor="repeatPassword"
              >
                Re-enter password
              </label>
              <input
                className={form.input}
                id="repeatPassword"
                type="password"
                placeholder="******************"
                onChange={handleRepeatPassword}
                value={repeatPassword}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className={form.button}
                type="button"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
          <div className="relative z-10 px-4">
            <p>Already have an account?
              <a
                className="ml-1 mr-16 inline-block align-baseline font-bold text-md text-teal-500 hover:text-teal-600"
                href="/login"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
        <Particles />
      </div>
    );
}

export default RegisterPage;