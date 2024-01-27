// new TypeIt("#type")
//   .type(")
//   .pause(1000)

//   .type("용산을 소개합니다 🙌")
//   .go();

new TypeIt("#type", {
  strings: "이제는 용산 시대 🙌",
  speed: 75,
  loop: true,
}).go();
