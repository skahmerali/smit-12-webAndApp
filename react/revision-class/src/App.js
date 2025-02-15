import { useState, useRef } from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { UserName } from './Name.js';
import Saylani from './Saylani.js';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import UserName from './components/UserName.jsx';

function App() {
  const [userGettingName, setUserGettingName] = useState('');
  const [visible, setVisible] = useState(false);
  // function inputValue (event){
  //   setUserGettingName(event.target.value);
  // }
  const ref = useRef()
  console.log(ref.current, 'ref');
  const router = createBrowserRouter([
    {
      path: '/ahmer',
      element: <Saylani />
    },
    {
      path: '/',
      element: <> <Navbar /> <Home /> </>
    },
    {
      path: `/home/:userName`,
      element: <> <Navbar /> <UserName /> </>
    },

  ])


  return (
    <RouterProvider router={router}>
      <>
        <div>
          Hello Saylani
        </div>
        <input onChange={(e) => setUserGettingName(e.target.value)} />
        <button onClick={() => { setVisible(true) }}>clickme</button>
        <UserName userGettingName={userGettingName} visible={visible} />

      </>
    </RouterProvider>
  );
}

// <BrowserRouter>
//   <Navbar />
//   <Routes>
//     <Route path='/' element={<Home />} />
//     <Route path="/blog" element={< Saylani />} />
//     <Route path="/saylani/:userName" element={< UserName />} />
//   </Routes >
// </BrowserRouter>
{/* <>
          <div>
            Hello Saylani
          </div>
          <input onChange={(e) => setUserGettingName(e.target.value)} />
          <button onClick={() => { setVisible(true) }}>clickme</button>
          <UserName userGettingName={userGettingName} visible={visible} />

        </> */}
// React Router Dom version 7
// <BrowserRouter>
//   <Routes>
//         <Route>
//           <Home />
//         </Route>

//   </Routes>
{/* </BrowserRouter > */ }
// React Router Dom version 6



{/* <input type='text' placeholder='Enter your name' onChange={(event)=> setUserGettingName(event.target.value)}  /> */ }
{/* <input type='text'/>
    {userGettingName} */}
{/* <button onClick={(event) => setUserGettingName(event.target.value)}>Click me</button> */ }
{/* <div>
    </div> */}
{/* <Saylani /> */ }
{/* <UserName value={userGettingName} /> */ }
{/* <UserName value={'Hello world'} /> */ }
{/* <UserName value={['name', 'ahmer']} /> */ }


export default App;
