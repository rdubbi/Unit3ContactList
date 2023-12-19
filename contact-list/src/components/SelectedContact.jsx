import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function SelectedContact({ selectedContactId, setSelectedContactId }) {

    const [contact, setContact] = useState([]);

    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json();
            setContact(result)
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact();
      }, []);

    return (
   <div>
    <h2>You Selected:</h2>
    <h1> {contact.name} </h1>
    <p> Email: {contact.email} </p>
    <p> Phone Number: {contact.phone} </p>
    <button onClick={()=>{setSelectedContactId(null)}}>Back To Contact List</button>
   </div>
    );
  }