import { useContext } from "react";
import Context from "../context/Context";

function Course({ id, title, price, desc }) {
  const { deleteCourseById } = useContext(Context);

  return (
    <>
      <div className="box">
        <h3>{title}</h3>
        <span>{price}</span>
        <p>{desc}</p>
        <button onClick={() => deleteCourseById(id)}>Sil</button>
      </div>
    </>
  );
}

export default Course;
