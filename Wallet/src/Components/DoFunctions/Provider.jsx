import { useRef } from "react"
import "./Provider.css";
const Provider = ({ saveProvider }) => {

   const valueRef = useRef();
   const provider = () => {
      const providerValue = valueRef.current.value;
      console.log(providerValue);
      try {
         if (providerValue == "Ethereum Mainnet") {
            saveProvider("https://eth-mainnet.g.alchemy.com/v2/6HBrMBs2mFZdKbe9-kpXrzbFid7GXvcc");
         } else if (providerValue == "Polygon Mainnet") {
            saveProvider("https://rpc.ankr.com/polygon");
         } else if (providerValue == "Polygon Mumbai") {
            saveProvider("https://rpc.ankr.com/polygon_mumbai");
         } else if (providerValue == "Sepolia Testnet") {
            saveProvider("https://rpc.ankr.com/eth_sepolia");
         } else if (providerValue == "Goerli Testnet") {
            saveProvider("https://rpc.ankr.com/eth_goerli");
         }
      } catch (error) {
         console.log(error);
      }
   }
   // console.log(network);

   return (
      <div className="select-container">
            <h2>Select a Network</h2>
         <div>
            <select id="options" ref={valueRef} onChange={provider} className="select-box">
               <option>Ethereum Mainnet 👍</option>
               <option>Polygon Mainnet 👍</option>
               <option>Polygon Mumbai 👍</option>
               <option>Sepolia Testnet 👍</option>
               <option>Goerli Testnet 👍</option>
            </select>
         </div>
      </div>
   )
}

export default Provider;