import { useSelector } from "react-redux";
import styled from "styled-components";

export function Progress() {
  const page = useSelector((state) => state.score.page);
  const quiz = useSelector((state) => state.score.quizs);

  const Bar = styled.div`
    width: inherit;
    background-color: #d2d2d2;
    height: 5px;
    position: relative;
  `;
  const Gauge = styled.div`
    position: relative;
    background: #307ff1;
    height: 5px;
    top: -5px;
  `;

  const size = (page / quiz.length) * 100;
  return (
    <>
      <div style={{ marginTop: "90px" }}>
        <Bar></Bar>
        <Gauge style={{ width: `${size}%` }}></Gauge>
      </div>
      <p>
        {page}/{quiz.length}
      </p>
    </>
  );
}
