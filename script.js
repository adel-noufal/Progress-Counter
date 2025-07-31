let day = 1;
const maxDay = 10;

const dayTitle = document.getElementById("dayTitle");
const progressBar = document.getElementById("progressBar");
const messageBox = document.getElementById("messageBox");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const avatar = document.getElementById("avatar");

const messages = [
  "Training started. Let's build something amazing!",
  "The AI is learning to write code!",
  "Understanding user behavior...",
  "Learning to recognize voices!",
  "Training on image data...",
  "Learning to generate text...",
  "Understanding natural language...",
  "Simulating conversations...",
  "Reviewing data sets...",
  "Training complete. The AI is ready!",
];

const avatars = [
  "radial-gradient(circle, #fefcea, #f1da36)",  // Laptop
  "radial-gradient(circle, #ffe0e0, #ff7272)",  // Writing
  "radial-gradient(circle, #d2e0fc, #4a90e2)",  // Phone
  "radial-gradient(circle, #c2f0c2, #3adb76)",  // Chat
  "radial-gradient(circle, #fff0b3, #f0ad4e)",  // Vision
  "radial-gradient(circle, #fbd1d1, #ff6666)",  // Typing
  "radial-gradient(circle, #e0f7fa, #00bcd4)",  // NLP
  "radial-gradient(circle, #fce4ec, #ec407a)",  // Talking
  "radial-gradient(circle, #ede7f6, #7e57c2)",  // Data
  "radial-gradient(circle, #dcedc8, #8bc34a)",  // Finished
];

function updateScene() {
  
  for (let day = 1; day <= 10; day++) {
    let percentage = day * 10;
    console.log(`Day ${day}: Progress ${percentage}%`);
    
    
    dayTitle.textContent = `Day ${day}`;
    progressBar.style.width = `${percentage}%`;
    messageBox.textContent = messages[day - 1];
    avatar.style.background = avatars[day - 1];

    if (day % 2 === 0) {
      sun.style.left = "-100px";
      moon.style.left = "80%";
    } else {
      sun.style.left = "10%";
      moon.style.left = "-100px";
    }
  }
}

function nextDay() {
  if (day < maxDay) {
    day++;
    updateScene();
  }
}

function prevDay() {
  if (day > 1) {
    day--;
    updateScene();
  }
}

updateScene();
