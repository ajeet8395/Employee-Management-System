import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => { //!This method called two way binding
    e.preventDefault(); // with it whenever submit form page got reload
    console.log(`Form Submitted ${email} and your password is ${password}`);

    setEmail('')
    setPassword('')
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 hover:border-emerald-800 transition-colors duration-300 p-20 rounded-xl">
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className="flex flex-col items-center justify-center">
          <input 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value); 
          }}
            required type="email"
            className="outline-none border-2 border-emerald-600 text-xl py-2 px-5 bg-transparent rounded-full placeholder:text-gray-400"
            placeholder="Enter your email id" />
          <input 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required 
          type="password" 
          className="outline-none border-2 border-emerald-600 text-xl py-2 px-5 mt-3 bg-transparent rounded-full placeholder:text-gray-400" placeholder="Enter your password" />
          <button className="outline-none bg-emerald-600 hover:bg-emerald-800 font-semibold transition-colors text-xl py-2 px-5 mt-8 w-full rounded-full placeholder:text-white">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default App;