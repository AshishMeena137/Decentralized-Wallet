const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const ethereum = require('ethereumjs-wallet').default

// This database1 variable will store the user information when he/she register
// on this decentralised wallet.
const database1 = [{
    email: "Hello@gmail.com",
    password: "12345"
}];

// This database2 variable will store the wallet information {address,private key and mnemonic}.
const database2 = [{
    address: null,
    private_key: null,
    mnemonic: null
}];

// This database3 variable will store the information of token name, address and symbol.
const database3 = [{
    address: null,
    name: null,
    symbol: null
}];

                          // Functions Section Start //

// This function is for checking user email and password is present or not inside database1.
// If present it will return true otherwise false.
const LoginCheck = (email, password) => {
    const exist = database1.some(user => user.email === email && user.password === password);
    return exist;
}

// This function is for when user sign up inside this DWallet.
// This checking the length of the password if everything is fine the push the
// user information inside database1.
const SignUp = (email, password) => {
    if (password.length >= 5) {
        database1.push({ email: email, password: password });
        return "Successfully added";
    } else {
        return "Length of password must be greater than 4";
    }
}

// Add account function is for adding information of the wallet inside the database2.
const addAccount = (address, private_key, mnemonic) => {
    const exist = database2.some(user => user.address !== address);
    // console.log(address,private_key,mnemonic);
    // console.log(exist);
    if (exist) {
        database2.push({ address: address, private_key: private_key, mnemonic: mnemonic });
        return "Successfully added";
    } else {
        return "Allready added";
    }
}

// Add token function is for adding the information of the token inside database3.
const addToken = (address, name, symbol) => {
    const exist = database3.some(token => token.address === address);
    // console.log(address,name,symbol);
    if (!exist) {
        database3.push({ address: address, name: name, symbol: symbol });
        return "Successfully added";
    } else {
        return "Allready added";
    }
}

// This function is returns the private key of the sending address.
const private = (address) => {
    for (let i = 0; i < database2.length; i++) {
        if (database2[i].address === address) {
            return database2[i].private_key;
        }
    }
    return "did not found";
}

// This get wallet function is for generating new wallet deteils for user.
// After generating the deteils it is adding the information to the database2.
const getWallet = () => {
    const wallet = ethereum.generate();
    const address = wallet.getAddressString();
    const privateKey = wallet.getPrivateKeyString();
    const mnemonic = wallet.getPrivateKey().toString('hex'); // Get the private key as a hexadecimal string
    database2.push({ address, private_key: privateKey, mnemonic});
    return true;
}

                          // Functions Section End //

                            // Api Section Start //

// This API is for user login when user is trying to login it stores the send value
// by user in userInfo variable and after this it calls the LoginCheck function
// If everything is perfect then it sends the "Login successfull message" otherwise
// sends "User not Found"
app.post("/api/user/login", (req, res) => {
    const userInfo = req.body;
    const LoginStatus = LoginCheck(userInfo.email, userInfo.password);
    if (LoginStatus) {
        res.status(200).json({ message: "Login successfully" });
    } else {
        res.status(403).json({ message: "User not Found" });
    }
})

// This API is for user signUp or register. It store the information send by the user
// inside the userInfo variable after checking the send information in database1 is 
// already present or not? 
// Then calling the SignUp function with provided information and if the SingUpStatus
// variable stores the "Successfully added" message then it send the "Registration successfull"
// message to the client otherwise send the "User already present" or "wrong password length"
// message accourding to the condition metched
app.post("/api/user/signUp", (req, res) => {
    const userInfo = req.body;
    const userPresent = database1.some(user => user.email === userInfo.email);
    const SignUpStatus = SignUp(userInfo.email, userInfo.password);
    if (SignUpStatus === "Successfully added" && !userPresent) {
        res.status(403).json({ message: "Registration successfull" });
    }else if (userPresent === true) {
        res.status(403).json({ message: "User already present" });
    }else {
        res.status(403).json({ message: "Wrong password Length" });
    }
})

// This API is used for create a new wallet information by calling the addAccount function
app.post("/api/v1/address/createaddress", (req, res) => {
    const userInfo = req.body;
    // console.log(userInfo);
    const addStatus = addAccount(userInfo.address, userInfo.private_key, userInfo.mnemonic);
    if (addStatus === "Successfully added") {
        res.status(200).json({ message: "New address is added" });
    } else {
        res.status(404).json({ message: "Error Occure in adding" });
    }
});

// This create Token API is for creating new token and it is calling the addToken function
// with the given information and sending response back to the client accourding to the condition
app.post("/api/v1/token/createtoken", (req, res) => {
    const tokenInfo = req.body;
    const tokenstatus = addToken(tokenInfo.address, tokenInfo.name, tokenInfo.symbol);
    if (tokenstatus === "Successfully added") {
        res.status(200).json({ message: "New token is added" });
    } else {
        res.status(404).json({ message: "Error occure" });
    }
});

// The API is sending the all address to the client.
app.get("/api/v1/address/alladdress", (req, res) => {
    // console.log(database2);
    const addresses = database2;
    // console.log(addresses);
    res.status(202).json({
        message: "success",
        data: {
            addresses
        }
    })
});

// This API is provide the private key of the given address.
app.post("/api/v1/address/privatekey", (req, res) => {
    const { address } = req.body; // Extract the address property from the request body
    // console.log(address);
    const status = private(address);
    console.log(status);
    if (status !== "did not found") {
        res.status(200).json({ message: "success", data: { status } });
    } else {
        res.status(404).json({ message: "unsuccessful" });
    }
});

// Generate API is for generating new wallet for user by calling the getWallet function.
app.get("/api/v1/generate", (req, res) => {
    const status = getWallet(); // Invoke the function
    // console.log(status);
    if (status === true) {
        res.status(200).json({ message: "Successful generate" });
    } else {
        res.status(404).json({ message: "Failed" });
    }
});

                            // Api Section End //

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});