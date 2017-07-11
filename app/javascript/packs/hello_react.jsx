// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// class HelloReact extends React.Component {
const Hello = props => (
  <div>
    <h1>Hello {props.name}!</h1>
    <h2> {props.school} </h2>
  </div>
)

Hello.defaultProps = {
  name: 'Arseniy',
  school: 'UofT - SG',
}

Hello.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
