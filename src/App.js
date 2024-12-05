
import { useState } from 'react';
import './App.css';
import ContactDetails from './components/ContactDetails/ContactDetails';
import ContactList from './components/ContactUser/ContactList';

function App() {

  const [contact, setContact] = useState(null)

  return (
    <div className="App">
      <ContactList onGetContact={setContact}/>
      {
        contact && <ContactDetails contact={contact}/>
      }
      
    </div>
  );
}

export default App;
