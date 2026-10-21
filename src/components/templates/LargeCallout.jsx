export default function LargeCallout(props) {
  return (
    <li>
      <div className="callout-header">
        <p className="clear-spacing lead callout-main">{props.details.main}</p>
        <p className="clear-spacing callout-date">{props.details.date}</p>
      </div>
      <p className="text-start">{props.details.details}</p>
    </li>
  );
}
