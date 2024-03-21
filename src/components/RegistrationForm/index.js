// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isLoggedInSuccess: false,
    invalidFirstName: false,
    invalidLastName: false,
  }

  onchangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
      invalidFirstName: false,
    })
  }

  onchangeLastName = event => {
    this.setState({
      lastName: event.target.value,
      invalidLastName: false,
    })
  }

  onblurFirstname = () => {
    const {firstName, invalidFirstName} = this.state

    if (firstName === '') {
      this.setState({invalidFirstName: !invalidFirstName})
    }
  }

  onblurLastname = () => {
    const {lastName, invalidLastName} = this.state

    if (lastName === '') {
      this.setState({invalidLastName: !invalidLastName})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({invalidFirstName: true, invalidLastName: true})
    } else if (firstName === '') {
      this.setState({invalidFirstName: true})
    } else if (lastName === '') {
      this.setState({invalidLastName: true})
    } else {
      this.setState({isLoggedInSuccess: true})
    }
  }

  onsubmitAnotherResponse = () => {
    const {isLoggedInSuccess} = this.state

    this.setState({
      firstName: '',
      lastName: '',
      isLoggedInSuccess: !isLoggedInSuccess,
      invalidFirstName: false,
      invalidLastName: false,
    })
  }

  renderFormContainer = () => {
    const {firstName, lastName, invalidFirstName, invalidLastName} = this.state

    const classNameFirst = invalidFirstName
      ? 'name-input-field error-field'
      : 'name-input-field'

    const classNameLast = invalidLastName
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label htmlFor="firstname" className="input-label">
            FIRST NAME
          </label>
          <input
            id="firstname"
            type="text"
            value={firstName}
            placeholder="First Name"
            onBlur={this.onblurFirstname}
            onChange={this.onchangeFirstName}
            className={classNameFirst}
          />
        </div>
        {invalidFirstName && <p className="error-message">Required</p>}
        <div className="input-container">
          <label htmlFor="lastname" className="input-label">
            LAST NAME
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onBlur={this.onblurLastname}
            onChange={this.onchangeLastName}
            className={classNameLast}
          />
        </div>
        {invalidLastName && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessContainer = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onsubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isLoggedInSuccess} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isLoggedInSuccess
            ? this.renderSuccessContainer()
            : this.renderFormContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
