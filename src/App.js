import React, { Component } from 'react';
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id:1,
                    name: "Deneme0",
                    email: "deneme0@example.com"
                },
                {
                    id:2,
                    name: "Deneme1",
                    email: "deneme1@example.com"
                },
                {
                    id:3,
                    name: "Deneme2",
                    email: "deneme2@example.com"
                }
            ]
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    deleteUser(id) {
        let updatedUsers = this.state.users;

        updatedUsers = updatedUsers.filter(user => user.id !==id);
        this.setState({
            users: updatedUsers
        })
    }
    addUser(newUser) {
        let updatedUsers = this.state.users;

        updatedUsers.push(newUser);

        this.setState({
            users: updatedUsers
        });
    }
    render() {
    return (
        <div className="container">
            <h4>User App</h4>
            <hr />
            <AddUser addUser={this.addUser}/>
            <hr />
            <Users deleteUser={this.deleteUser} users = {this.state.users}/>
        </div>
    );
    }
}

export default App;