import { useState } from 'react';
import ContactRow from './ContactRow';
import { useEffect } from 'react';

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];


export default function ContactList(props) {
    // Step 10
    const [contacts, setContacts] = useState(dummyContacts);
    // Step 11
    console.log("Contacts: ", contacts);

    useEffect(()=>{
        async function fetchContacts() {
            try {
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')

                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Fetched data:', data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchContacts()
    },[]);
// step 7 tab 3
    useEffect(() => {
        async function fetchContacts() {
          try {
            const response = await fetch(
              " https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
            );
            const result = await response.json();
            setContacts(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts();
      }, []);

    return (
        <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
             {contacts.map((contact) => {
               return <ContactRow key={contact.id} contact={contact} setSelectedContactId={props.setSelectedContactId}/>;
             })}
        </tbody>
      </table>
    );
};

