import {screen, render, fireEvent} from '@testing-library/react'
import { describe,expect,test } from 'vitest'
import DepartmentForm from './DepartmentForm'

describe('DepartmentForm',() => {
    test('renders department select field',() => {
        render(<DepartmentForm />)
        expect(screen.getByLabelText(/department/i)).toBeInTheDocument()
    })
    test('updates department select value',() => {
        render(<DepartmentForm />)
        const select = screen.getByLabelText(/department/i)
        fireEvent.change(select,{target:{value:'IT'}})
        expect(select.value).toBe('IT')
    })
})