import * as React from 'react';
import APIURL from '../helpers/environment';
export interface UserSignupProps {
updateToken: any
}

export interface UserSignupState {
    username: string,
    password: string
}

class UserSignup extends React.Component<UserSignupProps, UserSignupState> {
    constructor(props: UserSignupProps) {
        super(props);
        this.state = { username: "", password: "" };
    }

    handleClick = () => {
      
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const body: SignUpRequest = { user: { userName: this.state.username, password: this.state.password } }
        const requestOptions = { method: "POST", headers: headers, body: JSON.stringify(body) }
        fetch(APIURL, requestOptions)
        .then(response => response.json())
        .then((json: SignUpResponse) => {
            console.log(json);
            if(json.message === "USER SUCCESSFULLY INITIALIZED"){
            alert("New User Created")}
                else{
                    alert("Invalid Username or Password. Username must be a valid email address and password must be at least eight characters.")
                
            }
            console.log(json.sessionToken)
            this.props.updateToken(json.sessionToken);
            localStorage.setItem("permission", "basic")
        })
        .catch(err => {
            console.log(err, "Signup not working");
        })
}
    render() {
        return (<div>
            
            <h4>Welcome!</h4>
            <br />
            <input onChange={(e) => this.setState({ username: e.target.value })} type="text" name="username" placeholder="EMAIL ADDRESS" id="username" />
            <br />
            <input onChange={(e) => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="PASSWORD" />
            <br />
            <button onClick={this.handleClick} className="submitSignUp">SIGN UP!</button>
        </div>);
    }
}

export default UserSignup;

export interface User {
    userName: string;
    password: string;
}

export interface SignUpRequest {
    user: User;
}

export interface SignUpResponse {
    user: string;
    message: string;
    sessionToken: string;
    permission: string
}
