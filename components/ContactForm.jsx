import React, { Component } from 'react'
import {
  FormTextArea,
  FormSelect,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
  Form,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Мужчина', value: 'male' },
  { key: 'f', text: 'Женщина', value: 'female' },
]

class ContactForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <FormGroup widths='equal'>
          <FormInput fluid label='Имя'  />
          <FormInput fluid label='Фамилия' />
          <FormSelect
            fluid
            label='Пол'
            options={options}
          />
        </FormGroup>
        
        <FormTextArea label='О вас' placeholder='Расскажите нам больше о себе...' />
        <FormButton>Отправить</FormButton>
      </Form>
    )
  }
}

export default ContactForm