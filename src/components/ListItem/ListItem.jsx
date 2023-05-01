import React from "react";

export const ListItem = (contact, onDelete) =>
{
    console.log("in item", contact)
    const { id, name, number } = contact;
    return (<li key={id} id={id}>
        <p>{name}:  {number}</p>
        <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </li>) } 