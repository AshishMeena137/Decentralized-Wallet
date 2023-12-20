import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Login from './Pages/Login'
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { useState } from "react";
import Provider from "./Components/DoFunctions/Provider";
import CreateAccount from "./Pages/CreateAccount";
import ImportAccount from "./Pages/ImportAccount";
import ImportToken from "./Pages/ImportToken";
import SendFunds from "./Pages/SendFunds";


function App() {
  const [network,setNetwork] = useState("https://eth-mainnet.g.alchemy.com/v2/6HBrMBs2mFZdKbe9-kpXrzbFid7GXvcc");
  const [privat, setPrivat] = useState({
    address: null,
    private_key: null,
    mnemonic: null
  });
  console.log(network);
  console.log(privat);

  const saveProvider = (provider) => {
    setNetwork(provider);
  }

  const savePrivatKey = (address,privatekey,mnemonic) => {
    setPrivat({address: address, private_key: privatekey, mnemonic: mnemonic});
  }
  const router = createBrowserRouter([
    {path:"/",element: <Login/>},
    {path:"/signUp",element: <SignUp savePrivatKey={savePrivatKey}/>},
    {path:"/home",element: <Home privat={privat} network={network} savePrivatKey={savePrivatKey}/>},
    {path:"/createaccount",element: <CreateAccount />},
    {path:"/importaccount",element: <ImportAccount network={network}/>},
    {path:"/importtoken",element: <ImportToken />},
    {path:"/sendfunds",element: <SendFunds network={network} privat={privat}/>}
  ])
  return (
    <>
      <Provider saveProvider={saveProvider} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
