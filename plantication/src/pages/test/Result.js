import styled from "styled-components";
import { useParams } from "react-router-dom";
import Plants from "../../common/api/plantsApi.json";

function Result() {
  const { plantsName } = useParams();
  const flower = Plants[plantsName];

  if (!flower) {
    return <div>존재하지 않음.</div>;
  }

  return (
    <>
      <div key={flower.id}>
        <img src={flower.img} />
        <div>
          <h2>{flower.id}</h2>
        </div>
        <ul>
          {flower.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Result;
