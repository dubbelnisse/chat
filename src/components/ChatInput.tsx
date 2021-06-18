import 'emoji-mart/css/emoji-mart.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Picker } from 'emoji-mart'
import Input from '../components/Input'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

const Form = styled.form`
  width: 100%;
`

const SubmitButton = styled.button`
  background: none;
  position: absolute;
  right: 15px;
  top: 5px;
  font-size: 30px;
`

const EmojiButton = styled.button`
  background: none;
  position: absolute;
  right: 50px;
  top: 5px;
  font-size: 30px;
`

const EmojiPicker = styled.div`
  position: absolute;
  right: 0;
  bottom: 65px;
`

const Icon = styled.svg`
  width: 20px;
`

const MessageSchema = Yup.object().shape({
  message: Yup.string().required('Required').max(280),
})

const ChatInput: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <Formik
        initialValues={{ message: '' }}
        validationSchema={MessageSchema}
        onSubmit={async ({ message }, form) => {
          const name = localStorage.getItem('username') || ''
          const userId = localStorage.getItem('userId') || ''

          await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              userId,
              message,
            }),
          })

          setOpen(false)
          form.resetForm()
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => {
          const handleEmojiPick = (e: any) => {
            setFieldValue('message', `${values.message} ${e.native}`)
          }

          return (
            <Form onSubmit={handleSubmit}>
              <Input
                name="message"
                type="text"
                onChange={handleChange}
                placeholder="Type something"
                value={values.message}
              />
              {open && (
                <EmojiPicker>
                  <Picker
                    sheetSize={32}
                    showSkinTones={false}
                    showPreview={false}
                    onSelect={handleEmojiPick}
                  />
                </EmojiPicker>
              )}
              <EmojiButton onClick={() => setOpen(!open)} type="button">
                <Icon
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#8f8f8f"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </Icon>
              </EmojiButton>
              <SubmitButton type="submit" disabled={isSubmitting}>
                <Icon
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#8f8f8f"
                >
                  <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z" />
                  <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z" />
                </Icon>
              </SubmitButton>
            </Form>
          )
        }}
      </Formik>
    </Wrapper>
  )
}

export default ChatInput
