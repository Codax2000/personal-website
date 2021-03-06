import React from "react";

export default function LargeCallout(props) {
  return (
    <li>
      <div className="d-flex justify-content-between">
        <p className="clear-spacing lead">{props.details.main}</p>
        <p className="clear-spacing">{props.details.date}</p>
      </div>
      <p className="text-left">{props.details.details}</p>
    </li>
  );
}
