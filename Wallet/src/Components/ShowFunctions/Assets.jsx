import {Link} from "react-router-dom";
import "./Assets.css";

const Assets = () => {
   return(
    <>
      <div className="content">
         <p>No Assets Yet</p>
         <Link to={"https://support.metamask.io/hc/en-us/articles/360058238591-NFT-tokens-in-MetaMask-wallet"}>Learn More</Link>
      </div>
    </>
   )
}
export default Assets;