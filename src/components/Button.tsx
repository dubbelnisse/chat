import React from 'react'
import styled from 'styled-components'

const ButtonElement = styled.button<ButtonProps>`
  color: #fff;
  background-color: #385d6e;
  border-radius: 20px;
  padding: 20px 25px;
  margin-top: ${(props) => `${props.marginTop}px` || 0};
  margin-right: ${(props) => `${props.marginRight}px` || 0};
  margin-bottom: ${(props) => `${props.marginBottom}px` || 0};
  margin-left: ${(props) => `${props.marginLeft}px` || 0};
`

type ButtonProps = {
  marginTop?: string | undefined
  marginRight?: string | undefined
  marginBottom?: string | undefined
  marginLeft?: string | undefined
}

interface InputProps {
  type: 'button' | 'submit' | undefined
  disabled: boolean
  btnText: string
  marginTop?: string | undefined
  marginRight?: string | undefined
  marginBottom?: string | undefined
  marginLeft?: string | undefined
}

const Button: React.FC<InputProps> = ({
  type,
  disabled,
  btnText,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  return (
    <ButtonElement
      type={type}
      disabled={disabled}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      {btnText}
    </ButtonElement>
  )
}

export default Button
