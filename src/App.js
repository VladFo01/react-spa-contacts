import { useState } from "react"
import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from "./pages/Contacts/Contacts";
import Details from './pages/Details/Details';


function App() {
  // we save contacts in App component to prevent 
  // reinitializing of its when we move into pages
  const [contacts, setContacts] = useState([]);
  
  return (
    <Routes>
      <Route path={'/contacts/*'} element={<Contacts contacts={contacts} setContacts={setContacts} />} />
      <Route path={'/details/:id/*'} element={<Details contacts={contacts} setContacts={setContacts} />} />
      <Route path={'*'} element={<Navigate to={'/contacts'} />} />
    </Routes>
  );
}

export default App;