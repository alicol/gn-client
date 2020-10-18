import * as React from 'react';
// import { UserTableResponse, Result } from "./UserTableInterface";
import Table from '@material-ui/core/table';


export interface UserTableProps {
  userName: string;
  url: string;
  token: string;
}

export interface UserTableState {
  userInformation: string;
}

class UserTable extends React.Component<UserTableProps, UserTableState> {
  constructor(props: UserTableProps) {
    super(props);
    this.state = { userInformation: [] };
  }

  componentDidMount() {
    const url = 'http://localhost:3000/user/getall'
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    const body: UserTableResponse = { userName: this.props.userName }
    const requestOptions = { method: "GET", headers: headers, body: JSON.stringify(body) }


    fetch(this.props.url, requestOptions)
      .then(res => res.json())
      .then((json: UserTableResponse) => {
        console.log(json);
        this.setState({ userInformation: json.results })
      })
  }

  render() {
    return (
      <div>
        <Table>
        <table>
          <tr>
            <th>User Name</th>
          </tr>
          <tr>
            <td>{this.props.userInformation.length > 0  ? (this.state.userInformation.map(
              
            ))}</td>
          </tr>
        </table>
        </Table>
      </div>
    );
  }
}

export default UserTable;