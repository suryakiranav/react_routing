import { useState } from 'react'

const LoginForm = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Username: ${username}, Password: ${password}`)
        setUsername('')
        setPassword('')
    }
    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type='text' value={username}
                 onChange={(e) => setUsername(e.target.value)} /><br />
                <label>Password:</label>
                <input type='password' value={password}
                 onChange={(e) => setPassword(e.target.value)} /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;