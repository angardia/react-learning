import { Component } from "react";
import Card from "./Card/Card";

export default class DataList extends Component {
    render() {
        return (
            <div className="DataList">
                {this.props.users.map(user => {
                    if (user.message !== "Not Found") {
                        return <Card key={user.id} {...user} />;
                    }
            
                    return null;
                }

                )}
            </div>
        );
    }
}
