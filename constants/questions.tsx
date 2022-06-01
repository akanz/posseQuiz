import { questionParams } from "../types";

export const time = new Date();
time.setSeconds(time.getSeconds() + 30);



export const questions: questionParams[] = [
  {
    id: 1,
    title: "Who is the current Dev for ThepossessedNFT?",
    options: [
      {
        id: 1,
        name: "Tom",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 4,
        name: "NFTbravo",
        answer: false,
      },
    ],
    correctAns: "tom",
  },
  {
    id: 5,
    title: "How many Nfts are in the collection?",
    options: [
      {
        id: 1,
        name: "Tom",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 4,
        name: "NFTbravo",
        answer: false,
      },
    ],
    correctAns: "tom",
  },
  {
    id: 2,
    title: "Whats the possessed slogan?",
    options: [
      {
        id: 1,
        name: "Tom",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 4,
        name: "NFTbravo",
        answer: false,
      },
    ],
    correctAns: "tom",
  },
  {
    id: 3,
    title: "Who are the hosts of pssssd cypher sundays?",
    options: [
      {
        id: 1,
        name: "Tom",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 4,
        name: "NFTbravo",
        answer: false,
      },
    ],
    correctAns: "tom",
  },
  {
    id: 4,
    title: "which one of this is a lab hazmat",
    options: [
      {
        id: 1,
        name: "Tom",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 4,
        name: "NFTbravo",
        answer: false,
      },
    ],
    correctAns: "tom",
  },
];
