import React from "react";

export default function userCard() {
    return (

        <ul class="list-group p-5">
            <li class="list-group-item disabled p-0" aria-disabled="true">
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col font-weight-bold">image</li>
                    <li class="list-group-item col font-weight-bold">Name</li>
                    <li class="list-group-item col font-weight-bold">Phone Number</li>
                    <li class="list-group-item col font-weight-bold">Email</li>
                    <li class="list-group-item col font-weight-bold">DoB</li>
                </ul>
            </li>
            <li class="list-group-item disabled p-0" aria-disabled="true">
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item col">image</li>
                    <li class="list-group-item col">Fake Name</li>
                    <li class="list-group-item col">555 249-1029</li>
                    <li class="list-group-item col">fake@email.com</li>
                    <li class="list-group-item col">09/10/2019</li>
                </ul>
            </li>
        </ul>

    )
}