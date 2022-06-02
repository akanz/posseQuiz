import { questionParams } from "../types";

export const time = new Date();
time.setSeconds(time.getSeconds() + 30);

export const questions: questionParams[] = [
  {
    id: 1,
    title: "How many lab hazmats are in possessed currently?",
    options: [
      {
        id: 1,
        name: "10",
        answer: true,
      },
      {
        id: 2,
        name: "12",
        answer: false,
      },
      {
        id: 3,
        name: "3",
        answer: false,
      },
      {
        id: 4,
        name: "20",
        answer: false,
      },
    ],
    correctAns: "10",
  },
  {
    id: 2,
    title: "Which duo started the possessed space meta?",
    options: [
      {
        id: 1,
        name: "nftfiesta and wolf",
        answer: false,
      },
      {
        id: 2,
        name: "nftbravo and nftfiesta",
        answer: true,
      },
      {
        id: 3,
        name: "whatthefurr and tmw_builds",
        answer: false,
      },
      {
        id: 4,
        name: "nftfiesta and whatthefurr",
        answer: false,
      },
    ],
    correctAns: "nftbravo and nftfiesta",
  },
  {
    id: 3,
    title: "Who are possessed founders?",
    options: [
      {
        id: 1,
        name: "wolf and nftfiesta",
        answer: false,
      },
      {
        id: 2,
        name: "Joe and John",
        answer: false,
      },
      {
        id: 3,
        name: "Zach and Cody",
        answer: false,
      },
      {
        id: 4,
        name: "Joe and Tom",
        answer: true,
      },
    ],
    correctAns: "Joe and Tom",
  },
  {
    id: 4,
    title: "What does the CCC stand for",
    options: [
      {
        id: 1,
        name: "Commitment Community Connection",
        answer: false,
      },
      {
        id: 2,
        name: "Creativity Community Collaboration",
        answer: true,
      },
      {
        id: 3,
        name: "Collaboration Community Connection",
        answer: false,
      },
      {
        id: 4,
        name: "Community Creativity Commitment",
        answer: false,
      },
    ],
    correctAns: "Creativity Community Collaboration",
  },
  {
    id: 5,
    title: "Which one of these values is not a part of the CCC?",
    options: [
      {
        id: 1,
        name: "Creativity",
        answer: false,
      },
      {
        id: 2,
        name: "Collaboration",
        answer: false,
      },
      {
        id: 3,
        name: "Community",
        answer: false,
      },
      {
        id: 4,
        name: "Commitment",
        answer: true,
      },
    ],
    correctAns: "Commitment",
  },
  {
    id: 6,
    title: "What is the name of the PossessedNFT's website?",
    options: [
      {
        id: 1,
        name: "pssssd.com",
        answer: false,
      },
      {
        id: 2,
        name: "PossessedNFT.com",
        answer: false,
      },
      {
        id: 3,
        name: "pssssd.xyz",
        answer: true,
      },
      {
        id: 4,
        name: "PossessedNFT.xyz",
        answer: false,
      },
    ],
    correctAns: "pssssd.xyz",
  },
  {
    id: 7,
    title: "Who are the hosts of possesseddev?",
    options: [
      {
        id: 1,
        name: "Mrwolf, thecollector, Akanz",
        answer: true,
      },
      {
        id: 2,
        name: "Jeremy, Akanz and Jones",
        answer: false,
      },
      {
        id: 3,
        name: "Jones, thecollector, and Akanz",
        answer: false,
      },
      {
        id: 4,
        name: "thecollector, Mrwolf, and Jones",
        answer: false,
      },
    ],
    correctAns: "Mrwolf, thecollector, Akanz",
  },
  {
    id: 8,
    title: "Who is the artiste behind possessed?",
    options: [
      {
        id: 1,
        name: "Max and the Wolf",
        answer: false,
      },
      {
        id: 2,
        name: "Akanz",
        answer: false,
      },
      {
        id: 3,
        name: "Joe Fur",
        answer: true,
      },
      {
        id: 4,
        name: "Jeremy",
        answer: false,
      },
    ],
    correctAns: "Joe Fur",
  },
  {
    id: 9,
    title: "Possessed did one of these contests?",
    options: [
      {
        id: 1,
        name: "Music Mix",
        answer: true,
      },
      {
        id: 2,
        name: "Football Match",
        answer: false,
      },
      {
        id: 3,
        name: "Dancing contest",
        answer: false,
      },
      {
        id: 4,
        name: "Chess contest",
        answer: false,
      },
    ],
    correctAns: "Music Mix",
  },
  {
    id: 10,
    title: "One of these project is not collaborating with possessed?",
    options: [
      {
        id: 1,
        name: "BAYC",
        answer: true,
      },
      {
        id: 2,
        name: "shamanzs",
        answer: false,
      },
      {
        id: 3,
        name: "KaijuKingz",
        answer: false,
      },
      {
        id: 4,
        name: "FomoMofoNFT",
        answer: true,
      },
    ],
    correctAns: "BAYC",
  },
  {
    id: 11,
    title: "When is possessed likely to mint",
    options: [
      {
        id: 1,
        name: "September",
        answer: false,
      },
      {
        id: 2,
        name: "June",
        answer: true,
      },
      {
        id: 3,
        name: "August",
        answer: false,
      },
      {
        id: 4,
        name: "July",
        answer: false,
      },
    ],
    correctAns: "June",
  },
  {
    id: 12,
    title: "One of these is not part of the 3 C's pssd values",
    options: [
      {
        id: 1,
        name: "Collaboration",
        answer: false,
      },
      {
        id: 2,
        name: "Community",
        answer: false,
      },
      {
        id: 3,
        name: "Creativity",
        answer: false,
      },
      {
        id: 4,
        name: "Commitment",
        answer: true,
      },
    ],
    correctAns: "Commitment",
  },
  {
    id: 13,
    title: "What is the name of the startup Tom co-founded?",
    options: [
      {
        id: 1,
        name: "Hubble",
        answer: true,
      },
      {
        id: 2,
        name: "Huddle",
        answer: false,
      },
      {
        id: 3,
        name: "Hurble",
        answer: false,
      },
      {
        id: 4,
        name: "Hurdle",
        answer: false,
      },
    ],
    correctAns: "Hubble",
  },
  {
    id: 14,
    title: "When was @thepossessednft first tweet?",
    options: [
      {
        id: 1,
        name: "December 26",
        answer: false,
      },
      {
        id: 2,
        name: "January 26",
        answer: true,
      },
      {
        id: 3,
        name: "February 26",
        answer: false,
      },
      {
        id: 4,
        name: "November 26",
        answer: false,
      },
    ],
    correctAns: "January 26",
  },
  {
    id: 15,
    title: "What does 61851419 represent?",
    options: [
      {
        id: 1,
        name: "Frens",
        answer: true,
      },
      {
        id: 2,
        name: "PossessedNFT",
        answer: false,
      },
      {
        id: 3,
        name: "Buddies",
        answer: false,
      },
      {
        id: 4,
        name: "Posse",
        answer: false,
      },
    ],
    correctAns: "Frens",
  },
  {
    id: 16,
    title: "How old is Tom?",
    options: [
      {
        id: 1,
        name: "29",
        answer: false,
      },
      {
        id: 2,
        name: "33",
        answer: false,
      },
      {
        id: 3,
        name: "27",
        answer: false,
      },
      {
        id: 4,
        name: "31",
        answer: true,
      },
    ],
    correctAns: "31",
  },
  {
    id: 17,
    title: "What was the name of Tom first web3 project?",
    options: [
      {
        id: 1,
        name: "BAYC",
        answer: false,
      },
      {
        id: 2,
        name: "Goblins",
        answer: false,
      },
      {
        id: 3,
        name: "PossessedNFT",
        answer: false,
      },
      {
        id: 4,
        name: "NftySanta",
        answer: true,
      },
    ],
    correctAns: "NftySanta",
  },
  {
    id: 18,
    title: "One of these project is collaborating with possessed?",
    options: [
      {
        id: 1,
        name: "BAYC",
        answer: false,
      },
      {
        id: 2,
        name: "shamanzs",
        answer: true,
      },
      {
        id: 3,
        name: "Moonbirds",
        answer: false,
      },
      {
        id: 4,
        name: "Azuki",
        answer: false,
      },
    ],
    correctAns: "shamanzs",
  },
  {
    id: 19,
    title: "What is Joe favorite genre of music?",
    options: [
      {
        id: 1,
        name: "Rock",
        answer: false,
      },
      {
        id: 2,
        name: "Pop",
        answer: false,
      },
      {
        id: 3,
        name: "Hip-Hop",
        answer: true,
      },
      {
        id: 4,
        name: "Jazz",
        answer: false,
      },
    ],
    correctAns: "Hip-Hop",
  },
  {
    id: 20,
    title: "One of these project is collaborating with possessed?",
    options: [
      {
        id: 1,
        name: "Moonbirds",
        answer: false,
      },
      {
        id: 2,
        name: "Azuki",
        answer: false,
      },
      {
        id: 3,
        name: "Aswang",
        answer: false,
      },
      {
        id: 4,
        name: "Lyke Island",
        answer: true,
      },
    ],
    correctAns: "Lyke Island",
  },
  {
    id: 21,
    title: "When was @thepossessednft first tweet?",
    options: [
      {
        id: 1,
        name: "December 26",
        answer: false,
      },
      {
        id: 2,
        name: "January 26",
        answer: true,
      },
      {
        id: 3,
        name: "February 26",
        answer: false,
      },
      {
        id: 4,
        name: "November 26",
        answer: false,
      },
    ],
    correctAns: "January 26",
  },
  {
    id: 22,
    title: "What is the name of the digital design studio Joe co-founded?",
    options: [
      {
        id: 1,
        name: "Possessed studio",
        answer: false,
      },
      {
        id: 2,
        name: "Sketch Studios",
        answer: false,
      },
      {
        id: 3,
        name: "Point.Studio",
        answer: true,
      },
      {
        id: 4,
        name: "Posse Studio",
        answer: false,
      },
    ],
    correctAns: "Point.Studio",
  },
  {
    id: 23,
    title: "Which of these traits were in the first character drop?",
    options: [
      {
        id: 1,
        name: "Bettle eyes",
        answer: false,
      },
      {
        id: 2,
        name: "Scar Face",
        answer: false,
      },
      {
        id: 3,
        name: "Ghost eyes",
        answer: false,
      },
      {
        id: 4,
        name: "Shark Brains",
        answer: true,
      },
    ],
    correctAns: "Shark Brains",
  },
  {
    id: 24,
    title: "What month was the @thePossessed website dropped?",
    options: [
      {
        id: 1,
        name: "February",
        answer: false,
      },
      {
        id: 2,
        name: "January",
        answer: false,
      },
      {
        id: 3,
        name: "March",
        answer: true,
      },
      {
        id: 4,
        name: "April",
        answer: false,
      },
    ],
    correctAns: "March",
  },
  {
    id: 25,
    title: "One of these project is collaborating with possessed?",
    options: [
      {
        id: 1,
        name: "KaijuKingz",
        answer: true,
      },
      {
        id: 2,
        name: "Azuki",
        answer: false,
      },
      {
        id: 3,
        name: "Aswang",
        answer: false,
      },
      {
        id: 4,
        name: "Okay Bears",
        answer: false,
      },
    ],
    correctAns: "KaijuKingz",
  },
  {
    id: 26,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "jarnNft",
        answer: true,
      },
      {
        id: 2,
        name: "MrWolf",
        answer: false,
      },
      {
        id: 3,
        name: "Akanz",
        answer: false,
      },
      {
        id: 4,
        name: "Joe",
        answer: false,
      },
    ],
    correctAns: "jarnNft",
  },
  {
    id: 27,
    title:
      "Which one of this is not a trait on the PossessedNFT character drops?",
    options: [
      {
        id: 1,
        name: "Bettle eyes",
        answer: true,
      },
      {
        id: 2,
        name: "Shark Brains",
        answer: false,
      },
      {
        id: 3,
        name: "Tear Tattoo",
        answer: false,
      },
      {
        id: 4,
        name: "Diamond Row",
        answer: false,
      },
    ],
    correctAns: "Bettle eyes",
  },
  {
    id: 28,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "JonesNft",
        answer: false,
      },
      {
        id: 2,
        name: "EthFargo",
        answer: false,
      },
      {
        id: 3,
        name: "possessedETH",
        answer: false,
      },
      {
        id: 4,
        name: "Wizbubba",
        answer: true,
      },
    ],
    correctAns: "Wizbubba",
  },
  {
    id: 29,
    title: "What can the barcode on the security pass be decoded to?",
    options: [
      {
        id: 1,
        name: "The name of the project",
        answer: false,
      },
      {
        id: 2,
        name: "What you wish for",
        answer: false,
      },
      {
        id: 3,
        name: "Enter at your own risk",
        answer: true,
      },
      {
        id: 4,
        name: "The name of the lab",
        answer: false,
      },
    ],
    correctAns: "Enter at your own risk",
  },
  {
    id: 30,
    title: "How many winners were picked from the #pssssdstory challenge?",
    options: [
      {
        id: 1,
        name: "25",
        answer: false,
      },
      {
        id: 2,
        name: "10",
        answer: true,
      },
      {
        id: 3,
        name: "2",
        answer: false,
      },
      {
        id: 4,
        name: "20",
        answer: false,
      },
    ],
    correctAns: "10",
  },
  {
    id: 31,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Eazymoney",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "MrWolf",
        answer: false,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Eazymoney",
  },
  {
    id: 32,
    title: "What month did the possessed discord drop?",
    options: [
      {
        id: 1,
        name: "February",
        answer: false,
      },
      {
        id: 2,
        name: "January",
        answer: false,
      },
      {
        id: 3,
        name: "March",
        answer: false,
      },
      {
        id: 4,
        name: "April",
        answer: true,
      },
    ],
    correctAns: "April",
  },
  {
    id: 33,
    title:
      "What is the name of the project that is collaborating with the possessed?",
    options: [
      {
        id: 1,
        name: "Fomo Fomo",
        answer: true,
      },
      {
        id: 2,
        name: "Azuki",
        answer: false,
      },
      {
        id: 3,
        name: "Aswang",
        answer: false,
      },
      {
        id: 4,
        name: "Okay Bears",
        answer: false,
      },
    ],
    correctAns: "Fomo Fomo",
  },
  {
    id: 34,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Akanz",
        answer: false,
      },
      {
        id: 2,
        name: "MrWolf",
        answer: false,
      },
      {
        id: 3,
        name: "Diya",
        answer: true,
      },
      {
        id: 4,
        name: "Joe",
        answer: false,
      },
    ],
    correctAns: "Diya",
  },
  {
    id: 35,
    title:
      "Which one of this is not a trait on the PossessedNFT character drops?",
    options: [
      {
        id: 1,
        name: "Crab Teeth",
        answer: true,
      },
      {
        id: 2,
        name: "Shark Brains",
        answer: false,
      },
      {
        id: 3,
        name: "Tear Tattoo",
        answer: false,
      },
      {
        id: 4,
        name: "Diamond Row",
        answer: false,
      },
    ],
    correctAns: "Crab Teeth",
  },
  {
    id: 36,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Zippy",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "MrWolf",
        answer: false,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Zippy",
  },
  {
    id: 37,
    title: "Which day did the possessed discord drop?",
    options: [
      {
        id: 1,
        name: "February 8",
        answer: false,
      },
      {
        id: 2,
        name: "January 8",
        answer: false,
      },
      {
        id: 3,
        name: "March 8",
        answer: false,
      },
      {
        id: 4,
        name: "April 8",
        answer: true,
      },
    ],
    correctAns: "April 8",
  },
  {
    id: 38,
    title:
      "What is the name of the project that is collaborating with the possessed?",
    options: [
      {
        id: 1,
        name: "BAYC",
        answer: false,
      },
      {
        id: 2,
        name: "Azuki",
        answer: false,
      },
      {
        id: 3,
        name: "Aswang",
        answer: false,
      },
      {
        id: 4,
        name: "Lyke Island",
        answer: true,
      },
    ],
    correctAns: "Lyke Island",
  },
  {
    id: 39,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Tom",
        answer: false,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Lizzyy96X",
        answer: true,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Lizzyy96X",
  },
  {
    id: 40,
    title: "The first visitor pass introduced allowed access for how long?",
    options: [
      {
        id: 1,
        name: "15 minutes",
        answer: true,
      },
      {
        id: 2,
        name: "10 minutes",
        answer: false,
      },
      {
        id: 3,
        name: "30 minutes",
        answer: false,
      },
      {
        id: 4,
        name: "1 day",
        answer: false,
      },
    ],
    correctAns: "15 minutes",
  },
  {
    id: 41,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Akanz",
        answer: false,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Diya",
        answer: true,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Diya",
  },
  {
    id: 42,
    title:
      "Which one of this is not a trait on the PossessedNFT character drops?",
    options: [
      {
        id: 1,
        name: "Crab Legs",
        answer: true,
      },
      {
        id: 2,
        name: "Shark Brains",
        answer: false,
      },
      {
        id: 3,
        name: "Tear Tattoo",
        answer: false,
      },
      {
        id: 4,
        name: "Diamond Row",
        answer: false,
      },
    ],
    correctAns: "Crab Legs",
  },
  {
    id: 43,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Lossie",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "MrWolf",
        answer: false,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Lossie",
  },
  {
    id: 44,
    title: "Which day did the possessed discord drop?",
    options: [
      {
        id: 1,
        name: "February 8",
        answer: false,
      },
      {
        id: 2,
        name: "January 8",
        answer: false,
      },
      {
        id: 3,
        name: "March 8",
        answer: false,
      },
      {
        id: 4,
        name: "April 8",
        answer: true,
      },
    ],
    correctAns: "April 8",
  },
  {
    id: 45,
    title:
      "During the #pssssdvibes challenge. How many music samples were given to the community to create from?",
    options: [
      {
        id: 1,
        name: "12",
        answer: false,
      },
      {
        id: 2,
        name: "8",
        answer: false,
      },
      {
        id: 3,
        name: "10",
        answer: true,
      },
      {
        id: 4,
        name: "2",
        answer: false,
      },
    ],
    correctAns: "10",
  },
  {
    id: 46,
    title: "The Permit Desk was upgraded to allow access for how long?",
    options: [
      {
        id: 1,
        name: "15 minutes",
        answer: false,
      },
      {
        id: 2,
        name: "10 minutes",
        answer: false,
      },
      {
        id: 3,
        name: "50 minutes",
        answer: true,
      },
      {
        id: 4,
        name: "1 day",
        answer: false,
      },
    ],
    correctAns: "50 minutes",
  },
  {
    id: 47,
    title: "Which of the following is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Tom",
        answer: false,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Bravo",
        answer: true,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Bravo",
  },
  {
    id: 48,
    title: "Which of the following not is a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Lossie",
        answer: false,
      },
      {
        id: 2,
        name: "Bravo",
        answer: false,
      },
      {
        id: 3,
        name: "MrWolf",
        answer: true,
      },
      {
        id: 4,
        name: "Zippy",
        answer: false,
      },
    ],
    correctAns: "MrWolf",
  },
  {
    id: 49,
    title: "Which of the following is a mod in possessed?",
    options: [
      {
        id: 1,
        name: "Lossie",
        answer: false,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "Luuminize",
        answer: true,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Luuminize",
  },
  {
    id: 50,
    title: "Which of the following is a mod in possessed?",
    options: [
      {
        id: 1,
        name: "Chelsea",
        answer: true,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "EthFargo",
        answer: false,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "Chelsea",
  },
  {
    id: 51,
    title:
      "Which one of these music samples was not used to create the #pssssdvibes challenge?",
    options: [
      {
        id: 1,
        name: "spark.wav",
        answer: false,
      },
      {
        id: 2,
        name: "alarm.wav",
        answer: false,
      },
      {
        id: 3,
        name: "breath.wav",
        answer: false,
      },
      {
        id: 4,
        name: "bang.wav",
        answer: true,
      },
    ],
    correctAns: "bang.wav",
  },
  {
    id: 52,
    title: "Which of the following is a mod in possessed?",
    options: [
      {
        id: 1,
        name: "Lossie",
        answer: false,
      },
      {
        id: 2,
        name: "Joe",
        answer: false,
      },
      {
        id: 3,
        name: "L0stb0y",
        answer: true,
      },
      {
        id: 4,
        name: "thecollector",
        answer: false,
      },
    ],
    correctAns: "L0stb0y",
  },
  {
    id: 53,
    title: "Which of the following is not a mod in possessed?",
    options: [
      {
        id: 1,
        name: "L0stb0y",
        answer: false,
      },
      {
        id: 2,
        name: "Chelsea",
        answer: false,
      },
      {
        id: 3,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 4,
        name: "EthFargo",
        answer: true,
      },
    ],
    correctAns: "EthFargo",
  },
  {
    id: 54,
    title: "How many winners were picked from the #pssssdvibes entries?",
    options: [
      {
        id: 1,
        name: "100",
        answer: false,
      },
      {
        id: 2,
        name: "120",
        answer: false,
      },
      {
        id: 3,
        name: "150",
        answer: false,
      },
      {
        id: 4,
        name: "250",
        answer: true,
      },
    ],
    correctAns: "250",
  },
  {
    id: 55,
    title: "Which of the following is not a mod in possessed?",
    options: [
      {
        id: 1,
        name: "L0stb0y",
        answer: false,
      },
      {
        id: 2,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 3,
        name: "Bravo",
        answer: true,
      },
      {
        id: 4,
        name: "Chelsea",
        answer: false,
      },
    ],
    correctAns: "Bravo",
  },
  {
    id: 56,
    title: "What is luuminize role in thePossessed?",
    options: [
      {
        id: 1,
        name: "Artiste",
        answer: false,
      },
      {
        id: 2,
        name: "Founder",
        answer: false,
      },
      {
        id: 3,
        name: "Mod",
        answer: true,
      },
      {
        id: 4,
        name: "Owner",
        answer: false,
      },
    ],
    correctAns: "Mod",
  },
  {
    id: 57,
    title: "How many tracks were played on the #pssssdvibes radio show?",
    options: [
      {
        id: 1,
        name: "100",
        answer: false,
      },
      {
        id: 2,
        name: "120",
        answer: false,
      },
      {
        id: 3,
        name: "150",
        answer: false,
      },
      {
        id: 4,
        name: "50",
        answer: true,
      },
    ],
    correctAns: "50",
  },
  {
    id: 58,
    title: "The following are lab hazmats except?",
    options: [
      {
        id: 1,
        name: "L0stb0y",
        answer: true,
      },
      {
        id: 2,
        name: "Zippy",
        answer: false,
      },
      {
        id: 3,
        name: "Bravo",
        answer: false,
      },
      {
        id: 4,
        name: "Diya",
        answer: false,
      },
    ],
    correctAns: "Chelsea",
  },
  {
    id: 59,
    title: "Which of the following is a mod in possessed?",
    options: [
      {
        id: 1,
        name: "L0stb0y",
        answer: false,
      },
      {
        id: 2,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 3,
        name: "Bravo",
        answer: true,
      },
      {
        id: 4,
        name: "Chelsea",
        answer: false,
      },
    ],
    correctAns: "Bravo",
  },
  {
    id: 60,
    title:
      "Which account reports daily activities going on in the possessed community?",
    options: [
      {
        id: 1,
        name: "L0stb0y",
        answer: false,
      },
      {
        id: 2,
        name: "Luuminize",
        answer: false,
      },
      {
        id: 3,
        name: "Bravo",
        answer: false,
      },
      {
        id: 4,
        name: "Chelsea",
        answer: true,
      },
    ],
    correctAns: "Possessedreport",
  },
  {
    id: 61,
    title: "Who is the artist behind thepossessedNft? ",
    options: [
      {
        id: 1,
        name: "Joe",
        answer: true,
      },
      {
        id: 2,
        name: "L0stb0y",
        answer: false,
      },
      {
        id: 3,
        name: "Lossie",
        answer: false,
      },
      {
        id: 4,
        name: "Chelsea",
        answer: false,
      },
    ],
    correctAns: "Joe",
  },
  {
    id: 62,
    title:
      "Who is the founder of wellpaid and part of the possessed tech team?",
    options: [
      {
        id: 1,
        name: "L0stb0y",
        answer: false,
      },
      {
        id: 2,
        name: "Tom Holland",
        answer: false,
      },
      {
        id: 3,
        name: "Joe Fur",
        answer: false,
      },
      {
        id: 4,
        name: "Chris Villa",
        answer: true,
      },
    ],
    correctAns: "Chris Villa",
  },
  {
    id: 63,
    title: "Which of this animator is the latest lab partner ?",
    options: [
      {
        id: 1,
        name: "L0stb0ymotion",
        answer: false,
      },
      {
        id: 2,
        name: "Deekaymotion",
        answer: true,
      },
      {
        id: 3,
        name: "Bravomotion",
        answer: false,
      },
      {
        id: 4,
        name: "Chelseamotion",
        answer: false,
      },
    ],
    correctAns: "Deekaymotion",
  },
  {
    id: 64,
    title: "Who is a community manager at possessed?",
    options: [
      {
        id: 1,
        name: "Tom daydreams",
        answer: false,
      },
      {
        id: 2,
        name: "Joe Fur",
        answer: false,
      },
      {
        id: 3,
        name: "Chris Villa",
        answer: false,
      },
      {
        id: 4,
        name: "Gigi daydreams",
        answer: true,
      },
    ],
    correctAns: "Gigi daydreams",
  },
  {
    id: 65,
    title: "How many items would be in the possessed collection?",
    options: [
      {
        id: 1,
        name: "5000",
        answer: false,
      },
      {
        id: 2,
        name: "10000",
        answer: true,
      },
      {
        id: 3,
        name: "15000",
        answer: false,
      },
      {
        id: 4,
        name: "8000",
        answer: false,
      },
    ],
    correctAns: "10000",
  },
  {
    id: 66,
    title: "What is the password to enter into the waiting room?",
    options: [
      {
        id: 1,
        name: "PHNT0M",
        answer: false,
      },
      {
        id: 2,
        name: "PSSD43",
        answer: false,
      },
      {
        id: 3,
        name: "CR3ATE",
        answer: true,
      },
      {
        id: 4,
        name: "POSSESSED",
        answer: false,
      },
    ],
    correctAns: "CR3ATE",
  },
  {
    id: 67,
    title: "Who is the latest lab tech to join the team?",
    options: [
      {
        id: 1,
        name: "Dr shhh",
        answer: true,
      },
      {
        id: 2,
        name: "Dr strange",
        answer: false,
      },
      {
        id: 3,
        name: "Dr who",
        answer: false,
      },
      {
        id: 4,
        name: "Dr man",
        answer: false,
      },
    ],
    correctAns: "Dr shhh",
  },
  {
    id: 68,
    title: "What was the first  collaboration with the possessed?",
    options: [
      {
        id: 1,
        name: "BAYC",
        answer: false,
      },
      {
        id: 2,
        name: "Alien Frens",
        answer: true,
      },
      {
        id: 3,
        name: "Azuki",
        answer: false,
      },
      {
        id: 4,
        name: "Aswang",
        answer: false,
      },
    ],
    correctAns: "Alien Frens",
  },
  {
    id: 69,
    title: "Who is a test subject?",
    options: [
      {
        id: 1,
        name: "a person who is sick",
        answer: false,
      },
      {
        id: 2,
        name: "a person who is not sick",
        answer: false,
      },
      {
        id: 3,
        name: "a person who has wl",
        answer: true,
      },
      {
        id: 4,
        name: "a person who is not wl",
        answer: false,
      },
    ],
    correctAns: "a person who has wl",
  },
  {
    id: 70,
    title: "How many traits does one minted possessed nft come with?",
    options: [
      {
        id: 1,
        name: "1",
        answer: false,
      },
      {
        id: 2,
        name: "2",
        answer: false,
      },
      {
        id: 3,
        name: "3",
        answer: true,
      },
      {
        id: 4,
        name: "4",
        answer: false,
      },
    ],
    correctAns: "3",
  },
  {
    id: 71,
    title: "Which of these is a pssd community?",
    options: [
      {
        id: 1,
        name: "possesseddevs",
        answer: true,
      },
      {
        id: 2,
        name: "duck train",
        answer: false,
      },
      {
        id: 3,
        name: "the dancers from possessed",
        answer: false,
      },
      {
        id: 4,
        name: "the pssd singers community",
        answer: false,
      },
    ],
    correctAns: "possesseddevs",
  },
  {
    id: 72,
    title: "Which of this animator is the latest lab partner?",
    options: [
      {
        id: 1,
        name: "L0stb0ymotion",
        answer: false,
      },
      {
        id: 2,
        name: "Deekaymotion",
        answer: true,
      },
      {
        id: 3,
        name: "Bravomotion",
        answer: false,
      },
      {
        id: 4,
        name: "Chelseamotion",
        answer: false,
      },
    ],
    correctAns: "Deekaymotion",
  },
  {
    id: 73,
    title: "Which of these is a pssd community?",
    options: [
      {
        id: 1,
        name: "the dancers in possessed",
        answer: false,
      },
      {
        id: 2,
        name: "the pssd singers community",
        answer: false,
      },
      {
        id: 3,
        name: "the pssd football community",
        answer: false,
      },
      {
        id: 4,
        name: "Shimmygang",
        answer: true,
      },
    ],
    correctAns: "Shimmygang",
  },
  {
    id: 74,
    title: "How many items would be in the possessed collection?",
    options: [
      {
        id: 1,
        name: "5000",
        answer: false,
      },
      {
        id: 2,
        name: "10000",
        answer: true,
      },
      {
        id: 3,
        name: "15000",
        answer: false,
      },
      {
        id: 4,
        name: "8000",
        answer: false,
      },
    ],
    correctAns: "10000",
  },
  {
    id: 75,
    title: "When are test subjects chosen?",
    options: [
      {
        id: 1,
        name: "Every Tuesday",
        answer: false,
      },
      {
        id: 2,
        name: "Every Monday",
        answer: true,
      },
      {
        id: 3,
        name: "Every Thursday",
        answer: false,
      },
      {
        id: 4,
        name: "Every Friday",
        answer: false,
      },
    ],
    correctAns: "Every Monday",
  },
  {
    id: 76,
    title: "What are possessed clinical trials?",
    options: [
      {
        id: 1,
        name: "Trials where the test subject is sick",
        answer: false,
      },
      {
        id: 2,
        name: "Trials where the test subject is not sick",
        answer: false,
      },
      {
        id: 3,
        name: "Allow List",
        answer: true,
      },
      {
        id: 4,
        name: "Deny List",
        answer: false,
      },
    ],
    correctAns: "Allow List",
  },
  {
    id: 77,
    title: "What is Joe's twitter handle?",
    options: [
      {
        id: 1,
        name: "@joe",
        answer: false,
      },
      {
        id: 2,
        name: "@whatthefur",
        answer: true,
      },
      {
        id: 3,
        name: "@joey",
        answer: false,
      },
      {
        id: 4,
        name: "@whatthejoe",
        answer: false,
      },
    ],
    correctAns: "@whatthefur",
  },
  {
    id: 78,
    title: "What is Tom's twitter handle?",
    options: [
      {
        id: 1,
        name: "@tom",
        answer: false,
      },
      {
        id: 2,
        name: "@whatthetom",
        answer: false,
      },
      {
        id: 3,
        name: "@tmw_builds",
        answer: true,
      },
      {
        id: 4,
        name: "@whatthetommy",
        answer: false,
      },
    ],
    correctAns: "@tmw_builds",
  },
  {
    id: 79,
    title: "At what age did Joe(@whathefurr) get a junior designer role?",
    options: [
      {
        id: 1,
        name: "18",
        answer: true,
      },
      {
        id: 2,
        name: "19",
        answer: false,
      },
      {
        id: 3,
        name: "20",
        answer: false,
      },
      {
        id: 4,
        name: "21",
        answer: false,
      },
    ],
    correctAns: "18",
  },
  {
    id: 80,
    title:
      "When was the first time Joe publicly posted a pssd sneak peek on twitter?",
    options: [
      {
        id: 1,
        name: "January 7th, 2019",
        answer: false,
      },
      {
        id: 2,
        name: "January 7th, 2020",
        answer: false,
      },
      {
        id: 3,
        name: "January 7th, 2021",
        answer: false,
      },
      {
        id: 4,
        name: "January 7th, 2022",
        answer: true,
      },
    ],
    correctAns: "January 7th, 2022",
  },
  {
    id: 81,
    title: "Which of the following is a lab partner?",
    options: [
      {
        id: 1,
        name: "@3landersnft",
        answer: true,
      },
      {
        id: 2,
        name: "@okaybears",
        answer: false,
      },
      {
        id: 3,
        name: "@goblintown",
        answer: false,
      },
      {
        id: 4,
        name: "@whatthejoe",
        answer: false,
      },
    ],
    correctAns: "@3landersnft",
  },
  {
    id: 82,
    title: "What is the name of the pssd's twitter account?",
    options: [
      {
        id: 1,
        name: "@pssd",
        answer: false,
      },
      {
        id: 2,
        name: "@psssssd",
        answer: false,
      },
      {
        id: 3,
        name: "@hePossessedNFT",
        answer: true,
      },
      {
        id: 4,
        name: "@possessed",
        answer: false,
      },
    ],
    correctAns: "@hePossessedNFT",
  },
  {
    id: 83,
    title: "Which of these did Dr Lost host?",
    options: [
      {
        id: 1,
        name: "Monday Night",
        answer: false,
      },
      {
        id: 2,
        name: "Tuesday Night",
        answer: false,
      },
      {
        id: 3,
        name: "Wednesday Night",
        answer: false,
      },
      {
        id: 4,
        name: "Friday Night",
        answer: true,
      },
    ],
    correctAns: "Friday Night",
  },
  {
    id: 84,
    title: "Which of these did possessednft have a collaboration with?",
    options: [
      {
        id: 1,
        name: "Azuki",
        answer: false,
      },
      {
        id: 2,
        name: "Moonbirds",
        answer: false,
      },
      {
        id: 3,
        name: "Shamanzs",
        answer: true,
      },
      {
        id: 4,
        name: "Degods",
        answer: false,
      },
    ],
    correctAns: "Shamanzs",
  },
  {
    id: 85,
    title: "How many test subjects were chosen to be hamzats the first time?",
    options: [
      {
        id: 1,
        name: "1",
        answer: false,
      },
      {
        id: 2,
        name: "2",
        answer: false,
      },
      {
        id: 3,
        name: "10",
        answer: true,
      },
      {
        id: 4,
        name: "100",
        answer: false,
      },
    ],
    correctAns: "10",
  },
  {
    id: 86,
    title: "Who is the host of cypher Sundays?",
    options: [
      {
        id: 1,
        name: "Dr. Lost",
        answer: false,
      },
      {
        id: 2,
        name: "OneEyedZuko",
        answer: true,
      },
      {
        id: 3,
        name: "Chelsea",
        answer: false,
      },
      {
        id: 4,
        name: "Lorde",
        answer: false,
      },
    ],
    correctAns: "OneEyedZuko",
  },
  {
    id: 87,
    title: "Who is the founder of the shimmy gang possessed community?",
    options: [
      {
        id: 1,
        name: "Jenny",
        answer: true,
      },
      {
        id: 2,
        name: "janet",
        answer: false,
      },
      {
        id: 3,
        name: "jesse",
        answer: false,
      },
      {
        id: 4,
        name: "joe",
        answer: false,
      },
    ],
    correctAns: "Jenny",
  },
  {
    id: 88,
    title: "What is the real name of ilumidoggo?",
    options: [
      {
        id: 1,
        name: "Mamba",
        answer: true,
      },
      {
        id: 2,
        name: "Jonn",
        answer: false,
      },
      {
        id: 3,
        name: "Jenny",
        answer: false,
      },
      {
        id: 4,
        name: "Jesse",
        answer: false,
      },
    ],
    correctAns: "Mamba",
  },
  {
    id: 89,
    title: "Who are Lab hazmats?",
    options: [
      {
        id: 1,
        name: "They can create new community led initiatives and experiences inside the lab",
        answer: true,
      },
      {
        id: 2,
        name: "They are the lab's doctors",
        answer: false,
      },
      {
        id: 3,
        name: "They are the lab's nurses",
        answer: false,
      },
      {
        id: 4,
        name: "They are the lab's founders",
        answer: false,
      },
    ],
    correctAns:
      "They can create new community led initiatives and experiences inside the lab",
  },
  {
    id: 90,
    title: "Which of this accounts did possessed have AMA with?",
    options: [
      {
        id: 1,
        name: "@CBCreepz",
        answer: true,
      },
      {
        id: 2,
        name: "@CreepzCB",
        answer: false,
      },
      {
        id: 3,
        name: "@Creepz",
        answer: false,
      },
      {
        id: 4,
        name: "@CBcreepzCB",
        answer: false,
      },
    ],
    correctAns: "@CBCreepz",
  },
  {
    id: 91,
    title: "When was possessedNft first twitter space?",
    options: [
      {
        id: 1,
        name: "30 February 2022",
        answer: false,
      },
      {
        id: 2,
        name: "30 January 2022",
        answer: false,
      },
      {
        id: 3,
        name: "30 March 2022",
        answer: true,
      },
      {
        id: 4,
        name: "30 April 2022",
        answer: false,
      },
    ],
    correctAns: "30 March 2022",
  },
  {
    id: 92,
    title: "When did possessedNft twitter gain 100k followers?",
    options: [
      {
        id: 1,
        name: "29 March 2022",
        answer: true,
      },
      {
        id: 2,
        name: "29 April 2022",
        answer: false,
      },
      {
        id: 3,
        name: "29 May 2022",
        answer: false,
      },
      {
        id: 4,
        name: "29 June 2022",
        answer: false,
      },
    ],
    correctAns: "29 March 2022",
  },
  {
    id: 93,
    title: "Which of this accounts did possessed have AMA with?",
    options: [
      {
        id: 1,
        name: "@Worldofalpha",
        answer: true,
      },
      {
        id: 2,
        name: "@AlphaWorld",
        answer: false,
      },
      {
        id: 3,
        name: "@Alpha",
        answer: false,
      },
      {
        id: 4,
        name: "@World",
        answer: false,
      },
    ],
    correctAns: "@Worldofalpha",
  },
  {
    id: 94,
    title: "When did possessedNft twitter gain 90k followers?",
    options: [
      {
        id: 1,
        name: "29 March 2022",
        answer: false,
      },
      {
        id: 2,
        name: "25 March 2022",
        answer: true,
      },
      {
        id: 3,
        name: "21 March 2022",
        answer: false,
      },
      {
        id: 4,
        name: "28 March 2022",
        answer: false,
      },
    ],
    correctAns: "25 March 2022",
  },
  {
    id: 95,
    title: "When did gigidaydreams become possessedNft collab lead?",
    options: [
      {
        id: 1,
        name: "29 March 2022",
        answer: false,
      },
      {
        id: 2,
        name: "25 March 2022",
        answer: false,
      },
      {
        id: 3,
        name: "24 March 2022",
        answer: true,
      },
      {
        id: 4,
        name: "28 March 2022",
        answer: false,
      },
    ],
    correctAns: "24 March 2022",
  },
  {
    id: 96,
    title: "When did possessedNft twitter gain 30k followers?",
    options: [
      {
        id: 1,
        name: "29 March 2022",
        answer: false,
      },
      {
        id: 2,
        name: "25 March 2022",
        answer: false,
      },
      {
        id: 3,
        name: "24 March 2022",
        answer: false,
      },
      {
        id: 4,
        name: "1 March 2022",
        answer: true,
      },
    ],
    correctAns: "1 March 2022",
  },
  {
    id: 97,
    title: "When did possessedNft twitter gain 10k followers?",
    options: [
      {
        id: 1,
        name: "29 February 2022",
        answer: false,
      },
      {
        id: 2,
        name: "25 February 2022",
        answer: false,
      },
      {
        id: 3,
        name: "24 February 2022",
        answer: false,
      },
      {
        id: 4,
        name: "26 February 2022",
        answer: true,
      },
    ],
    correctAns: "26 February 2022",
  },
  {
    id: 98,
    title: "When did possessedNft twitter gain 5k followers?",
    options: [
      {
        id: 1,
        name: "29 February 2022",
        answer: false,
      },
      {
        id: 2,
        name: "25 February 2022",
        answer: false,
      },
      {
        id: 3,
        name: "24 February 2022",
        answer: false,
      },
      {
        id: 4,
        name: "12 February 2022",
        answer: true,
      },
    ],
    correctAns: "12 February 2022",
  },
  {
    id: 99,
    title: "When did gigidaydreams become possessedNft collab lead?",
    options: [
      {
        id: 1,
        name: "29 February 2022",
        answer: false,
      },
      {
        id: 2,
        name: "24 March 2022",
        answer: true,
      },
      {
        id: 3,
        name: "24 February 2022",
        answer: false,
      },
      {
        id: 4,
        name: "12 February 2022",
        answer: false,
      },
    ],
    correctAns: "24 March 2022",
  },
  {
    id: 100,
    title: "When did possessed release their website to the public?",
    options: [
      {
        id: 1,
        name: "29 February 2022",
        answer: false,
      },
      {
        id: 2,
        name: "25 February 2022",
        answer: false,
      },
      {
        id: 3,
        name: "16 March 2022",
        answer: false,
      },
      {
        id: 4,
        name: "12 February 2022",
        answer: false,
      },
    ],
    correctAns: "16 March 2022",
  },
  {
    id: 101,
    title: "Which of this accounts did possessed have AMA with?",
    options: [
      {
        id: 1,
        name: "Metaverse HQ",
        answer: true,
      },
      {
        id: 2,
        name: "HR Metaverse",
        answer: false,
      },
      {
        id: 3,
        name: "Meta HQ",
        answer: false,
      },
      {
        id: 4,
        name: "HR META",
        answer: false,
      },
    ],
    correctAns: "Metaverse HQ",
  },
  {
    id: 102,
    title: "Who was the fastest to decode posse moose code? ",
    options: [
      {
        id: 1,
        name: "0xRasmusNFT",
        answer: true,
      },
      {
        id: 2,
        name: "0xRasmus",
        answer: false,
      },
      {
        id: 3,
        name: "Chelsea",
        answer: false,
      },
      {
        id: 4,
        name: "Akanz",
        answer: false,
      },
    ],
    correctAns: "0xRasmusNFT",
  },
  {
    id: 103,
    title: "Who Cracked posse code via instagram?",
    options: [
      {
        id: 1,
        name: "Pareraedinho",
        answer: true,
      },
      {
        id: 2,
        name: "Akanz",
        answer: false,
      },
      {
        id: 3,
        name: "thecollector",
        answer: false,
      },
      {
        id: 4,
        name: "EthFargo",
        answer: false,
      },
    ],
    correctAns: "Pareraedinho",
  },
  {
    id: 104,
    title:
      "Who said this statement “You trust me with your eth, I trust you with my identity”?",
    options: [
      {
        id: 1,
        name: "Joe",
        answer: false,
      },
      {
        id: 2,
        name: "Tom",
        answer: true,
      },
      {
        id: 3,
        name: "Akanz",
        answer: false,
      },
      {
        id: 4,
        name: "EthFargo",
        answer: false,
      },
    ],
    correctAns: "Tom",
  },
  {
    id: 105,
    title: "Possessed lab report is a ?",
    options: [
      {
        id: 1,
        name: "Hazmat",
        answer: true,
      },
      {
        id: 2,
        name: "NFT",
        answer: false,
      },
      {
        id: 3,
        name: "Posse",
        answer: false,
      },
      {
        id: 4,
        name: "Allowlist",
        answer: false,
      },
    ],
    correctAns: "Hazmat",
  },
  {
    id: 106,
    title: "Who is the host of possessed vibes? ",
    options: [
      {
        id: 1,
        name: "Joe",
        answer: false,
      },
      {
        id: 2,
        name: "OneEyedZuko",
        answer: true,
      },
      {
        id: 3,
        name: "Akanz",
        answer: false,
      },
      {
        id: 4,
        name: "EthFargo",
        answer: false,
      },
    ],
    correctAns: "OneEyedZuko",
  },
  {
    id: 107,
    title: "Whats The Possessed NFT supply?",
    options: [
      {
        id: 1,
        name: "10000",
        answer: true,
      },
      {
        id: 2,
        name: "100000",
        answer: false,
      },
      {
        id: 3,
        name: "8000",
        answer: false,
      },
      {
        id: 4,
        name: "12000",
        answer: false,
      },
    ],
    correctAns: "10000",
  },
  {
    id: 108,
    title: "What did Tom study in university?",
    options: [
      {
        id: 1,
        name: "Cryptography",
        answer: false,
      },
      {
        id: 2,
        name: "Ethical Hacking",
        answer: false,
      },
      {
        id: 3,
        name: "Computer Science",
        answer: true,
      },
      {
        id: 4,
        name: "Mechanical Engineering",
        answer: false,
      },
    ],
    correctAns: "Computer Science",
  },
  {
    id: 109,
    title: "Which of these is a lab techs and also into photography?",
    options: [
      {
        id: 1,
        name: "Dr Chels",
        answer: true,
      },
      {
        id: 2,
        name: "Akanz",
        answer: false,
      },
      {
        id: 3,
        name: "EthFargo",
        answer: false,
      },
      {
        id: 4,
        name: "Tom",
        answer: false,
      },
    ],
    correctAns: "Dr Chels",
  },
  {
    id: 110,
    title: "Which of the following is a lab tech?",
    options: [
      {
        id: 1,
        name: "Joe",
        answer: false,
      },
      {
        id: 2,
        name: "Dr Illuminate",
        answer: true,
      },
      {
        id: 3,
        name: "EthFargo",
        answer: false,
      },
      {
        id: 4,
        name: "Tom",
        answer: false,
      },
    ],
    correctAns: "Dr Illuminate",
  },
  {
    id: 111,
    title: "Which of the following ran a mental health workshop with Gigi?",
    options: [
      {
        id: 1,
        name: "Joe",
        answer: false,
      },
      {
        id: 2,
        name: "Dr Chels",
        answer: false,
      },
      {
        id: 3,
        name: "Skywonderboy",
        answer: true,
      },
      {
        id: 4,
        name: "EthFargo",
        answer: false,
      },
    ],
    correctAns: "Skywonderboy",
  },
  {
    id: 112,
    title: "When did possessed release their website to the public?",
    options: [
      {
        id: 1,
        name: "16 March 2022",
        answer: true,
      },
      {
        id: 2,
        name: "11 March 2022",
        answer: false,
      },
      {
        id: 3,
        name: "16 February 2022",
        answer: false,
      },
      {
        id: 4,
        name: "11 February 2022",
        answer: false,
      },
    ],
    correctAns: "16 March 2022",
  },
  {
    id: 113,
    title: "Which of the following ran a mental health workshop with Gigi?",
    options: [
      {
        id: 1,
        name: "Joe",
        answer: false,
      },
      {
        id: 2,
        name: "Matt periphery",
        answer: true,
      },
      {
        id: 3,
        name: "Akanz",
        answer: false,
      },
      {
        id: 4,
        name: "EthFargo",
        answer: false,
      },
    ],
    correctAns: "Matt periphery",
  },
  {
    id: 114,
    title: "Which of the following is a lab tech?",
    options: [
      {
        id: 1,
        name: "Joe",
        answer: false,
      },
      {
        id: 2,
        name: "Dr L0st",
        answer: true,
      },
      {
        id: 3,
        name: "Akanz",
        answer: false,
      },
      {
        id: 4,
        name: "MrWolf",
        answer: false,
      },
    ],
    correctAns: "Dr L0st",
  },
  {
    id: 115,
    title: "Which of the following is not a lab tech?",
    options: [
      {
        id: 1,
        name: "Dr Shhh",
        answer: false,
      },
      {
        id: 2,
        name: "Dr Chels",
        answer: false,
      },
      {
        id: 3,
        name: "Akanz",
        answer: true,
      },
      {
        id: 4,
        name: "Dr Illuminate",
        answer: false,
      },
    ],
    correctAns: "Akanz",
  },
  {
    id: 116,
    title: "One of these is not part of the 3 C's pssd values?",
    options: [
      {
        id: 1,
        name: "Concern",
        answer: true,
      },
      {
        id: 2,
        name: "Community",
        answer: false,
      },
      {
        id: 3,
        name: "Collaboration",
        answer: false,
      },
      {
        id: 4,
        name: "Creativity",
        answer: false,
      },
    ],
    correctAns: "Concern",
  },
  {
    id: 117,
    title: "Which of this accounts did possessed have AMA with?",
    options: [
      {
        id: 1,
        name: "Doodles alpha",
        answer: true,
      },
      {
        id: 2,
        name: "Poodles alpha",
        answer: false,
      },
      {
        id: 3,
        name: "Boodles alpha",
        answer: false,
      },
      {
        id: 4,
        name: "Toodles alpha",
        answer: false,
      },
    ],
    correctAns: "Doodles alpha",
  },
  {
    id: 118,
    title: "Which of these is a part of the 3 C's pssd values?",
    options: [
      {
        id: 1,
        name: "Collaboration",
        answer: true,
      },
      {
        id: 2,
        name: "Connectivity",
        answer: false,
      },
      {
        id: 3,
        name: "Caution",
        answer: false,
      },
      {
        id: 4,
        name: "Concern",
        answer: false,
      },
    ],
    correctAns: "Collaboration",
  },
  {
    id: 119,
    title: "What is luuminize role in thePossessed?",
    options: [
      {
        id: 1,
        name: "A lab tech",
        answer: false,
      },
      {
        id: 2,
        name: "Mod",
        answer: true,
      },
      {
        id: 3,
        name: "Community Ambassador",
        answer: false,
      },
      {
        id: 4,
        name: "Founder",
        answer: false,
      },
    ],
    correctAns: "Mod",
  },
  {
    id: 120,
    title: "Which of the following is not a lab hazmat?",
    options: [
      {
        id: 1,
        name: "Dr Chels",
        answer: true,
      },
      {
        id: 2,
        name: "jarnNft",
        answer: false,
      },
      {
        id: 3,
        name: "Diya",
        answer: false,
      },
      {
        id: 4,
        name: "Zippy",
        answer: false,
      },
    ],
    correctAns: "Dr Chels",
  },
  {
    id: 121,
    title: "which one of the following is a host in possesseddev?",
    options: [
      {
        id: 1,
        name: "Akanz",
        answer: true,
      },
      {
        id: 2,
        name: "Dr Chels",
        answer: false,
      },
      {
        id: 3,
        name: "Dr L0st",
        answer: false,
      },
      {
        id: 4,
        name: "Dr Shhh",
        answer: false,
      },
    ],
    correctAns: "Akanz",
  },
  {
    id: 122,
    title: "Which of the following is not a mod in the possessedNFT?",
    options: [
      {
        id: 1,
        name: "Dr Chels",
        answer: false,
      },
      {
        id: 2,
        name: "Dr L0st",
        answer: false,
      },
      {
        id: 3,
        name: "MrWolf",
        answer: true,
      },
      {
        id: 4,
        name: "Dr Illuminate",
        answer: false,
      },
    ],
    correctAns: "MrWolf",
  },
  {
    id: 123,
    title: "The Permit Desk was upgraded to allow access for how long?",
    options: [
      {
        id: 1,
        name: "1 hour",
        answer: false,
      },
      {
        id: 2,
        name: "2 hours",
        answer: false,
      },
      {
        id: 3,
        name: "50 minutes",
        answer: true,
      },
      {
        id: 4,
        name: "1 minute",
        answer: false,
      },
    ],
    correctAns: "50 minutes",
  },
  {
    id: 124,
    title: "When did possessedNft twitter gain 8k followers?",
    options: [
      {
        id: 1,
        name: "20 June 2022",
        answer: false,
      },
      {
        id: 2,
        name: "19 February 2022",
        answer: false,
      },
      {
        id: 3,
        name: "20 Febraury 2022",
        answer: false,
      },
      {
        id: 4,
        name: "25 February 2022",
        answer: true,
      },
    ],
    correctAns: "25 February 2022",
  },
  {
    id: 125,
    title: "What is the Possessed website?",
    options: [
      {
        id: 1,
        name: "https://possessed.io",
        answer: false,
      },
      {
        id: 2,
        name: "https://possessed.com",
        answer: false,
      },
      {
        id: 3,
        name: "https://pssssd.xyz",
        answer: true,
      },
      {
        id: 4,
        name: "https://possessed.net",
        answer: false,
      },
    ],
    correctAns: "https://pssssd.xyz",
  },
  {
    id: 126,
    title: "When does cypher Sunday hold?",
    options: [
      {
        id: 1,
        name: "Every Sunday",
        answer: true,
      },
      {
        id: 2,
        name: "Every Monday",
        answer: false,
      },
      {
        id: 3,
        name: "Every Tuesday",
        answer: false,
      },
      {
        id: 4,
        name: "Every Thursday",
        answer: false,
      },
    ],
    correctAns: "Every Sunday",
  },
  {
    id: 127,
    title: "Which of these did possessednft have a collaboration with?",
    options: [
      {
        id: 1,
        name: "Azuki",
        answer: false,
      },
      {
        id: 2,
        name: "Aswang",
        answer: false,
      },
      {
        id: 3,
        name: "Moonbirds",
        answer: false,
      },
      {
        id: 4,
        name: "3Landers",
        answer: true,
      },
    ],
    correctAns: "Dr Illuminate",
  },
  {
    id: 128,
    title: "Which one of the following is not a host on possesseddevs?",
    options: [
      {
        id: 1,
        name: "Akanz",
        answer: false,
      },
      {
        id: 2,
        name: "Dr Chels",
        answer: true,
      },
      {
        id: 3,
        name: "thecollector",
        answer: false,
      },
      {
        id: 4,
        name: "MrWolf",
        answer: false,
      },
    ],
    correctAns: "Dr Chels",
  },
];
