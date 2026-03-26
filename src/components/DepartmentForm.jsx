import {useState} from 'react'

const DepartmentForm = () => {
  const [department, setDepartment] = useState('')

  return (
    <div>
        <h1>Department Form</h1>
        <form>
            <label>Department:</label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
            </select>
            <br />
            <p>Selected Department: {department}</p>
        </form>
    </div>
  )
}

export default DepartmentForm