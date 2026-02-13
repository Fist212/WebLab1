export default function Header({ title, count }) {
  return (
    <div style={styles.header}>
      <h2 style={styles.title}>{title}</h2>
      {count !== undefined && <span style={styles.count}>Всего: {count}</span>}
    </div>
  )
}

const styles = {
  header: {
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    margin: 0,
    color: '#333'
  },
  count: {
    fontSize: 14,
    color: '#666'
  }
}
