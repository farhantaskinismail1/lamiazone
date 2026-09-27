/* =====================================================
   LAMIAZONE
   DAILY MCQ
===================================================== */

/* =====================================================
   QUESTIONS

   শুধু এই জায়গায় তোমার MCQ লিখবে।

   Format:

   প্রশ্ন 1. প্রশ্ন...? (ক) ... (খ) ... (গ) ... (ঘ) ...

   প্রশ্ন 2. প্রশ্ন...? (ক) ... (খ) ... (গ) ... (ঘ) ...

   এভাবে 100+ প্রশ্নও দেওয়া যাবে।
===================================================== */

const questionsText = `

প্রশ্ন 1. নিচের কোনটি পৃথিবীর কেন্দ্রমণ্ডলের ভেতরের অংশে থাকে? (ক) নিকেল (খ) লোহা (গ) ক ও খ (ঘ) তামা

প্রশ্ন 2. ভূ-ত্বকের কোন অংশটি থেকে আগ্নেয়গিরির উদ্গীরণে গলিত লাভা বের হয়ে আসে? (ক) ভূ-ত্বক (খ) শিলাখণ্ড (গ) গুরুমন্ডল (ঘ) কেন্দ্রমন্ডল

প্রশ্ন 3. বায়ুমণ্ডলে — রয়েছে মূলত (ক) অক্সিজেন ও কার্বন ডাইঅক্সাইড (খ) অক্সিজেন ও নাইট্রোজেন (গ) অক্সিজেন ও জলীয় বাষ্প (ঘ) অক্সিজেন ও ধূলিকণা

প্রশ্ন 4. কোয়ান্টাম তত্ত্ব কখন আবিষ্কৃত হয়? (ক) অষ্টাদশ শতাব্দীতে (খ) উনিশ শতাব্দীর শেষে (গ) বিংশ শতাব্দীর শুরুতে (ঘ) বিংশ শতাব্দীর শেষে

প্রশ্ন 5. পদার্থবিজ্ঞানের মূল নীতি কোনটি? (ক) শক্তির সংরক্ষণশীলতা নীতি (খ) বল বৃদ্ধিকরণ নীতি (গ) লিভারের নীতি (ঘ) উপরের সবগুলো

প্রশ্ন 6. তরলে নিমজ্জিত কোনো বস্তুর আয়তন তার দ্বারা অপসারিত তরলের আয়তনের সমান, এটি কী? (ক) সূত্র (খ) তত্ত্ব (গ) নীতি (ঘ) অনুকল্প

প্রশ্ন 7. পর্যবেক্ষণলব্ধ ঘটনার কারণ কী হতে পারে সে সম্পর্কে ধারণার ভিত্তিতে অস্থায়ী প্রাথমিক ব্যাখ্যা হচ্ছে (ক) তত্ত্ব (খ) অনুকল্প (গ) নীতি (ঘ) স্বীকার্য

প্রশ্ন 8. সৌরকেন্দ্রিক তত্ত্বের ধারণা দেন কে? (ক) কেপলার (খ) রোমার (গ) কোপারনিকাস (ঘ) টাইকোব্রাহে

প্রশ্ন 9. চিরায়ত পদার্থবিজ্ঞানে স্থান হচ্ছে (ক) ত্রিমাত্রিক এক বিস্তৃতি (খ) দ্বিমাত্রিক দুই বিস্তৃতি (গ) দ্বিমাত্রিক এক বিস্তৃতি (ঘ) ত্রিমাত্রিক দুই বিস্তৃতি

প্রশ্ন 10. সর্বপ্রথম কোয়ান্টাম তত্ত্ব প্রদান করেন কে? (ক) আইনস্টাইন (খ) ম্যাক্স প্লাঙ্ক (গ) নিউটন (ঘ) রাদারফোর্ড

`;

/* =====================================================
   PARSE QUESTIONS
===================================================== */

function parseQuestions(text) {
  const parts = text

    .split(/(?=প্রশ্ন\s*\d+\s*[.:])/g)

    .map((item) => item.trim())

    .filter((item) => item.length > 0);

  return parts.map((item) => {
    /* Remove question number */

    let content = item.replace(/^প্রশ্ন\s*\d+\s*[.:]\s*/i, '');

    /* Find options */

    const optionPattern =
      /\s*\(ক\)\s*([\s\S]*?)\s*\(খ\)\s*([\s\S]*?)\s*\(গ\)\s*([\s\S]*?)\s*\(ঘ\)\s*([\s\S]*)$/;

    const match = content.match(optionPattern);

    /* If options cannot be detected */

    if (!match) {
      return {
        question: content,

        options: [],
      };
    }

    /* Get question text */

    const question = content.substring(0, content.search(/\s*\(ক\)/)).trim();

    return {
      question: question,

      options: [
        `ক) ${match[1].trim()}`,

        `খ) ${match[2].trim()}`,

        `গ) ${match[3].trim()}`,

        `ঘ) ${match[4].trim()}`,
      ],
    };
  });
}

/* =====================================================
   DISPLAY QUESTIONS
===================================================== */

const questions = parseQuestions(questionsText);

const container = document.getElementById('questionsContainer');

const questionCount = document.getElementById('questionCount');

/* Show total question */

questionCount.textContent = questions.length;

/* Create every question */

questions.forEach((item, index) => {
  const card = document.createElement('div');

  card.className = 'question-card';

  /* Question number */

  const number = document.createElement('div');

  number.className = 'question-number';

  number.textContent = `প্রশ্ন ${index + 1}`;

  /* Question */

  const question = document.createElement('div');

  question.className = 'question-text';

  question.textContent = item.question;

  /* Options */

  const options = document.createElement('div');

  options.className = 'options';

  item.options.forEach((optionText) => {
    const option = document.createElement('div');

    option.className = 'option';

    option.textContent = optionText;

    options.appendChild(option);
  });

  /* Add everything */

  card.appendChild(number);

  card.appendChild(question);

  card.appendChild(options);

  container.appendChild(card);
});

// =========================
// Countdown Timer
// =========================

let totalSeconds = 60 * 60;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const countdown = document.querySelector('.countdown');

const timeUpOverlay = document.getElementById('timeUpOverlay');
const closeTimeUp = document.getElementById('closeTimeUp');

let timer = null;

// Timer update
function updateCountdown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');

  // 5 মিনিটের নিচে
  if (totalSeconds <= 5 * 60 && totalSeconds > 60) {
    countdown.classList.add('warning');
  }

  // 1 মিনিটের নিচে
  if (totalSeconds <= 60 && totalSeconds > 0) {
    countdown.classList.add('danger');
  }

  // Time শেষ
  if (totalSeconds <= 0) {
    clearInterval(timer);

    minutesElement.textContent = '00';
    secondsElement.textContent = '00';

    countdown.classList.add('time-ended');

    timeUpOverlay.classList.add('show');

    return;
  }

  totalSeconds--;
}

// =========================
// Good Luck Popup
// =========================

const welcomeOverlay = document.getElementById('welcomeOverlay');
const readyBtn = document.getElementById('readyBtn');

readyBtn.addEventListener('click', () => {
  // Popup বন্ধ
  welcomeOverlay.classList.add('hide');

  // Countdown শুরু
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

// =========================
// Time Up Popup Close
// =========================

closeTimeUp.addEventListener('click', () => {
  timeUpOverlay.classList.remove('show');
});
// =========================
// Good Luck Popup
// =========================
/* =========================================
   LAMIA PROGRESS LOGIN
========================================= */

const USERNAME = 'lamia';
const PASSWORD = 'lamia123';

/* Google Sheets Web App URL */
const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzP_nd2X-KH9Ccwo8MZWTYWhWza3NFpgh8vC4DYIV2I714nBjjmo_Tz7HH4F2eTav_F/exec';

/* =========================================
   ELEMENTS
========================================= */

const userIconBtn = document.getElementById('userIconBtn');

const loginOverlay = document.getElementById('loginOverlay');
const closeLogin =
  document.getElementById('closeLogin') ||
  document.querySelector('.login-close') ||
  document.querySelector('.close-login');
const loginBtn = document.getElementById('loginBtn');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');

const progressOverlay = document.getElementById('progressOverlay');
const closeProgress = document.getElementById('closeProgress');

const logoutBtn = document.getElementById('logoutBtn');

const totalExams = document.getElementById('totalExams');
const totalMarks = document.getElementById('totalMarks');
const averageMarks = document.getElementById('averageMarks');

const progressTableBody = document.getElementById('progressTableBody');

const resultExam = document.getElementById('resultExam');
const resultDate = document.getElementById('resultDate');
const resultScore = document.getElementById('resultScore');
const resultTotal = document.getElementById('resultTotal');

const addResultBtn = document.getElementById('addResultBtn');

/* =========================================
   GET RESULTS FROM GOOGLE SHEETS
========================================= */

async function getResults() {
  try {
    const response = await fetch(GOOGLE_SHEET_URL);

    if (!response.ok) {
      throw new Error('Failed to load results');
    }

    const results = await response.json();

    return Array.isArray(results) ? results : [];
  } catch (error) {
    console.error('Google Sheets error:', error);

    return [];
  }
}

/* =========================================
   SHOW RESULTS
========================================= */

async function renderProgress() {
  progressTableBody.innerHTML = '<tr><td colspan="3">Loading...</td></tr>';

  const results = await getResults();

  progressTableBody.innerHTML = '';

  let obtained = 0;
  let possible = 0;

  results.forEach((result) => {
    obtained += Number(result.score) || 0;

    possible += Number(result.total) || 0;

    const row = document.createElement('tr');

    const exam = document.createElement('td');

    exam.textContent = result.exam || '';

    const date = document.createElement('td');

    date.textContent = result.date || '';

    const score = document.createElement('td');

    score.textContent = `${result.score}/${result.total}`;

    row.appendChild(exam);

    row.appendChild(date);

    row.appendChild(score);

    progressTableBody.appendChild(row);
  });

  totalExams.textContent = results.length;

  totalMarks.textContent = possible;

  const average = possible > 0 ? Math.round((obtained / possible) * 100) : 0;

  averageMarks.textContent = `${average}%`;
}

/* =========================================
   OPEN LOGIN / PROGRESS
========================================= */

userIconBtn.addEventListener('click', () => {
  const loggedIn = sessionStorage.getItem('lamiaLoggedIn') === 'true';

  if (loggedIn) {
    renderProgress();

    progressOverlay.classList.add('show');
  } else {
    loginOverlay.classList.add('show');

    loginUsername.focus();
  }
});

/* =========================================
   CLOSE LOGIN
========================================= */

if (closeLogin) {
  closeLogin.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    loginOverlay.classList.remove('show');
  });
}
/* =========================================
   LOGIN
========================================= */

loginBtn.addEventListener('click', () => {
  const username = loginUsername.value.trim();

  const password = loginPassword.value;

  if (username === USERNAME && password === PASSWORD) {
    sessionStorage.setItem('lamiaLoggedIn', 'true');

    loginError.textContent = '';

    loginOverlay.classList.remove('show');

    renderProgress();

    progressOverlay.classList.add('show');
  } else {
    loginError.textContent = 'Username or password is incorrect.';
  }
});

/* =========================================
   ENTER KEY LOGIN
========================================= */

loginPassword.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    loginBtn.click();
  }
});

/* =========================================
   CLOSE PROGRESS
========================================= */

closeProgress.addEventListener('click', () => {
  progressOverlay.classList.remove('show');
});

/* =========================================
   LOGOUT
========================================= */

logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem('lamiaLoggedIn');

  progressOverlay.classList.remove('show');
});

/* =========================================
   ADD RESULT TO GOOGLE SHEETS
========================================= */

addResultBtn.addEventListener('click', async () => {
  const exam = resultExam.value.trim();

  const date = resultDate.value.trim();

  const score = Number(resultScore.value);

  const total = Number(resultTotal.value);

  /* Validation */

  if (
    !exam ||
    !date ||
    !Number.isFinite(score) ||
    !Number.isFinite(total) ||
    total <= 0 ||
    score < 0 ||
    score > total
  ) {
    return;
  }

  /* Button temporarily disable */

  addResultBtn.disabled = true;

  try {
    /*
        JSON body পাঠানো হচ্ছে।

        Content-Type manually set করছি না,
        যাতে GitHub Pages থেকে CORS preflight
        সমস্যা না হয়।
      */

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',

      body: JSON.stringify({
        exam: exam,

        date: date,

        score: score,

        total: total,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save result');
    }

    /* Clear inputs */

    resultExam.value = '';

    resultDate.value = '';

    resultScore.value = '';

    resultTotal.value = '';

    /* Reload results from Google Sheet */

    await renderProgress();
  } catch (error) {
    console.error('Save result error:', error);

    alert('Result save হয়নি। আবার চেষ্টা করো।');
  } finally {
    addResultBtn.disabled = false;
  }
});
(function () {
  const REDIRECT_URL = 'https://media.tenor.com/oHJdcKei2o0AAAAi/no-no-no.gif';

  let devtoolsOpen = false;

  function checkDevTools() {
    const threshold = 160;

    const widthDiff = window.outerWidth - window.innerWidth;

    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > threshold || heightDiff > threshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;

        window.location.replace(REDIRECT_URL);
      }
    }
  }

  setInterval(checkDevTools, 1000);
})();

document.addEventListener('keydown', function (e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
    return;
  }

  // Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();
    return;
  }

  // Ctrl + Shift + J
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
    e.preventDefault();
    return;
  }

  // Ctrl + U
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
    return;
  }
});
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable DevTools / View Source shortcuts
document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey &&
      e.shiftKey &&
      ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === 'U')
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
});
