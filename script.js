console.log("Script loaded successfully.");
const dimensionMap = {
  q1: "EI",
  q2: "EI",
  q3: "EI",
  q4: "SN",
  q5: "SN",
  q6: "SN",
  q7: "TF",
  q8: "TF",
  q9: "TF",
  q10: "JP",
  q11: "JP",
  q12: "JP",
};
const mbtiImages = {
  INTJ: "images/intj.png",
  INTP: "images/intp.png",
  ENTJ: "images/entj.png",
  ENTP: "images/entp.png",
  INFJ: "images/infj.png",
  INFP: "images/infp.png",
  ENFJ: "images/enfj.png",
  ENFP: "images/enfp.png",
  ISTJ: "images/istj.png",
  ISFJ: "images/isfj.png",
  ESTJ: "images/estj.png",
  ESFJ: "images/esfj.png",
  ISTP: "images/istp.png",
  ISFP: "images/isfp.png",
  ESTP: "images/estp.png",
  ESFP: "images/esfp.png",
};
const mbtiDescriptions = {
  INTJ: "The Architect. Strategic, independent, and determined. You see the world as a place full of possibilities and make plans to achieve your long-term goals.",
  INTP: "The Logician. Innovative, curious, and logical. You love exploring ideas and theories, always seeking to understand how things work.",
  ENTJ: "The Commander. Bold, ambitious, and decisive. You are a natural leader who loves challenges and is driven to achieve your goals.",
  ENTP: "The Debater. Clever, curious, and energetic. You love intellectual challenges and are always looking for new ideas to explore.",
  INFJ: "The Advocate. Insightful, principled, and compassionate. You have a strong sense of idealism and a deep desire to help others.",
  INFP: "The Mediator. Empathetic, creative, and idealistic. You are guided by your values and always strive to make the world a better place.",
  ENFJ: "The Protagonist. Charismatic, inspiring, and empathetic. You are a natural leader who loves helping others reach their potential.",
  ENFP: "The Campaigner. Enthusiastic, creative, and sociable. You see life as full of possibilities and love connecting with others.",
  ISTJ: "The Logistician. Reliable, practical, and detail-oriented. You are responsible and committed to fulfilling your duties.",
  ISFJ: "The Defender. Caring, loyal, and observant. You are dedicated to protecting and supporting the people you care about.",
  ESTJ: "The Executive. Organized, practical, and dependable. You believe in order and are excellent at managing people and projects.",
  ESFJ: "The Consul. Caring, social, and supportive. You are highly attuned to others' needs and strive to maintain harmony.",
  ISTP: "The Virtuoso. Practical, observant, and analytical. You love exploring how things work and are great at solving practical problems.",
  ISFP: "The Adventurer. Gentle, sensitive, and artistic. You live in the present and love exploring the world through your senses.",
  ESTP: "The Entrepreneur. Energetic, perceptive, and direct. You love living on the edge and thrive in fast-paced environments.",
  ESFP: "The Entertainer. Spontaneous, energetic, and fun-loving. You love being the center of attention and bringing joy to others.",
};
function getResults() {
  const score = { EI: 0, SN: 0, TF: 0, JP: 0 };
  // checks if all questions are answered.
  for (let i = 1; i <= 12; i++) {
    let question = `q${i}`;
    if (!document.querySelector(`input[name="${question}"]:checked`)) {
      alert(`Please answer all questions before submitting!`);
      return;
    }
  }
  for (let i = 1; i <= 12; i++) {
    let question = `q${i}`;
    let answer = document.querySelector(
      `input[name="${question}"]:checked`,
    ).value;
    console.log(`Question ${i}: ${answer}`);
    let dimension = dimensionMap[question];
    if (answer == dimension[0]) {
      score[dimension] += 1;
    } else {
      score[dimension] -= 1;
    }
  }
  let result = "";
  result += score.EI > 0 ? "E" : "I";
  result += score.SN > 0 ? "S" : "N";
  result += score.TF > 0 ? "T" : "F";
  result += score.JP > 0 ? "J" : "P";
  console.log(`Final Result: ${result}`);
  document.querySelector("section").style.display = "none";
  document.querySelector("header").style.display = "none";
  document.getElementById("welcome-text").style.display = "none";
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("result-text").innerHTML = result;
  document.getElementById("result-text").innerHTML =
    result + "<br><br>" + mbtiDescriptions[result];
  document.getElementById("result-img").src = mbtiImages[result];
}
function goBack() {
  document.querySelector("section").style.display = "block";
  document.querySelector("header").style.display = "block";
  document.getElementById("welcome-text").style.display = "block";
  document.getElementById("submit-btn").style.display = "block";
  document.getElementById("result-container").style.display = "none";
  for (let i = 1; i <= 12; i++) {
    let checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (checked) checked.checked = false;
  } //clean up all answers.
}
