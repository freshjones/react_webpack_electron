import React from 'react'
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom'

import NoteForm from './Textarea'
import NoteTitle from './Title'
const millis = () => new Date().getTime();
import './styles/notes.css'

class Note extends React.Component {
  
  constructor(props) {
    super(props);

    this.changeTitle = this.changeTitle.bind(this)
    this.changeNote = this.changeNote.bind(this)
    this.addNote = this.addNote.bind(this)

    this.state = {
      title: null,
      note: null
    };
  }

  changeTitle(value) {
    this.setState({title: value})
  }

  changeNote(value) {
    this.setState({note: value})
  }

  addNote(e) {
    //e.preventDefault();
    const time = millis();
    const doc = {
      _id: time.toString(),
      title: this.state.title,
      note: this.state.note,
      time
    }

    this.props.database.put(doc).then(() => {
      this.props.history.push('/inbox');
    });

  }

  render() {
    return <div>
        <nav>
          <ul className="flex list-reset m0 p0 justify-between items-center">
            <li className="px2 py1">
             <NoteTitle value={this.state.title} onChange={this.changeTitle} /> 
            </li>
            <li className="p1">
              <ul className="flex list-reset m0 p0 justify-between items-center">
                <li className="px1">
                  <NavLink exact={true} to="/inbox" className="block btn btn-primary bg-gray">Cancel</NavLink>
                </li>
                <li className="px1">
                   <button className="block btn btn-primary bg-green" onClick={this.addNote}>Save</button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <main>
          <div className="p2">
            <NoteForm value={this.state.note}  onChange={this.changeNote} />
          </div>
        </main>
      </div>
  }
}

export default withRouter(Note)
