import React, { Component } from "react";
import "./SearchBar.css";
import Button from 'react-bootstrap/Button';


export default class SearchBar extends Component {
    state = {
        userName: "",
    }

    formSubmit = async (e) => {
        try {
            e.preventDefault();
            const resp = await fetch(`https://api.github.com/users/${this.state.userName}`);
            const data = await resp.json();
            this.props.onSubmit(data);
            this.setState({ userName: "" });
        }
        catch (err) {
            console.log(err);
            this.setState({ userName: "" });
        }

    }
    render() {
        return (
            <form className="SearchBar" onSubmit={this.formSubmit} >
                <input className="txtInpt" type="text" placeholder="git profile" onChange={e => this.setState({ userName: e.target.value })} value={this.state.userName} />
                <Button variant="dark" type="submit" >add profile</Button>
            </form>
        );
    }
}