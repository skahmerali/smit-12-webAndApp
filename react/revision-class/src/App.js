import { useState } from 'react';
import './App.css';
import { UserName } from './Name.js';
import Saylani from './Saylani.js'
function App() {
  const [userGettingName, setUserGettingName] = useState('');
  const [visible, setVisible] = useState(false);
  // function inputValue (event){
  //   setUserGettingName(event.target.value);
  // }


  return (<>
    <div>
      Hello Saylani
    </div>
    <input onChange={(e) => setUserGettingName(e.target.value)} />
    <button onClick={() => { setVisible(true) }}>clickme</button>
    <UserName userGettingName={userGettingName} visible={visible}/>



    {/* <input type='text' placeholder='Enter your name' onChange={(event)=> setUserGettingName(event.target.value)}  /> */}
    {/* <input type='text'/>
    {userGettingName} */}
    {/* <button onClick={(event) => setUserGettingName(event.target.value)}>Click me</button> */}
    {/* <div>
    </div> */}
    {/* <Saylani /> */}
    {/* <UserName value={userGettingName} /> */}
    {/* <UserName value={'Hello world'} /> */}
    {/* <UserName value={['name', 'ahmer']} /> */}
  </>
  );
}

export default App;
