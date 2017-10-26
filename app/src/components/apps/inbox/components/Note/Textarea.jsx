import React from 'react'

class TextArea extends React.Component {

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

  render () {
    return <textarea name="note" className="note-form" placeholder="Paste or type some notes..." onChange={this.handleChange}>{this.props.value}</textarea>
  }

}

export default TextArea
