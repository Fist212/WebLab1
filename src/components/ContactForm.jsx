import { useState } from 'react'

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const validateName = (name) => /^[A-Za-zА-Яа-яЁё\s]+$/.test(name)
  const validatePhone = (phone) => /^\+\d{7,15}$/.test(phone)

  const submit = (e) => {
    e.preventDefault()

    if (!name || !phone || !email) {
      setError('Все поля обязательны')
      return
    }
    if (!validateName(name)) {
      setError('Имя должно содержать только буквы')
      return
    }
    if (!validatePhone(phone)) {
      setError('Телефон должен начинаться с + и содержать только цифры')
      return
    }
    if (!validateEmail(email)) {
      setError('Введите корректный email')
      return
    }

    setError('')
    onAdd({ name, phone, email })
    setName(''); setPhone(''); setEmail('')
  }

  return (
    <form onSubmit={submit} style={styles.form}>
      <input style={styles.input} placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
      <input style={styles.input} placeholder="Телефон (+71234567890)" value={phone} onChange={e => setPhone(e.target.value)} />
      <input style={styles.input} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      {error && <p style={styles.error}>{error}</p>}
      <button style={styles.button}>Добавить</button>
    </form>
  )
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: 10 },
  input: {
    padding: 8,
    borderRadius: 5,
    border: '1px solid #a3d9a5',
    outline: 'none',
    backgroundColor: '#eff9f2',
    color: '#000000'
  },
  button: {
    padding: 10,
    border: 'none',
    borderRadius: 5,
    background: '#4caf50',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  error: {
    color: '#d32f2f',
    fontSize: 14
  }
};
