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
    let content = item.replace(/^প্রশ্ন\s*\d+\s*[.:]\s*/i, '');

    const optionPattern =
      /\s*\(ক\)\s*([\s\S]*?)\s*\(খ\)\s*([\s\S]*?)\s*\(গ\)\s*([\s\S]*?)\s*\(ঘ\)\s*([\s\S]*)$/;

    const match = content.match(optionPattern);

    if (!match) {
      return {
        question: content,
        options: [],
      };
    }

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

if (questionCount) {
  questionCount.textContent = questions.length;
}

/* Store selected answer for every question */

const selectedAnswers = new Array(questions.length).fill(null);

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

  item.options.forEach((optionText, optionIndex) => {
    const option = document.createElement('div');

    option.className = 'option';

    option.textContent = optionText;

    option.setAttribute('role', 'button');

    option.setAttribute('tabindex', '0');

    const selectOption = () => {
      selectedAnswers[index] = optionIndex;

      options.querySelectorAll('.option').forEach((el) => {
        el.classList.remove('selected');
      });

      option.classList.add('selected');
    };

    option.addEventListener('click', selectOption);

    option.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();

        selectOption();
      }
    });

    options.appendChild(option);
  });

  /* Add everything */

  card.appendChild(number);

  card.appendChild(question);

  card.appendChild(options);

  container.appendChild(card);
});

/* =====================================================
   EXAM ANSWER SUBMIT
===================================================== */

const submitExamBtn = document.getElementById('submitExamBtn');

const answerResult = document.getElementById('answerResult');

const answerList = document.getElementById('answerList');

const answeredCount = document.getElementById('answeredCount');

function renderAnswerSheet() {
  if (!answerList || !answeredCount || !answerResult) {
    return;
  }

  answerList.innerHTML = '';

  let answered = 0;

  questions.forEach((item, index) => {
    const answerItem = document.createElement('div');

    answerItem.className = 'answer-item';

    const number = document.createElement('span');

    number.className = 'answer-number';

    number.textContent = `${index + 1}.`;

    const value = document.createElement('span');

    value.className = 'answer-value';

    if (
      selectedAnswers[index] !== null &&
      item.options[selectedAnswers[index]]
    ) {
      const optionText = item.options[selectedAnswers[index]];

      const optionLetter = optionText.substring(0, 1);

      value.textContent = optionLetter;

      answered++;
    } else {
      answerItem.classList.add('unanswered');

      value.textContent = '—';
    }

    answerItem.appendChild(number);

    answerItem.appendChild(value);

    answerList.appendChild(answerItem);
  });

  answeredCount.textContent = `${answered} / ${questions.length}`;

  answerResult.classList.add('show');

  answerResult.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

if (submitExamBtn) {
  submitExamBtn.addEventListener('click', () => {
    renderAnswerSheet();
  });
}

/* =====================================================
   COUNTDOWN TIMER
===================================================== */

const EXAM_DURATION = 60 * 60; // 60 minutes

const TIMER_STORAGE_KEY = 'lamiaExamEndTime';

let totalSeconds = EXAM_DURATION;

const minutesElement = document.getElementById('minutes');

const secondsElement = document.getElementById('seconds');

const countdown = document.querySelector('.countdown');

const timeUpOverlay = document.getElementById('timeUpOverlay');

const closeTimeUp = document.getElementById('closeTimeUp');

let timer = null;

/* 15 second repeat alert */

let timeUpRepeatTimer = null;

let timeUpAlertStarted = false;

/* =====================================================
   GET REMAINING TIME
===================================================== */

function getRemainingSeconds() {
  const savedEndTime = Number(localStorage.getItem(TIMER_STORAGE_KEY));

  if (!Number.isFinite(savedEndTime) || savedEndTime <= 0) {
    return EXAM_DURATION;
  }

  return Math.max(0, Math.ceil((savedEndTime - Date.now()) / 1000));
}

/* =====================================================
   START EXAM TIMER

   Refresh করলে নতুন করে 60 মিনিট শুরু হবে না।
===================================================== */

function startExamTimer() {
  const savedEndTime = Number(localStorage.getItem(TIMER_STORAGE_KEY));

  if (!Number.isFinite(savedEndTime) || savedEndTime <= Date.now()) {
    localStorage.setItem(
      TIMER_STORAGE_KEY,
      String(Date.now() + EXAM_DURATION * 1000),
    );
  }

  totalSeconds = getRemainingSeconds();

  updateCountdown();

  clearInterval(timer);

  timer = setInterval(updateCountdown, 1000);
}

/* =====================================================
   TIMER UPDATE
===================================================== */

function updateCountdown() {
  totalSeconds = getRemainingSeconds();

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  if (minutesElement) {
    minutesElement.textContent = String(minutes).padStart(2, '0');
  }

  if (secondsElement) {
    secondsElement.textContent = String(seconds).padStart(2, '0');
  }

  if (countdown) {
    countdown.classList.remove('warning', 'danger');
  }

  /* 5 মিনিটের নিচে */

  if (countdown && totalSeconds <= 5 * 60 && totalSeconds > 60) {
    countdown.classList.add('warning');
  }

  /* 1 মিনিটের নিচে */

  if (countdown && totalSeconds <= 60 && totalSeconds > 0) {
    countdown.classList.add('danger');
  }

  /* ===================================================
     TIME OVER
  =================================================== */

  if (totalSeconds <= 0) {
    clearInterval(timer);

    if (minutesElement) {
      minutesElement.textContent = '00';
    }

    if (secondsElement) {
      secondsElement.textContent = '00';
    }

    if (countdown) {
      countdown.classList.add('time-ended');
    }

    localStorage.removeItem(TIMER_STORAGE_KEY);

    /*
      Time শেষ হলেও Submit button থাকবে
      এবং কাজ করবে।
    */

    renderAnswerSheet();

    /*
      সাথে সাথে Time Over alert
    */

    if (timeUpOverlay) {
      timeUpOverlay.classList.add('show');
    }

    /*
      প্রতি 15 সেকেন্ড পর আবার alert
    */

    if (!timeUpAlertStarted) {
      timeUpAlertStarted = true;

      clearInterval(timeUpRepeatTimer);

      timeUpRepeatTimer = setInterval(() => {
        if (timeUpOverlay) {
          timeUpOverlay.classList.add('show');
        }
      }, 15000);
    }
  }
}

/* =====================================================
   GOOD LUCK POPUP
===================================================== */

const welcomeOverlay = document.getElementById('welcomeOverlay');

const readyBtn = document.getElementById('readyBtn');

if (readyBtn) {
  readyBtn.addEventListener('click', () => {
    /* Popup বন্ধ */

    if (welcomeOverlay) {
      welcomeOverlay.classList.add('hide');
    }

    /* Countdown শুরু */

    startExamTimer();
  });
}

/* =====================================================
   TIME UP POPUP CLOSE
===================================================== */

if (closeTimeUp) {
  closeTimeUp.addEventListener('click', () => {
    if (timeUpOverlay) {
      timeUpOverlay.classList.remove('show');
    }
  });
}

/* =====================================================
   LAMIA PROGRESS LOGIN
===================================================== */

const USERNAME = 'lamia';

const PASSWORD = 'lamia123';

/* Google Sheets Web App URL */

const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzP_nd2X-KH9Ccwo8MZWTYWhWza3NFpgh8vC4DYIV2I714nBjjmo_Tz7HH4F2eTav_F/exec';

/* =====================================================
   ELEMENTS
===================================================== */

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

/* =====================================================
   GET RESULTS FROM GOOGLE SHEETS
===================================================== */

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

/* =====================================================
   SHOW RESULTS
===================================================== */

async function renderProgress() {
  if (!progressTableBody) {
    return;
  }

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

  if (totalExams) {
    totalExams.textContent = results.length;
  }

  if (totalMarks) {
    totalMarks.textContent = possible;
  }

  const average = possible > 0 ? Math.round((obtained / possible) * 100) : 0;

  if (averageMarks) {
    averageMarks.textContent = `${average}%`;
  }
}

/* =====================================================
   OPEN LOGIN / PROGRESS
===================================================== */

if (userIconBtn) {
  userIconBtn.addEventListener('click', () => {
    const loggedIn = sessionStorage.getItem('lamiaLoggedIn') === 'true';

    if (loggedIn) {
      renderProgress();

      if (progressOverlay) {
        progressOverlay.classList.add('show');
      }
    } else {
      if (loginOverlay) {
        loginOverlay.classList.add('show');
      }

      if (loginUsername) {
        loginUsername.focus();
      }
    }
  });
}

/* =====================================================
   CLOSE LOGIN
===================================================== */

if (closeLogin) {
  closeLogin.addEventListener('click', (event) => {
    event.preventDefault();

    event.stopPropagation();

    if (loginOverlay) {
      loginOverlay.classList.remove('show');
    }
  });
}

/* =====================================================
   LOGIN
===================================================== */

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const username = loginUsername ? loginUsername.value.trim() : '';

    const password = loginPassword ? loginPassword.value : '';

    if (username === USERNAME && password === PASSWORD) {
      sessionStorage.setItem('lamiaLoggedIn', 'true');

      if (loginError) {
        loginError.textContent = '';
      }

      if (loginOverlay) {
        loginOverlay.classList.remove('show');
      }

      renderProgress();

      if (progressOverlay) {
        progressOverlay.classList.add('show');
      }
    } else {
      if (loginError) {
        loginError.textContent = 'Username or password is incorrect.';
      }
    }
  });
}

/* =====================================================
   ENTER KEY LOGIN
===================================================== */

if (loginPassword) {
  loginPassword.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (loginBtn) {
        loginBtn.click();
      }
    }
  });
}

/* =====================================================
   CLOSE PROGRESS
===================================================== */

if (closeProgress) {
  closeProgress.addEventListener('click', () => {
    if (progressOverlay) {
      progressOverlay.classList.remove('show');
    }
  });
}

/* =====================================================
   LOGOUT
===================================================== */

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('lamiaLoggedIn');

    if (progressOverlay) {
      progressOverlay.classList.remove('show');
    }
  });
}

/* =====================================================
   ADD RESULT TO GOOGLE SHEETS
===================================================== */

if (addResultBtn) {
  addResultBtn.addEventListener('click', async () => {
    const exam = resultExam ? resultExam.value.trim() : '';

    const date = resultDate ? resultDate.value.trim() : '';

    const score = resultScore ? Number(resultScore.value) : NaN;

    const total = resultTotal ? Number(resultTotal.value) : NaN;

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

      if (resultExam) {
        resultExam.value = '';
      }

      if (resultDate) {
        resultDate.value = '';
      }

      if (resultScore) {
        resultScore.value = '';
      }

      if (resultTotal) {
        resultTotal.value = '';
      }

      /* Reload results */

      await renderProgress();
    } catch (error) {
      console.error('Save result error:', error);

      alert('Result save হয়নি। আবার চেষ্টা করো।');
    } finally {
      addResultBtn.disabled = false;
    }
  });
}

/* =====================================================
   DEVTOOLS REDIRECT
===================================================== */

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

/* =====================================================
   DISABLE DEVTOOLS SHORTCUTS
===================================================== */

document.addEventListener('keydown', function (e) {
  /* F12 */

  if (e.key === 'F12') {
    e.preventDefault();

    return;
  }

  /* Ctrl + Shift + I */

  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();

    return;
  }

  /* Ctrl + Shift + J */

  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
    e.preventDefault();

    return;
  }

  /* Ctrl + U */

  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();

    return;
  }
});

/* =====================================================
   DISABLE RIGHT CLICK
===================================================== */

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

/* =====================================================
   DISABLE DEVTOOLS / VIEW SOURCE SHORTCUTS
===================================================== */

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
