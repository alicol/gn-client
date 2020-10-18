import React from 'react';


export interface UserEditProps {

}

export interface UserEditState {
    username: string;
    password: string;
}

class UserEdit extends React.Component<UserEditProps, UserEditState> {
    constructor(props: UserEditProps) {
        super(props);
        this.state = { username: "", password: "" };
    }

    handleClick = () => {
        const url = 'http://localhost:3000/user/edit/:id'
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const body: UserEditRequest = { user: { userName: this.state.username, password: this.state.password } }
        const requestOptions = { method: "PUT", headers: headers, body: JSON.stringify(body) }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data: UserEditResponse) => {
                localStorage.setItem("permission", data.permission)
            })



    }
    render() {
        return (
           <div></div>
        );
    }
}

export interface User {
    userName: string;
    password: string;
}

export interface UserEditRequest {
    user: User;
}

export interface UserEditResponse {
    userName: string;
    password: string;
    permission: string;
}

export default UserEdit;