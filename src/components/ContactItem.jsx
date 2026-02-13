export default function ContactItem({ contact, onRemove }) {
  return (
    <div style={styles.card}>
      <div>
        <strong>{contact.name}</strong><br/>
        <span>{contact.phone}</span><br/>
        <span>{contact.email}</span>
      </div>
      <button style={styles.delete} onClick={() => onRemove(contact.id)}>Удалить</button>
    </div>
  )
}

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    background: '#e2fbdb',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  delete: {
    cursor: 'pointer',
    background: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    padding: '4px 8px',
    fontWeight: 'bold'
  }
}


styles.card[':hover'] = {
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
}
