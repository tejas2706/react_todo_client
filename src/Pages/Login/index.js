import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { apiPrefix } from '../../config';
import './styles.css';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            details : {
                name: "",
                username: "",
                password: "",
            },
            selectedOption:"login"
        }
    }

    async componentDidMount (){
        try{

            let token = localStorage.getItem("token");
            if(token){
                this.props.history.push('/home')
            }
        }catch(error){
            //navigate to login page.
        }
    }


    onChange = (event) => {
        console.log("Login -> onChange -> event.target.value", event.target.value)
        event.preventDefault()
        if(event.target.value.length > 12){
            return;
        }
        this.setState((prevstate)=>({
            details:{
                ...prevstate.details,
                [event.target.name]: event.target.value
            }
        }))
    }

    changeOption = (event) => {
        event !== this.state.selectedOption ? this.setState({selectedOption:event}) : console.log("Already selected")
    }

    loginSignUp = async () =>{
        try{
            let res = await fetch(`${apiPrefix}/${this.state.selectedOption}`, {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    ...this.state.details
                })
            });

            let result  =  await res.json();
            console.log("Login ->------------ result", result)

            if(result && result.token){
                localStorage.setItem("token",result.token);
                this.props.history.push("/home");
            }else{
                this.setState({
                    details:
                        {
                            username:"",
                            password:""
                    }
                })
                alert(result.msg);
            }

        }catch(error){
            console.log("Login -> login -> error", error)
            this.setState({
                details:
                    {
                        username:"",
                        password:""
                }
            })
        }
    }

    render() {
        return (
            <div className="login__container">
                <div className="login__btnGrp">
                    <button className="login__loginsignupBtn" value="login" onClick={()=>this.changeOption("login")}>LOGIN &nbsp;&nbsp;</button>|
                    <button className="login__loginsignupBtn" value="signup" onClick={()=>this.changeOption("signup")}>&nbsp;&nbsp;SIGN UP</button>
                </div>
                <div className="login__line"></div>
                {this.state.selectedOption === "login" ?
                    <div>
                        <h3 className="login__title">Login</h3>
                        <div>
                            <form className="login__form">
                                <label>
                                    <h2>Username :</h2>
                                    <input
                                        required
                                        type="text"
                                        name="username"
                                        value={this.state.details.username}
                                        onChange={this.onChange}
                                        className="login__formLabel"></input>
                                </label>
                                <label>
                                    <h2>Password :</h2>
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        value={this.state.details.password}
                                        onChange={this.onChange}
                                        className="login__formLabel"></input>
                                </label>
                                <div>
                                    <button value="submit" className="login__submit" onClick={() => this.loginSignUp()}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div>
                        <h3 className="login__title">Sign Up</h3>
                        <div>
                            <form className="login__form">
                                <label>
                                    <h2>Name :</h2>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={this.state.details.name}
                                        onChange={this.onChange}
                                        className="login__formLabel"></input>
                                </label>
                                <label>
                                    <h2>Username :</h2>
                                    <input
                                        required
                                        type="text"
                                        name="username"
                                        value={this.state.details.username}
                                        onChange={this.onChange}
                                        className="login__formLabel"></input>
                                </label>
                                <label>
                                    <h2>Password :</h2>
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        value={this.state.details.password}
                                        onChange={this.onChange}
                                        className="login__formLabel"></input>
                                </label>
                                <div>
                                    <button value="submit" className="login__submit" onClick={() => this.loginSignUp()}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Login);