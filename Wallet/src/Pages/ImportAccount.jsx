import { useRef } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

const ImportAccount = ({ network }) => {
    const privateRef = useRef();

    const importAddress = async (event) => {
        event.preventDefault();
        const private_key = privateRef.current.value;

        try {
            const provider = new ethers.providers.JsonRpcProvider(network);
            console.log("Provider: ",provider);
            const wallet = new ethers.Wallet(private_key, provider);

            if (wallet.address) {
                const userData = {
                    address: wallet.address,
                    private_key: private_key,
                    mnemonic: wallet.mnemonic ? wallet.mnemonic.phrase : "Mnemonic not available", // Check for null mnemonic
                };

                const res = await fetch("http://localhost:3000/api/v1/address/createaddress", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });

                const data = await res.json();

                if (data.message === "New address is added") {
                    alert("Successfully New Address is Added");
                } else {
                    throw new Error("Address not added");
                }
            }else{
                console.log("failed for fetch");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={importAddress} className="container">
            <Link to="/home"><p className="sign">&lt;Back</p></Link>
                <div className="input-box">
                <input type="text" id="AccountPrivate" placeholder="Enter private key" ref={privateRef} required/>
                </div>
                <br />
                <button type="submit">Import Account</button>
            </form>
        </>
    )
}

export default ImportAccount;
