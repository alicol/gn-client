import * as React from 'react';
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
        const url = 'http://localhost:3000/user/signup'
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const body: SignUpRequest = { user: { userName: this.state.username, password: this.state.password } }
        const requestOptions = { method: "POST", headers: headers, body: JSON.stringify(body) }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((json: SignUpResponse) => {
                console.log(json.sessionToken)
            })
    }
    render() {
        return (<div>
            <input onChange={(e) => this.setState({ username: e.target.value })} type="text" name="username" placeholder="Username" id="username" />
            <input onChange={(e) => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="Password" />
            <button onClick={this.handleClick}>Sign Up</button>
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
}
