const content = {
  header: {
    eyebrow: "Экстренное сезонное оповещение",
    title: "Пасхальная сводка инцидентов от Voxtek",
    greeting: "Доброе утро, грешники! Руководство на этой неделе объявило доброту обязательной.",
    copy:
      "Подозрительно пастельная сводка для злодеев, чудовищ и прочих (не)богоугодных созданий.",
  },
  briefing: {
    kicker: "Что вообще происходит?",
    title: "🐰 Пасхальная неделя уже началась",
    lead:
      "Добро пожаловать в самую странную неделю в вашей (не)жизни. Да, это ивент. Он длится ровно 7 дней.",
    sections: [
      {
        title: "📅 Лор события",
        lines: [
          "Каждый день на сайте будут появляться новые события.",
          "Милые. Добродетельные. Очаровательные.",
          "И, что хуже всего, вам придётся в них участвовать.",
        ],
      },
      {
        title: "🎲 Как это работает?",
        lines: [
          "Кидаете кубик через Кая в беседе.",
          "Смотрите результат.",
          "Живёте с последствиями.",
          "Никаких отмен. Никаких переговоров. Примите. Это уже произошло.",
        ],
      },
      {
        title: "🥚 Система событий",
        fullWidth: true,
        lines: [
          "Поскольку вашего покорного ведущего хлебом не корми - дай распаковать адвент-календарь, каждый день будет открываться новый блок, только вместо шоколада вас ждут моральные испытания.",
          "Следите за обновлениями. Вы не захотите пропустить, что с вами сделают завтра.",
        ],
      },
    ],
    noteTitle: "💗 Важно",
    note:
      "Все события направлены на... улучшение вас. Сопротивление допустимо. Впрочем, еще и бесполезно. Можете никак не взаимодейстовать с этими испытаниями, но мы не гарантируем, что это не повлияет на вас.",
  },
  calendar: {
    kicker: "Пасхальный адвент",
    title: "Сегодня открыт второй набор",
    copy:
      "Нажмите на доступную капсулу, чтобы раскрыть сегодняшний сюрприз.",
    dropdownLabel: "Содержимое набора 02",
    slots: [
      {
        id: "set-01",
        label: "Набор 01",
        meta: "Запечатано",
        state: "locked",
      },
      {
        id: "set-02",
        label: "Набор 02",
        meta: "Вторник • открыть",
        state: "open",
      },
      {
        id: "set-03",
        label: "Набор 03",
        meta: "Запечатано",
        state: "locked",
      },
      {
        id: "set-04",
        label: "Набор 04",
        meta: "Запечатано",
        state: "locked",
      },
      {
        id: "set-05",
        label: "Набор 05",
        meta: "Запечатано",
        state: "locked",
      },
      {
        id: "set-06",
        label: "Набор 06",
        meta: "Запечатано",
        state: "locked",
      },
      {
        id: "set-07",
        label: "Набор 07",
        meta: "Запечатано",
        state: "locked",
      },
      {
        id: "set-08",
        label: "Набор 08",
        meta: "Запечатано",
        state: "locked",
      },
    ],
    days: {
      "set-02": {
        type: "download",
        dropdownLabel: "Содержимое набора 02",
        title: "Скачайте одно пасхальное изображение",
        copy:
          "Нажмите на кнопку ниже, и сайт случайным образом выдаст одну из картинок из сегодняшнего набора. Файл скачается в оригинальном JPG без сжатия.",
        buttonLabel: "Скачать случайную картинку",
        successPrefix: "Скачивание запущено:",
        images: [
          "images/IMG_9435.JPG",
          "images/IMG_9436.JPG",
          "images/IMG_9437.JPG",
          "images/IMG_9438.JPG",
          "images/IMG_9439.JPG",
          "images/IMG_9440.JPG",
          "images/IMG_9441.JPG",
          "images/IMG_9444.JPG",
          "images/IMG_9445.JPG",
          "images/IMG_9447.JPG",
          "images/IMG_9448.JPG",
          "images/IMG_9449.JPG",
          "images/IMG_9450.JPG",
          "images/IMG_9451.JPG",
        ],
      },
    },
  },
  sections: {
    newsKicker: "Лента дня",
    newsTitle: "Новости недели",
    newsNote:
      "Эти новости не рандомные: всё связано с происходящими событиями, и с ними можно и нужно взаимодействовать.",
    diceKicker: "Проверка результатов",
    diceTitle: "Результат броска",
  },
  news: [
    {
      icon: "🐇",
      title: "В городе зафиксированы случаи \"необъяснимой продуктивности\"",
      text: [
        "Жители сообщают, что внезапно начали доводить дела до конца: разбирать почту, отвечать на сообщения и даже выполнять отложенные задачи.",
        "Эффект длится от 10 до 40 минут, после чего сменяется лёгким недоумением.",
        "Специалисты советуют использовать состояние максимально эффективно, пока оно не прошло.",
      ],
    },
    {
      icon: "🥚",
      title: "Часть праздничных объектов начала менять поведение",
      text: [
        "Ранее обнаруженные яйца теперь ведут себя менее стабильно: некоторые перемещаются, если на них не смотреть, другие издают тихие звуки. У большинства проблемы с коллизией, так что если вы наступите на них, вас, скорее всего, откинет в соседний квартал.",
        "Зафиксированы случаи, когда объекты оказывались в местах, где их точно не оставляли.",
        "Рекомендуется не оставлять их без присмотра.",
      ],
    },
    {
      icon: "🏨",
      title: "В отеле Hazbin стартовали мероприятия на знакомство и сплочение",
      text: [
        "Сегодня в отеле Hazbin проходят увеселительные активности для всех желающих наладить контакт с окружающей действительностью и друг с другом, если у вас вообще есть друзья. Гостям предлагают принять участие в форматах «случайного знакомства», «анкет для друзьяшек» и рандомных бинго.",
        "Организаторы отмечают, что именно с этими мероприятиями синхронизирован новый день адвент-программы.",
        "Рекомендуется заглянуть, даже если вы не планировали участвовать. ОСОБЕННО если не планировали.",
      ],
    },
  ],
  dice: {
    label: "Выберите бросок:",
    helper: "Укажите любое значение от 1 до 20, чтобы увидеть ровно один исход события.",
    quickPicks: [1, 5, 10, 15, 20],
    ranges: [
      {
        min: 1,
        max: 5,
        badge: "Диапазон 1-5",
        icon: "🐰",
        title: "Пороговое беспокойство",
        text:
          "Вы не хотите сегодня появляться в Отеле. Возникает ощущение, что если вы перешагнёте порог, у вас вырастут заячьи ушки, и с этим чувством ОЧЕНЬ трудно бороться. Чем ближе результат к 5, тем выше вероятность, что ваши страхи оправданы.",
      },
      {
        min: 6,
        max: 10,
        badge: "Диапазон 6-10",
        icon: "🥚",
        title: "Нежелательное сближение",
        text:
          "Вам срочно необходимо заполнить анкету для друзей со своим злейшим врагом. Да, именно с ним. Анкету можно выбрать любую или попросить у Вокса. Уклониться не получится.",
      },
      {
        min: 11,
        max: 15,
        badge: "Диапазон 11-15",
        icon: "🧸",
        title: "Странная одержимость",
        text:
          "Вас укусил пингвин. С этого момента вы одержимы поиском на Pinterest красивых камушков и обязаны показывать их всем окружающим до конца дня.",
      },
      {
        min: 16,
        max: 20,
        badge: "Диапазон 16-20",
        icon: "🍞",
        title: "Подозрительное спокойствие",
        text:
          "Вам повезло: Чарли не окружила вас своей аурой дружбомагии. Можно побездельничать или заняться чем-то безопасным — например, заполнить бинго и другие активности из блока адвента.",
      },
    ],
  },
  footer: {
    message: "Хорошего дня. Это не угроза. Наверное.",
    hotline: "Горячая линия Voxtek: +666 (666) 666",
  },
};

const dateChip = document.getElementById("dateChip");
const heroEyebrow = document.getElementById("heroEyebrow");
const heroTitle = document.getElementById("heroTitle");
const greetingLine = document.getElementById("greetingLine");
const heroCopy = document.getElementById("heroCopy");
const briefingKicker = document.getElementById("briefingKicker");
const briefingTitle = document.getElementById("briefingTitle");
const briefingLead = document.getElementById("briefingLead");
const briefingGrid = document.getElementById("briefingGrid");
const briefingNote = document.getElementById("briefingNote");
const newsKicker = document.getElementById("newsKicker");
const newsHeading = document.getElementById("newsHeading");
const newsNote = document.getElementById("newsNote");
const diceKicker = document.getElementById("diceKicker");
const diceHeading = document.getElementById("diceHeading");
const diceLabel = document.getElementById("diceLabel");
const diceLabelText = document.getElementById("diceLabelText");
const diceHelper = document.getElementById("diceHelper");
const newsFeed = document.getElementById("newsFeed");
const diceRange = document.getElementById("diceRange");
const diceValue = document.getElementById("diceValue");
const diceQuickPicks = document.getElementById("diceQuickPicks");
const diceResult = document.getElementById("diceResult");
const calendarKicker = document.getElementById("calendarKicker");
const calendarHeading = document.getElementById("calendarHeading");
const calendarCopy = document.getElementById("calendarCopy");
const calendarGrid = document.getElementById("calendarGrid");
const calendarDropdown = document.getElementById("calendarDropdown");
const calendarDropdownLabel = document.getElementById("calendarDropdownLabel");
const calendarContent = document.getElementById("calendarContent");
const footerMessage = document.getElementById("footerMessage");
const footerHotline = document.getElementById("footerHotline");
let calendarOpenButton = null;
let calendarOpenSlotId = null;

function formatDate() {
  const now = new Date();
  return new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(now);
}

function getOutcome(value) {
  return content.dice.ranges.find((range) => value >= range.min && value <= range.max);
}

function getRangeValue(range) {
  return Math.ceil((range.min + range.max) / 2);
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function triggerFileDownload(filePath, fileName) {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function renderHeader() {
  document.title = content.header.title;
  dateChip.textContent = formatDate();
  heroEyebrow.textContent = content.header.eyebrow;
  heroTitle.textContent = content.header.title;
  heroTitle.dataset.text = content.header.title;
  greetingLine.textContent = content.header.greeting;
  heroCopy.textContent = content.header.copy;
  briefingKicker.textContent = content.briefing.kicker;
  briefingTitle.textContent = content.briefing.title;
  briefingLead.textContent = content.briefing.lead;
  briefingNote.textContent = `${content.briefing.noteTitle} ${content.briefing.note}`;
  newsKicker.textContent = content.sections.newsKicker;
  newsHeading.textContent = content.sections.newsTitle;
  newsNote.textContent = content.sections.newsNote;
  diceKicker.textContent = content.sections.diceKicker;
  diceHeading.textContent = content.sections.diceTitle;
  diceLabel.setAttribute("aria-label", content.dice.label);
  diceLabelText.textContent = content.dice.label;
  diceHelper.textContent = content.dice.helper;
  calendarKicker.textContent = content.calendar.kicker;
  calendarHeading.textContent = content.calendar.title;
  calendarCopy.textContent = content.calendar.copy;
  calendarDropdownLabel.textContent = content.calendar.dropdownLabel;
  footerMessage.textContent = content.footer.message;
  footerHotline.textContent = content.footer.hotline;
}

function renderBriefing() {
  briefingGrid.innerHTML = "";

  content.briefing.sections.forEach((section) => {
    const card = document.createElement("article");
    card.className = `briefing-card${section.fullWidth ? " is-full-width" : ""}`;
    card.innerHTML = `
      <h3>${section.title}</h3>
      ${section.lines.map((line) => `<p>${line}</p>`).join("")}
    `;
    briefingGrid.appendChild(card);
  });
}

function renderNews() {
  newsFeed.innerHTML = "";

  content.news.forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.innerHTML = `
      <div class="news-icon" aria-hidden="true">${item.icon}</div>
      <div class="news-body">
        <h3>${item.title}</h3>
        ${item.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    `;
    newsFeed.appendChild(card);
  });
}

function renderQuickPicks() {
  diceQuickPicks.innerHTML = "";

  content.dice.quickPicks.forEach((value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-pick";
    button.textContent = value;
    button.addEventListener("click", () => {
      diceRange.value = value;
      updateDiceResult(value);
    });
    diceQuickPicks.appendChild(button);
  });
}

function setCalendarDropdownState(isOpen) {
  calendarDropdown.classList.toggle("is-open", isOpen);

  if (calendarOpenButton) {
    calendarOpenButton.classList.toggle("is-expanded", isOpen);
    calendarOpenButton.setAttribute("aria-expanded", String(isOpen));
  }
}

function syncCalendarSelection(value) {
  if (!calendarContent.querySelector(".calendar-event")) {
    return;
  }

  const numericValue = Number(value);
  const activeIndex = content.dice.ranges.findIndex(
    (range) => numericValue >= range.min && numericValue <= range.max,
  );

  calendarContent.querySelectorAll(".calendar-event").forEach((button) => {
    button.classList.toggle("is-selected", Number(button.dataset.rangeIndex) === activeIndex);
  });
}

async function downloadRandomImage(imageList, statusNode, successPrefix) {
  if (!imageList.length) {
    statusNode.textContent = "Изображения для скачивания пока не добавлены.";
    return;
  }

  const imagePath = getRandomItem(imageList);
  const fileName = imagePath.split("/").pop();

  statusNode.textContent = "Готовим файл...";

  try {
    const response = await fetch(imagePath);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerFileDownload(objectUrl, fileName);
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    statusNode.textContent = `${successPrefix} ${fileName}`;
  } catch (error) {
    try {
      triggerFileDownload(imagePath, fileName);
      statusNode.textContent = `${successPrefix} ${fileName}`;
    } catch (fallbackError) {
      statusNode.textContent = "Не удалось скачать картинку. Попробуйте ещё раз.";
    }
  }
}

function renderCalendarEvents() {
  calendarContent.innerHTML = "";

  content.dice.ranges.forEach((range, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-event";
    button.dataset.rangeIndex = index;
    button.innerHTML = `
      <span class="calendar-event-range">${range.badge}</span>
      <span class="calendar-event-title">${range.title}</span>
      <span class="calendar-event-copy">${range.text}</span>
    `;
    button.addEventListener("click", () => {
      const value = getRangeValue(range);
      diceRange.value = value;
      updateDiceResult(value);
    });
    calendarContent.appendChild(button);
  });
}

function renderCalendarDownload(dayContent) {
  calendarContent.innerHTML = "";

  const card = document.createElement("article");
  card.className = "calendar-action";
  card.innerHTML = `
    <h3 class="calendar-action-title">${dayContent.title}</h3>
    <p class="calendar-action-copy">${dayContent.copy}</p>
    <button class="calendar-action-button" type="button">${dayContent.buttonLabel}</button>
    <p class="calendar-action-status" aria-live="polite"></p>
  `;

  const actionButton = card.querySelector(".calendar-action-button");
  const statusNode = card.querySelector(".calendar-action-status");

  actionButton.addEventListener("click", async () => {
    actionButton.disabled = true;
    await downloadRandomImage(dayContent.images, statusNode, dayContent.successPrefix);
    actionButton.disabled = false;
  });

  calendarContent.appendChild(card);
}

function renderCalendarContent(slotId) {
  const dayContent = content.calendar.days[slotId];

  if (!dayContent) {
    renderCalendarEvents();
    calendarDropdownLabel.textContent = content.calendar.dropdownLabel;
    syncCalendarSelection(diceRange.value);
    return;
  }

  calendarDropdownLabel.textContent = dayContent.dropdownLabel || content.calendar.dropdownLabel;

  if (dayContent.type === "download") {
    renderCalendarDownload(dayContent);
    return;
  }

  renderCalendarEvents();
  syncCalendarSelection(diceRange.value);
}

function renderCalendar() {
  calendarGrid.innerHTML = "";
  calendarContent.innerHTML = "";
  calendarOpenButton = null;
  calendarOpenSlotId = null;

  content.calendar.slots.forEach((slot) => {
    if (slot.state === "open") {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "calendar-tile calendar-tile--open";
      button.setAttribute("aria-controls", "calendarDropdown");
      button.setAttribute("aria-expanded", "false");
      button.innerHTML = `
        <strong>${slot.label}</strong>
        <span>${slot.meta}</span>
      `;
      button.addEventListener("click", () => {
        const isOpen = !calendarDropdown.classList.contains("is-open");
        setCalendarDropdownState(isOpen);
      });
      calendarOpenButton = button;
      calendarOpenSlotId = slot.id;
      calendarGrid.appendChild(button);
      return;
    }

    const tile = document.createElement("div");
    tile.className = "calendar-tile calendar-tile--locked";
    tile.setAttribute("aria-hidden", "true");
    tile.innerHTML = `
      <strong>${slot.label}</strong>
      <span>🔒 ${slot.meta}</span>
    `;
    calendarGrid.appendChild(tile);
  });

  renderCalendarContent(calendarOpenSlotId);
}

function syncQuickPicks(value) {
  const quickButtons = diceQuickPicks.querySelectorAll(".quick-pick");
  quickButtons.forEach((button) => {
    button.classList.toggle("is-active", Number(button.textContent) === value);
  });
}

function updateDiceResult(value) {
  const numericValue = Number(value);
  const outcome = getOutcome(numericValue);

  diceValue.textContent = numericValue;
  syncQuickPicks(numericValue);
  syncCalendarSelection(numericValue);

  if (!outcome) {
    diceResult.innerHTML = "";
    return;
  }

  diceResult.classList.remove("is-animating");
  void diceResult.offsetWidth;
  diceResult.classList.add("is-animating");

  diceResult.innerHTML = `
    <div class="dice-result-top">
      <span class="dice-badge">${outcome.badge}</span>
      <span aria-hidden="true">${outcome.icon}</span>
    </div>
    <h3>${outcome.title}</h3>
    <p>${outcome.text}</p>
  `;
}

function bindEvents() {
  diceRange.addEventListener("input", (event) => {
    updateDiceResult(event.target.value);
  });
}

function init() {
  renderHeader();
  renderBriefing();
  renderNews();
  renderQuickPicks();
  renderCalendar();
  bindEvents();
  updateDiceResult(diceRange.value);
}

init();
