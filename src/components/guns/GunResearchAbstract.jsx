import Article from "../templates/Article";
import data from "./data.json";

export default function GunViolenceOverTime() {
  return <Article title="Abstract" content={data["abstract"]} />;
}
