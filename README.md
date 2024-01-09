# Decentralised Wallet DApp Documentation v0.0.1
Welcome to the documentation for our decentralised wallet DApp – a secure and user-friendly solution for managing your cryptocurrency assets across various networks. This DApp empowers users to seamlessly create new addresses, send funds, and import both accounts and tokens. With support for multiple networks, including Ethereum Mainnet, Sepolia Testnet, Polygon Mumbai, Polygon Mainnet, and Goerli Testnet, our wallet offers a versatile and comprehensive experience for users in the decentralised finance (DeFi) space.
## Key Features:
### 1. Create New Address:
Generate new cryptocurrency addresses effortlessly. Each address is securely generated and ready for use on your selected network.
### 2. Send Funds:
Initiate transactions with ease. Our wallet allows you to send funds securely, providing a smooth experience for managing your assets.
### 3. Import Accounts:
Bring your existing cryptocurrency accounts into our decentralised wallet. Effortlessly manage multiple accounts in one convenient location.
### 4. Import Tokens:
In addition to accounts, import your favourite tokens. Our DApp supports a variety of tokens, enhancing your ability to track and manage your entire portfolio.
### Supported Networks:
### Ethereum Mainnet:
The largest and most widely used public blockchain, home to a plethora of decentralised applications (DApps) and smart contracts.
### Sepolia Testnet:
A testing environment for Ethereum developers, allowing you to experiment and test your DApp without using real Ether.
### Polygon Mumbai:
Part of the Polygon network, a scaling solution for Ethereum. Mumbai is the testnet for Polygon, providing a sandbox for development.
### Polygon Mainnet:
The production environment of the Polygon network, offering fast and low-cost transactions.
### Goerli Testnet:
A cross-client testnet for Ethereum developers, enabling collaboration and testing in a shared environment.
Whether you're an experienced cryptocurrency enthusiast or just getting started in the decentralised world, our wallet DApp is designed to simplify your journey. Explore the features, take advantage of the supported networks, and manage your assets securely in one unified platform.
Thank you for choosing our decentralised wallet DApp. Happy exploring!

# Prerequisites
Before you dive into using our decentralised wallet DApp, make sure you have the following prerequisites in place. Familiarity with the following technologies and concepts will help you make the most of your experience:
### 1. Basic Knowledge of React.js:
Our DApp is built using React.js, a popular JavaScript library for building user interfaces. Having a basic understanding of React.js will enable you to navigate and customise the user interface effectively.
If you are new to React.js, consider going through the official React documentation and completing introductory tutorials to get started.
### 2. Ether.js:
Ether.js is a powerful JavaScript library for interacting with the Ethereum blockchain. Understanding the basics of Ether.js will be essential for working with addresses, sending funds, and managing Ethereum-based assets in our wallet DApp.
Explore the Ether.js documentation to familiarise yourself with its functionalities and usage.

### 3. HTML and CSS:
A fundamental knowledge of HTML and CSS is essential for customising and styling the user interface of our DApp. You should be comfortable creating and modifying HTML elements and styling them using CSS.
If you need a refresher or want to learn these technologies, consider checking out resources like MDN Web Docs for HTML and CSS.
### Additional Resources:

React.js Official Documentation: React Documentation.
Ether.js Documentation: Ether.js Documentation.
HTML and CSS Learning Resources: MDN Web Docs.

By ensuring you have a solid foundation in these technologies, you'll be well-prepared to explore and leverage the features of our decentralised wallet DApp.

# Local Setup
Follow these steps to set up and run the decentralised wallet DApp locally on your machine. The project is organised into two folders: Server and Wallet.
Prerequisites:
Before proceeding, make sure you have the following prerequisites installed on your machine:
Node.js: Make sure you have Node.js installed to run JavaScript applications.
npm: npm is the package manager for JavaScript. It is included with Node.js.
Server Setup:
Clone the repository in your local system
```
Git clone https://github.com/AshishMeena137/Decentralized-Wallet.git

1. Navigate to the Server Folder:
cd Server

2. Install Server Dependencies:
npm install

3. Start the Server:
npm start
```

The server will run on a specified port (e.g., http://localhost:3000).
Client Setup:
```
1. Navigate to the Client Folder:
cd ../Wallet

2. Install Client Dependencies:
npm install

4. Start the Client:
npm run dev
```

The client will be accessible at http://localhost:5173 by default.
Explore the Decentralised Wallet DApp:
Explore the decentralised wallet DApp locally on your machine. Use the provided functionalities such as creating new addresses, sending funds, and importing accounts and tokens.
Additional Information:
If you encounter any issues or have questions, refer to the troubleshooting section in the documentation or reach out to our support team.
For more advanced development and deployment options, consult the deployment documentation provided.
Congratulations! You've successfully set up the decentralised wallet DApp locally on your machine. Start building and exploring the exciting world of decentralised finance (DeFi).

# Troubleshooting
If you encounter any issues while setting up or using the decentralised wallet DApp, refer to the following troubleshooting guide. If your problem persists, feel free to reach out to our support team for further assistance.
## 1. Common Issues:
### 1.1 Application Does Not Start
Symptom: The application fails to start, or you encounter errors upon running npm run dev.
Solution:
Ensure that Node.js and npm are installed correctly.
Check for any error messages in the console, and resolve any missing dependencies.
Confirm that the necessary environment variables are set up properly.
### 1.2 Unable to Connect to the Server
Symptom: The client is unable to connect to the server, or you encounter network-related issues.
Solution:
Check that the server is running and accessible.
Verify the server's URL in the client's Wallet/src/Components/DoFunctions/ and Wallet/src/Pages/ files and make sure it matches the actual server location.
Ensure that there are no firewall or CORS (Cross-Origin Resource Sharing) issues.
## 2. Blockchain Interactions:
### 2.1 Issues with Ethereum Network
Symptom: Problems interacting with the Ethereum network, such as transactions not going through.
Solution:
Verify that your Ethereum node or Infura API key is correctly configured in the Wallet/src/Components/DoFunctions/Provider.jsx file.
Confirm that your wallet has sufficient funds for transactions on the selected network.
Check for any network-specific issues, such as congestion or maintenance.
### 2.2 Token Importing Errors
Symptom: Inability to import tokens into the wallet.
Solution:
Double-check the token contract address and ensure it is correct.
Verify that the selected network supports the token you are trying to import.
Check for any issues with token smart contracts, such as incorrect implementations.
## 3. Customization and Development:
### 3.1 CSS Styling Issues
Symptom: Styling problems or layout issues with the DApp.
Solution:
Inspect the HTML structure and CSS rules using browser developer tools.
Confirm that your custom styles do not conflict with existing styles.
Check for typos or errors in your CSS files.
### 3.2 Server-Side Errors
Symptom: Errors reported by the server or issues with server functionality.
Solution:
Review the server logs for any error messages.
Ensure that the server dependencies are installed correctly.
Debug the server code to identify and resolve issues.
## 4. Contact Support:
If you've followed the troubleshooting steps and still encounter problems, please reach out to our support team at ashishmeenaofficial731@gmail.com for personalised assistance. Provide detailed information about the issue, including error messages and steps to reproduce the problem.

#### Read full code explanation documentation https://docs.google.com/document/d/1kIrqcpV9T_TSjAzFpZnsiZOBcf8N3pEplgmUifm3Rg0/edit?usp=sharing
