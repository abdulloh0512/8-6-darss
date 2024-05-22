import { useParams } from "react-router-dom";

function Music() {
  const { id } = useParams();
  console.log(id); 
  return <div>Music ID: {id}</div>;
}

export default Music;
