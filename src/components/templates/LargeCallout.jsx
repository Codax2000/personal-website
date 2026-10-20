export default function LargeCallout(props) {
  return (
    <li className="entry">
      <div className="callout-header">
        <p className="clear-spacing lead callout-main entry-title">{props.details.main}</p>
        <p className="clear-spacing callout-date meta-label">{props.details.date}</p>
      </div>
      <p className="text-left entry-detail">{props.details.details}</p>
    </li>
  );
}
