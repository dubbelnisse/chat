import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const InputForm = styled.form`
  display: flex;
  max-width: 300px;
`

const schema = Yup.object().shape({
  name: Yup.string().required('Required').max(30),
})

const Start: React.FC = () => {
  const history = useHistory()

  return (
    <Wrapper>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={schema}
        onSubmit={({ name }, form) => {
          localStorage.setItem('username', name)
          localStorage.setItem('userId', uuidv4())
          form.resetForm()
          history.push('/chat')
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <InputForm onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Username"
              value={values.name}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              btnText="GO"
              marginLeft="20"
            />
          </InputForm>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Start
