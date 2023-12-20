import "./CreateAccount.css";
import {Link} from "react-router-dom";

const CreateAccount = () => {

    const createaccount = async (event) => {
        event.preventDefault();
        try {
            const result = await fetch("http://localhost:3000/api/v1/generate");
            const data = await result.json();

            if (data.message === "Successful generate") {
                alert("New address is Created");
            } else {
                throw new error;
            }
        } catch (error) {
            alert("Failed to Creating new Wallet");
        }

    }
    return (
        <>
            <form onSubmit={createaccount} className="container">
                <Link to="/home"><p className="sign">&lt;Back</p></Link>
                <p>Create a new account</p>
                <br />
                <button type="submit">Create</button>
            </form>
        </>
    )
}
export default CreateAccount;