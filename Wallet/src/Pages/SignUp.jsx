import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const SignUp = ({savePrivatKey}) => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigateTo = useNavigate();

  const signin = async (event) => {
    event.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    try {
      const user = {
        email,
        password
      }
      console.log(user);

      const res = await fetch("http://localhost:3000/api/user/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      const data = await res.json();
      console.log(data);

      if (data.message === "Registration successfull") {
        const wallet = ethers.Wallet.createRandom();
        if (wallet.address) {
          const data2 = {
            address: wallet.address,
            private_key: wallet.privateKey,
            mnemonic: wallet.mnemonic.phrase
          };

          const res2 = await fetch("http://localhost:3000/api/v1/address/createaddress",{
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(data2)
          });

          const result = await res2.json();
          console.log(result);

          if(result.message === "New address is added"){
            savePrivatKey(
              wallet.address,
              wallet.privateKey,
              wallet.mnemonic.phrase
            );
  
            const userData = {
              email: email,
              account: wallet.address,
              private_Key: wallet.privateKey,
              mnemonic: wallet.mnemonic.phrase
            };
  
            const jsonObj = JSON.stringify(userData);
  
            localStorage.setItem("userWallet", jsonObj);
            navigateTo("/");
          }else{
            throw new error;
          }
        }
      } else {
        throw new error;
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
        <div className="wrapper" >
          <form onSubmit={signin}>
            <h2>Register</h2>
            <div className="input-box">
            <input type="text" id="EmailAddress" placeholder="Enter Email" ref={emailRef} required/>
            </div>
            
            <div className="input-box">
            <input type="text" id="Password" placeholder="Enter Password" ref={passwordRef} required/>
            </div>
            <button type="submit" className="btn" style={{padding: "10px"}}>Register</button>
          </form>
        </div>
  )
}
export default SignUp;