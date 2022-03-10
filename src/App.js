import { useDispatch, useSelector } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { next, reset } from "./store/modules/score";
import styled from "styled-components";
import { Quiz } from "./components/Quiz";
import { Progress } from "./components/Progress";

export default function App() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.score.page);
  const quiz = useSelector((state) => state.score.quizs);
  const score = useSelector((state) => state.score.score);
  const Title = styled.h1`
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 2em;
  `;
  const Description = styled.h2`
    margin-bottom: 40px;
    font-weight: 300;
    color: #aaa1a1;
  `;

  const Main = styled.main`
  margin: auto;
  width: 100%;
  max-width: 390px;
  text-align : center;
}`;
  const Intro = styled.img`
    width: inherit;
    margin-bottom: 40px;
  `;

  return (
    <>
      {page === 0 && (
        <Main>
          <Title>국가별 수도 이름 맞추기</Title>
          <Description>토이프로젝트의 첫번째입니다</Description>
          <Intro src="./images/seoul.jpg" alt="인트로이미지" />
          <PinkButton
            text="테스트시작"
            ClickEvent={() => {
              dispatch(next());
            }}
          />
        </Main>
      )}
      {page > 0 && page <= quiz.length && (
        <Main>
          <Quiz />
          <Progress />
        </Main>
      )}
      {page > quiz.length && (
        <Main>
          <Title>국가별 수도 이름 맞추기</Title>
          <h2 style={{ marginBottom: "40px", color: "red" }}>
            당신의 최종점수는 {score}점 입니다!
          </h2>
          <img
            style={{
              width: "inherit",
              marginBottom: "40px",
            }}
            src="../images/final.png"
          />
          <PinkButton
            text="다시하기"
            ClickEvent={() => {
              dispatch(reset());
            }}
          />
        </Main>
      )}
    </>
  );
}
