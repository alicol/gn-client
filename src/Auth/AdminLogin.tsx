import React from 'react'


export interface AdminLoginProps {
  
}
 
export interface AdminLoginState {
    username: string,
    permission: string,
    password: string
}
 
class AdminLogin extends React.Component<AdminLoginProps, AdminLoginState> {
    constructor(props: AdminLoginProps) {
        super(props);
        this.state = { username:"", permission: "", password: ""  };
    }
    handleClick = () => {
        const url = 'http://localhost:3000/user/login'
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const body: AdminLoginRequest = { user: { userName: this.state.username, permission: this.state.permission, password: this.state.password } }
        const requestOptions = { method: "POST", headers: headers, body: JSON.stringify(body) }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((json: AdminLoginResponse) => {
                console.log(json.sessionToken)
            })
    }


    render() { 
        return ( 
            <div>
                
                <h1>Welcome Admin!</h1>
                <input onChange={(e) => this.setState({ username: e.target.value })} type="text" name="username" placeholder="Username" id="username" />
                <input onChange={(e) => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="Password" />
                <button onClick={this.handleClick}>Login</button>
            </div>
         );
    }
}
export interface Admin {
    userName: string;
    permission: string;
    password: string;
}

export interface AdminLoginRequest {
    user: Admin;
}

export interface AdminLoginResponse {
    message: string;
    userName: string;
    sessionToken: string;


}
export default AdminLogin;