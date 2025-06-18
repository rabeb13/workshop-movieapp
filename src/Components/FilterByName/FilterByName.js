import React from 'react'
import { Form } from 'react-bootstrap'

const FilterByName = ({inputSearch, setInputSearch}) => {
  return (
    <div>
    
      <Form.Control
      onChange={(event)=> setInputSearch(event.target.value)}
      value={inputSearch}
        type="text"
        placeholder="Disabled input"
        
      />
      <br />
    </div>
  )
}

export default FilterByName
