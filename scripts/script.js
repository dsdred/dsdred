const h1About = document.getElementById("h1-About");
const h2About = document.getElementById("h2-About");
const langBtn = document.getElementById("lang-btn");
const themeBtn = document.getElementById("theme-btn");
const authorDetails = document.getElementById("author-details");
const body = document.body;

// Author data (replace with your actual data)
const russianAuthorData = `
  <p>Привет, я Дмитрий 👋</p>
  <p>Работаю в IT с 2006 года.</p>
  <p>Программирую на языке 1С Предприятие более 12 лет. В свободное время программирую, пишу статьи, изучаю другие языки программирования и провожу различные эксперименты.</p>
  <p>Известен как автор более 40 статей на сайте <a href="https://infostart.ru/profile/295466/">infostart.ru</a>.</p>
  <h4>Лауреат:</h4>
  <ul>
    <li>🏆 Infostart Awards 2018 в номинации «Открытие года».</li>
    <li>🏆 Infostart Awards 2024 в номинации "Лучший автор статьи для разработчиков".</li>
  </ul>

  <h4>Номинация:</h4>
  <ul>
    <li>2022 Номинация за вклад в области "Администрирование СУБД. Оптимизация HighLoad"</li>
    <li>2023 Номинация за вклад в области "Администрирование СУБД. Оптимизация HighLoad"</li>
    <li>2023 Номинация за вклад в области "Интеграция и обмен данными"</li>
  </ul>

  <h3>🔭 Сейчас работаю над подсистемой интеграции с 1С и другими проектами.</h3>
  <h3>🌱 Постоянно узнаю что-то новое.</h3>
  <h3>💬 всегда открыт к диалогу.</h3>

  <h3>⚡ Интересный факт: я уже третий раз переписываю одну опенсорсную подсистему. Я выполнил 80% и понял, что результат мне не понравился, поэтому переписал весь код. Потом я увидел, что код опять не идеальный, поэтому переписал его еще раз. И только с третьего раза я понял, что нужно выложить в том виде, в котором получится, иначе разработка не будет иметь смысла</h3>
`;

const englishAuthorData = `
  <p>Hello, I'm Dmitry 👋</p>
  <p>I have been working in IT since 2006.</p>
  <p>I have been programming in "1C: Enterprise" language for more than 12 years. In my leasure time I prefer programming, writing articles, studying other programm languages and carrying out various experiments.</p>
  <p>I am known as the author of more than 40 articles on the website <a href="https://infostart.ru/profile/295466/">infostart.ru</a>.</p>

  <h4>Winner:</h4>
  <ul>
    <li>🏆 Infostart Awards 2018 prizewinner in "Discovery of the Year".</li>
    <li>🏆 Infostart Awards 2024 prizewinner in "Best author of an article for developer".</li>
  </ul>

  <h4>Nomination:</h4>
  <ul>
    <li>2022 Nomination for contribution in the field of "DBMS Administration. HighLoad optimization"</li>
    <li>2023 Nomination for contribution in the field of "DBMS Administration. HighLoad optimization"</li>
    <li>2023 Nomination for contribution in the field of "Integration and Data Exchange"</li>
  </ul>

  <h3>🔭 Currently I am working on integration subsystem with 1C and other projects.</h3>
  <h3>🌱 I am open-minded and constantly learn something new.</h3>
  <h3>💬 I am always outer-directed and straight to discussion.</h3>

  <h3>⚡ An interesting fact about my work: I am re-coding one open-source subsystem for the third time. I have completed 80% and realized that I didn't like the result, so I rewrote the code. Then I figured out that the result wasn't perfect, so I rewrote it once more. And only the third time gave me realization that I needed to release it just as it was created, otherwise the development would not make sense.</h3>
`;

// Event listeners

langBtn.addEventListener("click", () => {
  const currentLang = langBtn.textContent;

  if (currentLang === "RU") {
    langBtn.textContent = "ENG";
    authorDetails.innerHTML = russianAuthorData;
    h1About.innerHTML = "Дмитрий Сидоренко";
    h2About.innerHTML = "Обо мне";
  } else {
    langBtn.textContent = "RU";
    authorDetails.innerHTML = englishAuthorData;
    h1About.innerHTML = "Dmitrii Sidorenko";
    h2About.innerHTML = "About me";
  }
});

themeBtn.addEventListener("click", () => {
  const currentTheme = themeBtn.textContent;
  console.log("currentTheme=", currentTheme);

  if (currentTheme === "dark") {
    body.classList.remove("dark");
    themeBtn.textContent = "light";
  } else {
    body.classList.add("dark");
    themeBtn.textContent = "dark";
  }
});

// Initial display
authorDetails.innerHTML = russianAuthorData;
