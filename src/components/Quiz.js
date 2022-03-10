import { useDispatch, useSelector } from "react-redux";
import { BlueButton } from "./BlueButton";
import styled from "styled-components";
import { next, check } from "../store/modules/score";

export function Quiz() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.score.page);
  const quiz = useSelector((state) => state.score.quizs);

  const Quest = styled.h1`
    font-size: 1.9em;
    margin-top: 40px;
    margin-bottom: 40px;
  `;

  return (
    <>
      <Quest>{quiz[page - 1].q}</Quest>
      {quiz[page - 1].a.map((item) => {
        return (
          <BlueButton
            key={item.text}
            text={item.text}
            ClickEvent={() => {
              //정답인지 아닌지 체크
              dispatch(check(item.IsCorrect));
              //다음 페이지로
              dispatch(next());
            }}
          />
        );
      })}
    </>
  );
}
