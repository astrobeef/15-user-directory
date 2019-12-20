import React from "react";

export default function UserCard(props) {

    const {image, name, number, email, dob} = props.user;

    return (

        <ul className="list-group list-group-horizontal">
            <li className="list-group-item rounded-0 col">
                <img src = {image} style = {{height : "50px"}}></img>
            </li>
            <li className="list-group-item rounded-0 col">{name}</li>
            <li className="list-group-item rounded-0 col">{number}</li>
            <li className="list-group-item rounded-0 col">{email}</li>
            <li className="list-group-item rounded-0 col">{dob}</li>
        </ul>

    )
}