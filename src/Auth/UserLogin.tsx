import React from 'react';
import APIURL from '../helpers/environment';
import {withStyles, Button} from '@material-ui/core'

export interface UserLoginProps {
updateToken: any,
classes: any
}

export interface UserLoginState {
    username: string,
    password: string,
    // token: string
}

class UserLogin extends React.Component<UserLoginProps, UserLoginState> {
    classes: any
    constructor(props: UserLoginProps) {
        super(props);
        this.state = { username: "", password: "" };
        this.classes = this.props.classes;
    }
    handleClick = () => {
     
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const body: LoginRequest = { user: { userName: this.state.username, password: this.state.password } }
        const requestOptions = { method: "POST", headers: headers, body: JSON.stringify(body) }

        fetch(APIURL, requestOptions)
        .then(response => response.json())
        .then((json: LoginResponse) => {
            console.log(json);
            if(json.message === "COMMENCE TRIVIA!"){
            alert("Login Successful! Commence Trivia!")}
                else{
                    alert("Invalid Login Credentials. Please try again.")
                
            }
            console.log(json.sessionToken);
            this.props.updateToken(json.sessionToken);
            localStorage.setItem("permission", json.permission)
        })
        .catch(err => {
            console.log(err, "login not working");
        })
    }  
    

                // set the token
                //store it in local storage
                // store permission in local storage


        // .then((json: LoginResponse) => {
        //     console.log(json.sessionToken)
        // })

    render() {
        return (
            <div>
                {/* <form> */}
                <h4>Welcome Back!</h4>
                <br />
                <input onChange={(e) => this.setState({ username: e.target.value })} type="text" name="username" placeholder="EMAIL ADDRESS" id="username" />
                <br />
                <input onChange={(e) => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="PASSWORD" />
                <br />
                <Button color="secondary" variant="contained" onClick={this.handleClick} className={this.classes.root}>LOG IN!</Button>
                {/* </form> */}
            </div>            
        );
    }
}

export interface User {
    userName: string;
    password: string;
}

export interface LoginRequest {
    user: User;
}

export interface LoginResponse {
    message: string;
    userName: string;
    sessionToken: string;
    permission: string;


}

export default withStyles((theme) => ({
    root: {
        fontFamily: 'Roboto',
        fontWeight: "bold",
        border: '3px solid white',
    },
}))(UserLogin);

