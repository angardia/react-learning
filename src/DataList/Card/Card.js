import { Component } from "react";
import "./Card.css";

export default class Card extends Component {

    render() {
        const user = this.props;
        return (
            <div className="profile">
                <img className="profile__img" src={user.avatar_url} alt="user img"/>
                <div className="profile__info">
                    <p className="profile__name">{user.name}</p>
                    <a className="profile__link" href={user.html_url}>{user.html_url}</a>
                </div>
            </div>
        );
    }
}