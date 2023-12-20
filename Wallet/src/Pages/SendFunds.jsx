import { ethers } from "ethers";
import "./SendFunds.css";
import { Link } from "react-router-dom";

const SendFunds = ({network, privat}) => {

    const transfer = async (event) => {
        event.preventDefault();
        const address = document.getElementById("receiverAccount").value;
        const value = document.getElementById("receiveAmount").value;
        const tx = {
            to: address,
            value: ethers.utils.parseEther(value)
        }
        

        try {
            const {private_key} = privat;
            const provider = new ethers.providers.JsonRpcProvider(network);
            const wallet = new ethers.Wallet(private_key, provider);
            await wallet.sendTransaction(tx);
            console.log("success transaction");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container">
                <form onSubmit={transfer}>
                <Link to="/home"><p className="sign">&lt;Back</p></Link>
                    <div className="input-box">
                    <input type="text" id="receiverAccount" placeholder="Enter receiver address" required/>
                    </div>
                    <div className="input-box">
                    <input type="text" id="receiveAmount" placeholder="Enter sending Value" required/>
                    </div>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </>
    )
}
export default SendFunds;