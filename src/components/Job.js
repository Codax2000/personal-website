/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Formatting for a Job, can then be mapped to
 */
import React from 'react'

export default function Job(props) {
  return (
    <li>
      <div className="d-flex justify-content-between">
        <p className="clear-spacing lead">{props.details.position}</p>
        <p className="clear-spacing">{props.details.date}</p>
      </div>
      <p className="text-left">{props.details.company}</p>
    </li>
  )
}
