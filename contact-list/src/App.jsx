import "./App.css";
import ContactList from "./components/ContactList";
("./ContactList.jsx");
import SelectedContact from "./components/SelectedContact";
(".SelectedContact.jsx");
import { useState } from "react";

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
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

// export default App
