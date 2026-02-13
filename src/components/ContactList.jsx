import ContactItem from './ContactItem'

export default function ContactList({ contacts, onRemove }) {
  if (!contacts.length) return <p style={{ color: '#555' }}>Список пуст</p>

  return (
    <div style={styles.list}>
      {contacts.map(c => (
        <ContactItem key={c.id} contact={c} onRemove={onRemove} />
      ))}
    </div>
  )
}

const styles = {
  list: { display: 'flex', flexDirection: 'column', gap: 10 }
}
