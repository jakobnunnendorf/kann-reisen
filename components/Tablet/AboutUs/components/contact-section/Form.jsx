import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Dein Name', placeholder: 'Vorname Nachname' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Telefonnummer',
    placeholder: '+49 123 12345678',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email addresse',
    placeholder: 'email@beispiel.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Deine Nachricht',
    placeholder: 'Wie können wir dir weiterhelfen?',
  },
]

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Schick uns eine Nachricht</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default Form
