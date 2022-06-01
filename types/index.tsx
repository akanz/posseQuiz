export interface ContextTypeParams {
  Username: string;
  setUsername: (username: string) => void;
  Score: number;
  setScore: (score: number) => void;
  RandomQuestions: Array<number>;
  setRandomQuestions: (randomQ: Array<number>) => void;
  GameMenu: string;
  setGameMenu: (gameMenu: string) => void;
  Question: string | questionParams | any;
  setQuestion: (question: string | questionParams | any) => void;
  QIndex: number;
  setQIndex: (qIndex: number) => void;
}

export type questionParams = {
  title: string;
  options: object;
  correctAns: string;
  id: number;
};
