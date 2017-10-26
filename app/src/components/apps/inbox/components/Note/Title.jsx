import React from 'react'

class Title extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      valid: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    return <input name="note-title" className="note-title" placeholder="Enter a Title..." onChange={this.handleChange} />
  }
}

export default Title
