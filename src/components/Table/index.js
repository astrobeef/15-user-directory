import React from "react";
import UserCardMod from "../UserCardMod/index.js";

function Table(props) {

    const { users } = props;

    return (
        <div className="row justify-content-center">
            <ul className="list-group p-5 col-10">
                <li className="list-group-item disabled p-0" aria-disabled="true">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item rounded-0 col font-weight-bold">image</li>
                        <li className="list-group-item rounded-0 col font-weight-bold">Name</li>
                        <li className="list-group-item rounded-0 col font-weight-bold">Phone Number</li>
                        <li className="list-group-item rounded-0 col font-weight-bold">Email</li>
                        <li className="list-group-item rounded-0 col font-weight-bold">DoB</li>
                    </ul>
                </li>

                {users.map(user => {
                    return (<UserCardMod user = {user}  key={Math.random()}></UserCardMod>);
                })}
            </ul>
        </div>
    )
}

export default Table;