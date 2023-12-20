import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const emailRef = useRef();
    const passworRef = useRef();
    const navigateTo = useNavigate();
    const login = async (event) => {
        event.preventDefault();
        const uemail = emailRef.current.value;
        const upassword = passworRef.current.value;
        console.log(uemail, upassword);
        try {
            const userData = {
                email: uemail,
                password: upassword
            }

            const res = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json();
            console.log(data);

            if (data.message === "Login successfully") {
                navigateTo("/home")
            } else {
                throw new error;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
            <div className="wrapper">
                <form onSubmit={login}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" id="UserEmail" placeholder="Enter Email" ref={emailRef} required />
                    </div>
                    <div className="input-box">
                        <input type="password" id="Password" placeholder="Enter Password" ref={passworRef} required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <button type="submit" className="btn" style={{padding: "10px"}}>Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="/signup">Register</a></p>
                    </div>
                </form>
            </div>
    )
}
export default Login;