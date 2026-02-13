import { useState } from 'react'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

export default function App() {
  const [contacts, setContacts] = useState([])

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }])
  }

  const removeContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id))
  }

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <Header title="Добавить контакт" />
        <ContactForm onAdd={addContact} />
      </div>
      <div style={styles.right}>
        <Header title="Список контактов" count={contacts.length} />
        <ContactList contacts={contacts} onRemove={removeContact} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Arial, sans-serif'
  },
  left: {
    flex: 0.3,
    padding: 20,
    background: '#f0f0f0',
    overflowY: 'auto'
  },
  right: {
    flex: 1,
    padding: 20,
    background: '#fff',
    boxShadow: '-2px 0 6px rgba(0,0,0,0.1)',
    overflowY: 'auto'
  }
}
