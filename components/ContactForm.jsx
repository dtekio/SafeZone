import React, { Component } from "react";
import { FormGroup, FormField, FormButton, Form } from "semantic-ui-react";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", number: "", message: "" };
const initState = { values: initValues };
export default function ContactForm() {
  const [state, setState] = React.useState(initState);
  
  const { values, isLoading, error, isSent } = state;
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    })); 
    const handleSubmit = async () => {
      setState((prev) => ({
        ...prev,
        isLoading:true
      }));
      
      try {
        await sendContactForm(values)
        setState((prev) => ({
          ...initState,
          isSent: true  
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading:false,
          error: error.message
        }));
      }
    }
  return (
    <>
      <Form>
      
        <FormGroup widths="equal">
          <FormField>
            <label htmlFor="name">Имя: </label>
            <input
              id="name"
              autoComplete="name"
              maxLength={50}
              size="lg"
              name="name"
              className="text-black"
              value={values.name}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <label htmlFor="email"> Почта:</label>
            <input
              id="email"
              required
              autoComplete="email"
              maxLength={80}
              name="email"
              type="email"
              className="text-black"
              value={values.email}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <label htmlFor="number"> Номер:</label>
            <input
              id="number"
              required
              autoComplete="number"
              maxLength={80}
              name="number"
              type="text"
              className="text-black"
              value={values.number}
              onChange={handleChange}
            />
          </FormField>
        </FormGroup>

        <FormField>
          <label htmlFor="message"> Сообщение: </label>
          <textarea
            id="message"
            required
            name="message"
            rows={5}
            className="text-black"
            value={values.message}
            onChange={handleChange}
          />
        </FormField>
        {isSent && (<p style={{color: "green"}}>Отправлено</p>)}
        {error && (<p style={{color: "red"}}>{error}</p>)}
        <FormButton
          disabled={
            !values.name || !values.email || !values.number || !values.message
          }
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          {isLoading ? 'Загрузка...' : 'Отправить'}
        </FormButton>
      </Form>
    </>
  );
}
