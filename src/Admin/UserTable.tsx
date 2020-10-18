import React, { useState, useEffect } from 'react';






export interface UserTableProps {
  token: string
}

export interface UserTableState {
  
  users: any,

}

class UserTable extends React.Component<UserTableProps, UserTableState> {
  constructor(props: UserTableProps) {
    super(props);
    this.state = {users: []};
  }

  URL = "http://localhost:3000";

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = () => {

    fetch(`${this.URL}/user/seeall`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        this.setState({ users: logData });
        console.log(logData);

      })
  }

  displayUsers = () => {
    if (this.state.users !== []) {
      return this.state.users.map((user: any) => {
        const id = user.id;
        const userName = user.userName;
        const permission = user.permission;


       
        return (
          <div>
            <h3>{`User #${id}`}</h3>
            <ul>
              <li>{`UserName: ${userName}`}</li>
              <li>{`Permission: ${permission}`}</li>
            </ul>
            <button onClick={(e) => this.deleteUser(id)}>Delete User</button>
          </div>
        )
      })
    }
  }


deleteUser = (userId:number) => {
  fetch(`${this.URL}/user/delete/${userId}`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: this.props.token,
    }),
  })
    .then((res) => res.json())
    .then((logData) => {
      alert("This user has been deleted.")
      console.log(logData);
      this.getUsers();

    })
}



  render() {
    return (
      <div>
        {this.displayUsers()}

      </div>
    );
  }
}

export default UserTable;
