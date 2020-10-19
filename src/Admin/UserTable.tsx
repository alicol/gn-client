import { findAllByPlaceholderText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';






export interface UserTableProps {
  token: string
}

export interface UserTableState {
  updatedUserName: string,
  users: any,
  showUpdateUser: boolean,
  editUserId: number | null

}

class UserTable extends React.Component<UserTableProps, UserTableState> {
  constructor(props: UserTableProps) {
    super(props);
    this.state = {users: [], updatedUserName: "", showUpdateUser: false, editUserId: null};
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

        const changeUserName = () => {
          if (this.state.showUpdateUser == true && this.state.editUserId == id){
            return(
              <div>
                <input placeholder={userName} type="text" onChange={(e) => this.setState({updatedUserName: e.target.value})}/>
                <button onClick={(e) => this.setState({editUserId: null})}>Cancel</button>
                <button type="submit" onClick={(e) => {this.editUser(id); this.setState({showUpdateUser: false})}}> Submit Change</button>
              </div>
            )
          }
        }

       
        return (
          <div>
            <h3>{`User #${id}`}</h3>
            <ul>
              <li>{`UserName: ${userName}`}</li>
              {changeUserName()}
              <li>{`Permission: ${permission}`}</li>
            </ul>
            <button onClick={(e) => this.deleteUser(id)}>Delete User</button>
            <button onClick={(e) => {this.setState({showUpdateUser: true}); this.setState({editUserId: id})}}>Edit UserName</button>
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

editUser = (userId:number) => {
  fetch(`${this.URL}/user/edit/${userId}`, {
    method: "PUT",
    body: JSON.stringify({
      user: {
       userName: this.state.updatedUserName,
     
      },
  }),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: this.props.token,
    }),
  })
    .then((res) => res.json())
    .then((logData) => {
      alert("This user has been edited.")
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
