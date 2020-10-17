import React from 'react';
export interface UserLoginProps {
updateToken: any

}

export interface UserLoginState {
    username: string,
    password: string,
    // token: string
}

class UserLogin extends React.Component<UserLoginProps, UserLoginState> {
    constructor(props: UserLoginProps) {
        super(props);
        this.state = { username: "", password: "" };
    }
    handleClick = () => {
        const url = 'http://localhost:3000/user/login'
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const body: LoginRequest = { user: { userName: this.state.username, password: this.state.password } }
        const requestOptions = { method: "POST", headers: headers, body: JSON.stringify(body) }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data: LoginResponse) => {
                console.log(data.sessionToken)
                localStorage.setItem("permission", data.permission)
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
                <form>
                <h4>Welcome Back!</h4>
                <br />
                <input onChange={(e) => this.setState({ username: e.target.value })} type="text" name="username" placeholder="EMAIL ADDRESS" id="username" />
                <br />
                <input onChange={(e) => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="PASSWORD" />
                <br />
                <button onClick={this.handleClick} className="submitLogIn">LOG IN!</button>
                </form>
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

export default UserLogin;

