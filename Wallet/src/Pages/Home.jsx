import ChangeAccount from "../Components/DoFunctions/ChangeAccount";
import Activity from "../Components/ShowFunctions/Activity";
import Tokens from "../Components/ShowFunctions/Tokens";
import Assets from "../Components/ShowFunctions/Assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import "./Home.css"

const Home = ({ privat, network, savePrivatKey }) => {
    const [ubalance, setUbalance] = useState("0");
    const [account, setAccount] = useState("Not Conected");

    //For updating user current balance.
    useEffect(() => {
        const currentBalance = async () => {
            try {
                const { address } = privat;
                if (address && address !== "Choose an Address") { // Check if address is defined and not a placeholder
                    const provider = new ethers.providers.JsonRpcProvider(network);
                    const balance = await provider.getBalance(address);
                    const ethBalance = ethers.utils.formatEther(balance);
                    setUbalance(ethBalance);
                    setAccount(address);
                } else {
                    console.log("Address is not defined or is a placeholder");
                }
            } catch (error) {
                console.log(error);
            }
        }

        currentBalance();
    }, [privat, network]);

    return (
        <div className="container">
            <ChangeAccount savePrivatKey={savePrivatKey} />
            <div className="logo">
                <p ><i class='bx bxs-wallet-alt'></i></p>
            </div>
            <div className="deteils">
            <p className="address">{account}</p>
            <p className="balance">{ubalance} ETH</p>
            </div>
            <div className="btns">
                <button ><Link to="/sendfunds">Send</Link></button>
                <button ><Link to="/importaccount">Import Account</Link></button>
                <button ><Link to="/importtoken">Import Token</Link></button>
                <button ><Link to="/createaccount">Create New Account</Link></button>
            </div>
            <div className="options">
                <span className="one">Assets <Assets /></span>
                <span className="two">Tokens <Tokens /></span>
                <span className="three">Activity <Activity /></span>
            </div>
            <Link to="/" className="logout">LogOut</Link>
        </div>
    )
}
export default Home;