import { Link } from "react-router-dom";

const Tokens = () => {
    return(
        <>
           <div>
              <p>No Token Yet</p>
              <Link to={"/importtoken"}>Import Token</Link>
           </div>
        </>
    )
}
export default Tokens;