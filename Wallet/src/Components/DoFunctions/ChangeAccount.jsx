
import { useEffect, useState } from "react";
import "./ChangeAccount.css";

const ChangeAccount = ({ savePrivatKey }) => {
  const [address, setAddress] = useState();
  const [privatekey, setPrivatekey] = useState();
  useEffect(() => {
    const changeAddress = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/address/alladdress");
        const result = await res.json();
        console.log(result);
        const select = document.getElementById("accountList");
        const options = result.data.addresses;
        for (let i = 1; i < options.length; i++) {
          let opt = options[i].address;
          let element = document.createElement("option");
          element.textContent = opt;
          element.value = opt;
          select.appendChild(element);
        }
      } catch (error) {
        console.log(error);
      }
    }
    changeAddress();
  }, []);

  async function selectAccount() {
    const selectAddress = document.getElementById("accountList").value;
    try {
      if (selectAddress && selectAddress !== "Choose an Address") {
        setAddress(selectAddress);
        const data = {
          address: selectAddress
        }
        const res3 = await fetch("http://localhost:3000/api/v1/address/privatekey", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        const returndata = await res3.json();
        if (returndata.message === "success") {
          console.log("status: ",returndata.data.status)
          setPrivatekey(returndata.data.status);
          savePrivatKey(
            selectAddress,
            returndata.data.status,
            "Changed"
          );
        }else{
          console.log("not found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  console.log("address",address);
  console.log("privatekey",privatekey);
  return (
    <>
      <select id="accountList" onChange={selectAccount}>
        <option className="onmove">Choose an Address</option>
      </select>
    </>
  )
}
export default ChangeAccount;