import React from 'react'
import Overlay from '../../ui/Overlay'
import Note from './components/Note'

export default (props) => {
  return <Overlay>
      <Note database={props.database} />
    </Overlay>
}

 
