import React from 'react'
import './Tag.css'

const Tag = (props) => {
  const tagStyle = {
    Work: {backgroundColor: "#fda821"},
    Personal: {backgroundColor: "#15d4c8"},
    Study: {backgroundColor: "#ffd12c"},
    Health: {backgroundColor: "#4cdafc"},
    default: {backgroundColor: "white"}
  }

  return (
    <button 
      type="button"
      className="tag"
      style={props.selected ? tagStyle[props.tagName] : tagStyle.default}
      onClick={() => {props.selectTag(props.tagName)}}>
      {props.tagName}
    </button>
  )
}

export default Tag