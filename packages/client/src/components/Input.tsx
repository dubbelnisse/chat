import React from 'react'
import styled from 'styled-components'

const InputElement = styled.input`
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  background-color: #f3f3f3;

  &:focus {
    outline: none;
  }
`

interface InputProps {
  name: string
  onChange: (e: any) => void
  placeholder: string
  value: string
}

const Input: React.FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <InputElement
      name={name}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input
