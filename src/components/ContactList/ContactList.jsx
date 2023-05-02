import React from "react";



export const ContactList = ({contacts, onDelete}) =>     
     (     
            <ul>
        {contacts.map((contact) => 
        {
                    
                    return (                        
                            <li key={contact.id} id={contact.id}>
                                <p>{contact.name}:  {contact.number}</p>
                                <button type="button" onClick={() => onDelete(contact.id)}>Delete</button>
                            </li>                      
                        
                    )
        }
        )}
            </ul>        
    )
