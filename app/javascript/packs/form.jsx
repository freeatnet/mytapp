import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap'

class ApplicantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      utorid: "",
      email: "",
      studentno: "",
      program: "",
      year: "",
    };

    // if I refer to a method without using (),
    // I need to bind it (b/c by default class methods are not bound by default)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // When an form field changes, this handler is triggered
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  // On form submission this handler is triggered
  handleSubmit(event) {
    const reqHeaders = new Headers();
    reqHeaders.append("Content-Type", "application/json");

    const init = { method: 'POST',
      headers: reqHeaders,
      body: JSON.stringify(this.state)
      }

    // debugger;

    const req = new Request('/applicants', init);
    fetch(req).then((response) => {
      console.log(response);
      alert('Form submitted!');
    });
  }

  render() {
    return (
      <div>
        <Form inline>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input name="first_name" id="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input name="last_name" id="last_name" value={this.state.last_name} placeholder="Last Name" onChange={this.handleChange} />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="utorid">UtorID</Label>
            <Input name="utorid" id="utorid" value={this.state.utorid} placeholder="UtorID" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="studentno">Student Number</Label>
            <Input name="studentno" id="studentno" value={this.state.studentno} placeholder="Student #" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="program">Program</Label>
            <Input name="program" id="program" value={this.state.program} placeholder="Program" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year of Study</Label>
            <Input name="year" id="year" value={this.state.year} placeholder="Year" onChange={this.handleChange} />
          </FormGroup>

          <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ApplicantForm />,
    document.body.appendChild(document.createElement('div')),
  )
})
