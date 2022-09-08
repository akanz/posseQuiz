import { questionParams } from "../types";

export const time = new Date();
time.setSeconds(time.getSeconds() + 30);

export const questions: questionParams[] = [
  {
    id: 1,
    title: "Who is the founder of Yin yang gang?",
    options: [
      {
        id: 1,
        name: "Nomad",
        answer: true,
      },
      {
        id: 2,
        name: "Tom ",
        answer: false,
      },
      {
        id: 3,
        name: "Zeke",
        answer: false,
      },
      {
        id: 4,
        name: "Monad",
        answer: false,
      },
    ],
    correctAns: "10",
  },
  {
    id: 2,
    title: "What date is the official mint date?",
    options: [
      {
        id: 1,
        name: "Sept 21, 2022",
        answer: false,
      },
      {
        id: 2,
        name: "September 12, 2022",
        answer: true,
      },
      {
        id: 3,
        name: "September 12, 2021",
        answer: false,
      },
      {
        id: 4,
        name: "August 12, 2022",
        answer: false,
      },
    ],
    correctAns: "September 12, 2022",
  },
  {
    id: 3,
    title: "What launchpad is yinyang collaborating with?",
    options: [
      {
        id: 1,
        name: "Hydra launchpad",
        answer: false,
      },
      {
        id: 2,
        name: "Magic Eden launchpad",
        answer: false,
      },
      {
        id: 3,
        name: "Opensea launchpad",
        answer: false,
      },
      {
        id: 4,
        name: "Shadow labs",
        answer: true,
      },
    ],
    correctAns: "Shadow labs",
  },
  {
    id: 4,
    title: "What is the Streetlist role",
    options: [
      {
        id: 1,
        name: "Project owner",
        answer: false,
      },
      {
        id: 2,
        name: "Ability to mint a yinyang nft",
        answer: true,
      },
      {
        id: 3,
        name: "server booster",
        answer: false,
      },
      {
        id: 4,
        name: "Discord member",
        answer: false,
      },
    ],
    correctAns: "Ability to mint a yinyang nft",
  },
  {
    id: 5,
    title: "Which one of these projects is yinyang collaborating with?",
    options: [
      {
        id: 1,
        name: "Alien frens",
        answer: false,
      },
      {
        id: 2,
        name: "Goblin town",
        answer: false,
      },
      {
        id: 3,
        name: "Moon cats",
        answer: false,
      },
      {
        id: 4,
        name: "Invisible friends",
        answer: true,
      },
    ],
    correctAns: "Invisible friends",
  },
  {
    id: 6,
    title: "Which one of these projects is yinyang collaborating with?",
    options: [
      {
        id: 1,
        name: "Cool cats",
        answer: false,
      },
      {
        id: 2,
        name: "Vampire syndicates",
        answer: false,
      },
      {
        id: 3,
        name: "Great goats",
        answer: false,
      },
      {
        id: 4,
        name: "Primates nft",
        answer: true,
      },
    ],
    correctAns: "Primates nft",
  },
  {
    id: 7,
    title: "Which one of these projects is yinyang collaborating with?",
    options: [
      {
        id: 1,
        name: "Operation SIN",
        answer: true,
      },
      {
        id: 2,
        name: "Imaginary Ones",
        answer: false,
      },
      {
        id: 3,
        name: "fun cats",
        answer: false,
      },
      {
        id: 4,
        name: "Mindblowon",
        answer: false,
      },
    ],
    correctAns: "Operation SIN",
  },
  {
    id: 8,
    title: "Who is the Lady boss?",
    options: [
      {
        id: 1,
        name: "Kryptopal",
        answer: false,
      },
      {
        id: 2,
        name: "Sixty",
        answer: false,
      },
      {
        id: 3,
        name: "4422HM",
        answer: true,
      },
      {
        id: 4,
        name: "cindy",
        answer: false,
      },
    ],
    correctAns: "4422HM",
  },
  {
    id: 9,
    title: "How many underbosses does KP have?",
    options: [
      {
        id: 1,
        name: "3",
        answer: true,
      },
      {
        id: 2,
        name: "2",
        answer: false,
      },
      {
        id: 3,
        name: "1",
        answer: false,
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
    id: 10,
    title: "What event has yinyang held",
    options: [
      {
        id: 1,
        name: "Rap battle",
        answer: true,
      },
      {
        id: 2,
        name: "Bowling",
        answer: false,
      },
      {
        id: 3,
        name: "Skiing",
        answer: false,
      },
      {
        id: 4,
        name: "Spelling bee",
        answer: false,
      },
    ],
    correctAns: "Rap battle",
  },
  {
    id: 11,
    title: "How many bosses are in yinyang",
    options: [
      {
        id: 1,
        name: "1",
        answer: false,
      },
      {
        id: 2,
        name: "5",
        answer: true,
      },
      {
        id: 3,
        name: "3",
        answer: false,
      },
      {
        id: 4,
        name: "2",
        answer: false,
      },
    ],
    correctAns: "5",
  },
  {
    id: 12,
    title: "Which of the following is Nomad's underboss",
    options: [
      {
        id: 1,
        name: "Sesh",
        answer: false,
      },
      {
        id: 2,
        name: "Nicky",
        answer: false,
      },
      {
        id: 3,
        name: "Sixty",
        answer: false,
      },
      {
        id: 4,
        name: "Benny",
        answer: true,
      },
    ],
    correctAns: "Benny",
  },
  {
    id: 13,
    title: "Which of the following is 4422HM's underboss",
    options: [
      {
        id: 1,
        name: "thecollector",
        answer: false,
      },
      {
        id: 2,
        name: "Ayo4pf",
        answer: false,
      },
      {
        id: 3,
        name: "Mano",
        answer: false,
      },
      {
        id: 4,
        name: "Sara",
        answer: true,
      },
    ],
    correctAns: "Sara",
  },
  {
    id: 14,
    title: "Which of the following is Kryptopal's underboss",
    options: [
      {
        id: 1,
        name: "Widow",
        answer: true,
      },
      {
        id: 2,
        name: "Nicky",
        answer: false,
      },
      {
        id: 3,
        name: "Kp",
        answer: false,
      },
      {
        id: 4,
        name: "Benny",
        answer: false,
      },
    ],
    correctAns: "Widow",
  },
  {
    id: 15,
    title: "What project did yinyang do a rap battle with?",
    options: [
      {
        id: 1,
        name: "OperationSin",
        answer: true,
      },
      {
        id: 2,
        name: "PossessedNFT",
        answer: false,
      },
      {
        id: 3,
        name: "G.A.S",
        answer: false,
      },
      {
        id: 4,
        name: "Shamanzs",
        answer: false,
      },
    ],
    correctAns: "true",
  },
  {
    id: 16,
    title:
      "Complete the phrase in the lore. Dark clouds gathered around the towering, __________ and ________`",
    options: [
      {
        id: 1,
        name: "Strato-scrapers, megablocks",
        answer: true,
      },
      {
        id: 2,
        name: "Stadiums, livecenter",
        answer: false,
      },
      {
        id: 3,
        name: "City hall, skyscrapers",
        answer: false,
      },
      {
        id: 4,
        name: "Citadel, churches",
        answer: false,
      },
    ],
    correctAns: "Strato-scrapers, megablocks",
  },
  {
    id: 17,
    title: "Which of the following is a core team member?",
    options: [
      {
        id: 1,
        name: "Nicky",
        answer: false,
      },
      {
        id: 2,
        name: "Benny",
        answer: false,
      },
      {
        id: 3,
        name: "Sesh",
        answer: false,
      },
      {
        id: 4,
        name: "Maison Ghost",
        answer: true,
      },
    ],
    correctAns: "Maison Ghost",
  },
  {
    id: 18,
    title: "What the meaning of SL?",
    options: [
      {
        id: 1,
        name: "Stripperslist",
        answer: false,
      },
      {
        id: 2,
        name: "Streetlist",
        answer: true,
      },
      {
        id: 3,
        name: "Simplist",
        answer: false,
      },
      {
        id: 4,
        name: "slaylist",
        answer: false,
      },
    ],
    correctAns: "Streetlist",
  },
  {
    id: 19,
    title: "Which of this in not a discord role in Yinyang server?",
    options: [
      {
        id: 1,
        name: "Elder Apez",
        answer: false,
      },
      {
        id: 2,
        name: "Narcs",
        answer: false,
      },
      {
        id: 3,
        name: "Ambushed",
        answer: true,
      },
      {
        id: 4,
        name: "Initiated",
        answer: false,
      },
    ],
    correctAns: "Ambushed",
  },
  {
    id: 20,
    title: "Sicarios crew boss is?",
    options: [
      {
        id: 1,
        name: "Kp",
        answer: false,
      },
      {
        id: 2,
        name: "Nomad",
        answer: false,
      },
      {
        id: 3,
        name: "4422",
        answer: false,
      },
      {
        id: 4,
        name: "ManosDePapel",
        answer: true,
      },
    ],
    correctAns: "ManosDePapel",
  },
  {
    id: 21,
    title: "Ghost crew boss is?",
    options: [
      {
        id: 1,
        name: "Kp",
        answer: false,
      },
      {
        id: 2,
        name: "Nomad",
        answer: false,
      },
      {
        id: 3,
        name: "4422",
        answer: false,
      },
      {
        id: 4,
        name: "Maison Ghost",
        answer: true,
      },
    ],
    correctAns: "Maison Ghost",
  },
  {
    id: 22,
    title: "KP cartel boss is?",
    options: [
      {
        id: 1,
        name: "Kryptopal",
        answer: true,
      },
      {
        id: 2,
        name: "Nomad",
        answer: false,
      },
      {
        id: 3,
        name: "4422",
        answer: false,
      },
      {
        id: 4,
        name: "ManosDePapel",
        answer: false,
      },
    ],
    correctAns: "Kryptopal",
  },
  {
    id: 23,
    title: "Which of the following is a Sicario underboss?",
    options: [
      {
        id: 1,
        name: "Bettle eyes",
        answer: false,
      },
      {
        id: 2,
        name: "Scar Queen",
        answer: false,
      },
      {
        id: 3,
        name: "Ghost knows",
        answer: false,
      },
      {
        id: 4,
        name: "Primo",
        answer: true,
      },
    ],
    correctAns: "Primo",
  },
  {
    id: 24,
    title: "Which of the following is a Sicario underboss?",
    options: [
      {
        id: 1,
        name: "fly eyes",
        answer: false,
      },
      {
        id: 2,
        name: "Scarface",
        answer: false,
      },
      {
        id: 3,
        name: "GhostShell",
        answer: false,
      },
      {
        id: 4,
        name: "Shugar Queen",
        answer: true,
      },
    ],
    correctAns: "Shugar Queen",
  },
  {
    id: 25,
    title: "One of these project is collaborating with Yinyang?",
    options: [
      {
        id: 1,
        name: "KaijuKingz",
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
        name: "PossessedNft",
        answer: true,
      },
    ],
    correctAns: "PossessedNft",
  },
  {
    id: 26,
    title: "What type of art is Yinyang collection?",
    options: [
      {
        id: 1,
        name: "Pixel",
        answer: true,
      },
      {
        id: 2,
        name: "Ai generated",
        answer: false,
      },
      {
        id: 3,
        name: "Anime",
        answer: false,
      },
      {
        id: 4,
        name: "Art block",
        answer: false,
      },
    ],
    correctAns: "Pixel",
  },
  {
    id: 27,
    title: "First official Sneak peek was which date?",
    options: [
      {
        id: 1,
        name: "08/05/2022",
        answer: true,
      },
      {
        id: 2,
        name: "08/15/2022",
        answer: false,
      },
      {
        id: 3,
        name: "07/05/2022",
        answer: false,
      },
      {
        id: 4,
        name: "07/15/2022",
        answer: false,
      },
    ],
    correctAns: "08/05/2022",
  },
  {
    id: 28,
    title: "Which of the following is a Sicario underboss?",
    options: [
      {
        id: 1,
        name: "Alejo",
        answer: true,
      },
      {
        id: 2,
        name: "Romanz",
        answer: false,
      },
      {
        id: 3,
        name: "Sequila",
        answer: false,
      },
      {
        id: 4,
        name: "Primo",
        answer: false,
      },
    ],
    correctAns: "Alejo",
  },
  {
    id: 29,
    title: "Which of the following is a Sicario underboss?",
    options: [
      {
        id: 1,
        name: "Preciousthegem",
        answer: true,
      },
      {
        id: 2,
        name: "Lilly pad",
        answer: false,
      },
      {
        id: 3,
        name: "Deeznut",
        answer: false,
      },
      {
        id: 4,
        name: "Macqueen",
        answer: false,
      },
    ],
    correctAns: "Preciousthegem",
  },
  {
    id: 30,
    title: "Yinyang first tweet was which date?",
    options: [
      {
        id: 1,
        name: "June 22, 2022",
        answer: false,
      },
      {
        id: 2,
        name: "July 23rd, 2022",
        answer: true,
      },
      {
        id: 3,
        name: "Aug 5th, 2022",
        answer: false,
      },
      {
        id: 4,
        name: "Aug 8th, 2022",
        answer: false,
      },
    ],
    correctAns: "July 23rd, 2022",
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
    title: "Who's KP?",
    options: [
      {
        id: 1,
        name: "Krpto punk",
        answer: false,
      },
      {
        id: 2,
        name: "Krypto phunk",
        answer: false,
      },
      {
        id: 3,
        name: "Kyrpto path",
        answer: false,
      },
      {
        id: 4,
        name: "Krypto pal",
        answer: true,
      },
    ],
    correctAns: "Kyrpto pal",
  },
  {
    id: 33,
    title: "How many underbosses does Manosdepapel have?",
    options: [
      {
        id: 1,
        name: "4",
        answer: true,
      },
      {
        id: 2,
        name: "2",
        answer: false,
      },
      {
        id: 3,
        name: "5",
        answer: false,
      },
      {
        id: 4,
        name: "3",
        answer: false,
      },
    ],
    correctAns: "4",
  },
  {
    id: 34,
    title: "Complete the phrase in the lore. At night, ___________________",
    options: [
      {
        id: 1,
        name: "the beast was born",
        answer: false,
      },
      {
        id: 2,
        name: "A 10000 year old portal appeared",
        answer: false,
      },
      {
        id: 3,
        name: "the slums came alive",
        answer: true,
      },
      {
        id: 4,
        name: "Lucifer was let loose",
        answer: false,
      },
    ],
    correctAns: "the slums came alive",
  },
  {
    id: 35,
    title: "Yinyang Lore writer is?",
    options: [
      {
        id: 1,
        name: "Nomad",
        answer: true,
      },
      {
        id: 2,
        name: "4422HM",
        answer: false,
      },
      {
        id: 3,
        name: "Tiffanny",
        answer: false,
      },
      {
        id: 4,
        name: "Kryptopal",
        answer: false,
      },
    ],
    correctAns: "Nomad",
  },
  {
    id: 36,
    title:
      "Complete the phrase in the lore. `Away from the mayhem of the center, _________________ around a duffel bag`",
    options: [
      {
        id: 1,
        name: "down a quiet and dingy alleyway some gangbangers huddled around a duffel bag",
        answer: true,
      },
      {
        id: 2,
        name: "and there was ferrocious outcry in the city outskirts",
        answer: false,
      },
      {
        id: 3,
        name: "down the dunghill and up in the dust, the flames arose without remorse",
        answer: false,
      },
      {
        id: 4,
        name: "So was the insider, not willing to put her head and brain in",
        answer: false,
      },
    ],
    correctAns:
      "down a quiet and dingy alleyway some gangbangers huddled around a duffel bag",
  },
  {
    id: 37,
    title: "Who's a YYG Capos?",
    options: [
      {
        id: 1,
        name: "Regular yinyang discord member",
        answer: false,
      },
      {
        id: 2,
        name: "Dysto Apez holder",
        answer: false,
      },
      {
        id: 3,
        name: "Members who are guaranteed a free mint",
        answer: false,
      },
      {
        id: 4,
        name: "Moderation team",
        answer: true,
      },
    ],
    correctAns: "Moderation team",
  },
  {
    id: 38,
    title: "Yinyang first official AMA was when?",
    options: [
      {
        id: 1,
        name: "7/18/2022",
        answer: false,
      },
      {
        id: 2,
        name: "8/18/2022",
        answer: false,
      },
      {
        id: 3,
        name: "7/19/2022",
        answer: false,
      },
      {
        id: 4,
        name: "8/19/2022",
        answer: true,
      },
    ],
    correctAns: "8/19/2022",
  },
  {
    id: 39,
    title:
      "_____ and _____ collabed with yinyang to release the first audio track",
    options: [
      {
        id: 1,
        name: "Oculus, villan",
        answer: false,
      },
      {
        id: 2,
        name: "Spectrum, waveinx",
        answer: false,
      },
      {
        id: 3,
        name: "Soundmintxyz, Anonymuzkilla",
        answer: true,
      },
      {
        id: 4,
        name: "Sound.xyz, pitchfork",
        answer: false,
      },
    ],
    correctAns: "Soundmintxyz, Anonymuzkilla",
  },
  {
    id: 40,
    title: "Which one of these projects is yinyang collaborating with?",
    options: [
      {
        id: 1,
        name: "Degen apes",
        answer: false,
      },
      {
        id: 2,
        name: "SMB",
        answer: false,
      },
      {
        id: 3,
        name: "Catalina whales",
        answer: false,
      },
      {
        id: 4,
        name: "Degods",
        answer: true,
      },
    ],
    correctAns: "Degods",
  },
  {
    id: 41,
    title: "Who are the Yinyang Merch creators?",
    options: [
      {
        id: 1,
        name: "Maison ghost and turbo",
        answer: false,
      },
      {
        id: 2,
        name: "Kryptopal and Tolu",
        answer: false,
      },
      {
        id: 3,
        name: "4422HM and KRD",
        answer: true,
      },
      {
        id: 4,
        name: "Ayojpf and Manosdepapel.eth",
        answer: false,
      },
    ],
    correctAns: "4422HM and KRD",
  },
  {
    id: 42,
    title: "Which of the following is 4422HM underboss?",
    options: [
      {
        id: 1,
        name: "Nicky",
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
    correctAns: "Nicky",
  },
  {
    id: 43,
    title: "Who is an underboss?",
    options: [
      {
        id: 1,
        name: "Work for yinyang bosses",
        answer: true,
      },
      {
        id: 2,
        name: "yinyang discord members",
        answer: false,
      },
      {
        id: 3,
        name: "people who like yinyang",
        answer: false,
      },
      {
        id: 4,
        name: "random people in Nfts",
        answer: false,
      },
    ],
    correctAns: "Work for yinyang bosses",
  },
  {
    id: 44,
    title: "Who's sixty?",
    options: [
      {
        id: 1,
        name: "A behind boss",
        answer: false,
      },
      {
        id: 2,
        name: "An overboss",
        answer: false,
      },
      {
        id: 3,
        name: "A boss",
        answer: false,
      },
      {
        id: 4,
        name: "An underboss",
        answer: true,
      },
    ],
    correctAns: "An underboss",
  },
  {
    id: 45,
    title: "Which of the following is Maison ghost's underboss?",
    options: [
      {
        id: 1,
        name: "sixty",
        answer: false,
      },
      {
        id: 2,
        name: "nicky",
        answer: false,
      },
      {
        id: 3,
        name: "sesh",
        answer: true,
      },
      {
        id: 4,
        name: "tulu",
        answer: false,
      },
    ],
    correctAns: "sesh",
  },
  {
    id: 46,
    title: "Nicky and benny are underbosses for which bosses respectively?",
    options: [
      {
        id: 1,
        name: "Nomad, Kryptopal",
        answer: false,
      },
      {
        id: 2,
        name: "Sixty, 4422",
        answer: false,
      },
      {
        id: 3,
        name: "4422, Nomad",
        answer: true,
      },
      {
        id: 4,
        name: "Sesh, Shugar Queen",
        answer: false,
      },
    ],
    correctAns: "4422, Nomad",
  },
  {
    id: 47,
    title: "Who are Narcs?",
    options: [
      {
        id: 1,
        name: "Underboss overboss",
        answer: false,
      },
      {
        id: 2,
        name: "Smallbros holders",
        answer: false,
      },
      {
        id: 3,
        name: "Dystos Apez holders",
        answer: true,
      },
      {
        id: 4,
        name: "nft collectors",
        answer: false,
      },
    ],
    correctAns: "Dystos Apez holders",
  },
  {
    id: 48,
    title: "What date did yinyang launch their website?",
    options: [
      {
        id: 1,
        name: "08/09/2022",
        answer: false,
      },
      {
        id: 2,
        name: "08/08/2022",
        answer: false,
      },
      {
        id: 3,
        name: "09/06/2022",
        answer: true,
      },
      {
        id: 4,
        name: "09/08/2022",
        answer: false,
      },
    ],
    correctAns: "09/06/2022",
  },
  {
    id: 49,
    title: "Which of the following is not a Yinyang underboss?",
    options: [
      {
        id: 1,
        name: "Sixty",
        answer: false,
      },
      {
        id: 2,
        name: "Shugar Queen",
        answer: false,
      },
      {
        id: 3,
        name: "Sara",
        answer: false,
      },
      {
        id: 4,
        name: "Lingard",
        answer: true,
      },
    ],
    correctAns: "Lingard",
  },
  {
    id: 50,
    title: "Which of the following is a not a Yinyang underboss?",
    options: [
      {
        id: 1,
        name: "Chelsea",
        answer: true,
      },
      {
        id: 2,
        name: "Benny",
        answer: false,
      },
      {
        id: 3,
        name: "Sesh",
        answer: false,
      },
      {
        id: 4,
        name: "Primo",
        answer: false,
      },
    ],
    correctAns: "Chelsea",
  },
];
