import { useRef } from "react";
import { Link } from "react-router-dom";

const ImportToken = () => {
    const addressRef = useRef();
    const nameRef = useRef();
    const symbolRef = useRef();

    const tokenImport = async (event) => {
        event.preventDefault();
        const address = addressRef.current.value;
        const name = nameRef.current.value;
        const symbol = symbolRef.current.value;
        console.log(address, name, symbol);

        const data = {
            address,
            name,
            symbol
        }
        try {
            const res = await fetch("http://localhost:3000/api/v1/token/createtoken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            console.log(result);

            if(result.message === "New token is added"){
                alert("Successfully Added A Token");
            }else{
                throw new error;
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={tokenImport} className="container">
            <Link to="/home"><p className="sign">&lt;Back</p></Link>
                <div className="input-box">
                <input type="text" id="tokenAddress" placeholder="Enter Token address" ref={addressRef} required/>
                </div>
                <div className="input-box">
                <input type="text" id="tokenName" placeholder="Enter Token Name" ref={nameRef} required/>                   
                </div>
                <div className="input-box">
                <input type="text" id="tokenSymbol" placeholder="Enter Token Symbol" ref={symbolRef} required/>                   
                </div>
                <button type="submit">Import Token</button>
            </form>
        </>
    )
}

export default ImportToken;