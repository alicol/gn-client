import { findAllByPlaceholderText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import {Button, withStyles} from '@material-ui/core'
import './Admin.css'

export interface UserTableProps {
  token: string
  classes: {
    root: any;
    warning: any;
    danger: any;
  };
}

export interface UserTableState {
  updatedUserName: string,
  users: any,
  showUpdateUser: boolean,
  editUserId: number | null

}

class UserTable extends React.Component<UserTableProps, UserTableState> {
  classes : any
  constructor(props: UserTableProps) {
    super(props);
    this.state = {users: [], updatedUserName: "", showUpdateUser: false, editUserId: null};
    this.classes = this.props.classes;
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
                <Button variant="contained" onClick={(e) => this.setState({editUserId: null})}>Cancel</Button>
                <Button variant="contained" type="submit" onClick={(e) => {this.editUser(id); this.setState({showUpdateUser: false})}}> Submit Change</Button>
              </div>
            )
          }
        }

       
        return (
          <div className="userTable">
            <p className="edits">{`User ${id}: ${userName} `} 
                {changeUserName()}
                {` Permission: ${permission}`}</p>    
           
           <div className="userEditButtons">
           <Button variant="contained" className={this.classes.warning} onClick={(e) => {this.setState({showUpdateUser: true}); this.setState({editUserId: id})}}>{`Edit User ${id}`}</Button>
            
            <Button variant="contained" className={this.classes.danger} onClick={(e) => this.deleteUser(id)}>{`Delete User ${id}`}</Button>        
            
            </div>
        
            
            
            
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
        <hr />
        <h4><u>Edit Users</u></h4>
        {this.displayUsers()}

      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
  },

  danger: {
    background: '#ff1744',
    '&:hover': {
      backgroundColor: '#ff616f',
    },
    fontWeight: 'bold',
    marginLeft: '1vw',
    fontSize: '2vw',
  },

  warning: {
    background: '#ff8f00',
    '&:hover': {
      backgroundColor: '#ffc046',
    },
    fontWeight: 'bold',
    marginRight: '1vw',
    fontSize: '2vw',
  }
}))
(UserTable);
