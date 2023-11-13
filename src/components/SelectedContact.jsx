import React from "react";
import { useState, useEffect } from 'react';


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
     const [contact, setContact] = useState(null);

     useEffect (() => {
        const fetchContactDetails = async () => {
            try {
                if (!selectedContactId) {
                    return;
                  }
                const response = await fetch(` https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }

                const contactData = await response.json();
                setContact(contactData);
                console.log(contactData);
            } catch (error) {
                console.error('Error fetching contact details:', error);
            }
        }
        fetchContactDetails();
     }, [selectedContactId]);

    return (
        <div>
            {contact && (
            <>
            <p>Selected Contact ID: {selectedContactId}</p>
            <p>Contact Name: {contact.name}</p>
            <p>Contact Username: {contact.username}</p>
            <p>Contact Email: {contact.email}</p>
            <p>Contact Phone: {contact.phone}</p>
            </>
    )}
        </div>
    );
}