import { useEffect, useState } from 'react'

import './App.css'
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  // useEffect(() => {
  //   const singupdataFun = async () => {
  //     try {
  //       const data = fetch("http://localhost:3000/signup", {
  //         method: "POST",
  //         headers: { 'Content-Type': "application/json" },
  //         body: JSON.stringify(formData)
  //       })
  //       const res = await data.json();
  //       // const res = await JSON.parse(data);
  //       // .then((res) => res.json())
  //       // .then((data) => console.log(data.serverMsg));
  //       // const res = await 
  //     }
  //     catch (err) {
  //       console.log(err);

  //     }
  //   }
  // }, [])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(' e.preventdefault()');
    
    try {
      const data = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(formData)
      })
      const res = await data.json();
      console.log(res);

      alert(res.serverMsg)
      
      // const res = await JSON.parse(data);
      // .then((res) => res.json())
      // .then((data) => console.log(data.serverMsg));
      // const res = await 
    }
    catch (err) {
      console.log(err);

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='email' name='email' onChange={handleChange} />
        <input type="text" placeholder='password' name='password' onChange={handleChange} />
        <input type="text" placeholder='name' name='name' onChange={handleChange} />
        <input type="text" placeholder='age' name='age' onChange={handleChange} />

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default App
