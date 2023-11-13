import { useState } from 'react';
import './App.css'
import React from "react";
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

// create a on click function that when a user clicks on a specific contact row it navigates
// to a separate view showing the selected contact and details about them

// map out the contacts with the onClick property 
// set a featured contact similar to puppy pals workshop
// console.log then key the information details you want shown


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    {selectedContactId ? (
      <SelectedContact 
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
        />
    ) : (
      <ContactList 
        setSelectedContactId={setSelectedContactId}
        
        />
    )}
    </>
  );
}

