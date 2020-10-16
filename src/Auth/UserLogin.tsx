import React from 'react';
export interface UserLoginProps {
updateToken: any

}

export interface UserLoginState {
    username: string,
    password: string
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
    
    render() {
        return (
            <div>
                <input onChange={(e) => this.setState({ username: e.target.value })} type="text" name="username" placeholder="Username" id="username" />
                <input onChange={(e) => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="Password" />
                <button onClick={this.handleClick}>Login</button>

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
 
// const UserLogin: React.SFC<UserLoginProps> = () => {
//     return ( <div>UserLogin</div> );

// }
export default UserLogin;
