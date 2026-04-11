const content = {
  header: {
    eyebrow: "Экстренное сезонное оповещение",
    title: "Пасхальная сводка инцидентов от Voxtek",
    greeting: "Доброе утро, грешники. Сегодня редакция спрятала новости и выдала художественные принадлежности.",
    copy:
      "Вместо сводок и кубиков вам официально разрешено заняться чем-то подозрительно мирным: раскрасить яйцо и кулич.",
  },
  briefing: {
    kicker: "Что вообще происходит?",
    title: "🎨 Пасхальная мастерская открыта",
    lead:
      "Сегодня всё просто: никаких новостных блоков, никаких бросков. Только две заготовки, немного цвета, эмодзи-посыпка и право сохранить результат себе.",
    sections: [
      {
        title: "🥚 Заготовка яйца",
        lines: [
          "Яйцо раскрашивается кистью строго внутри контура.",
          "Если увести палец за край, краска туда не попадёт.",
        ],
      },
      {
        title: "🍞 Заготовка кулича",
        lines: [
          "Кулич тоже можно перекрашивать и засыпать посыпкой.",
          "Подойдут и пастельные оттенки, и откровенно подозрительные сочетания.",
        ],
      },
      {
        title: "💾 Сохранение",
        fullWidth: true,
        lines: [
          "У каждой рисовалки есть отдельная кнопка экспорта в JPG.",
          "Можно очищать холст, выбирать свой цвет и накидывать эмодзи-посыпку сколько угодно.",
        ],
      },
    ],
    noteTitle: "💗 Важно",
    note:
      "Никто не оценит ваши художественные решения. Возможно. Но на всякий случай делайте красиво.",
  },
  studio: {
    kicker: "Творческая эвакуация",
    title: "Сегодня вместо сводок две рисовалки",
    note:
      "Выбирайте цвет, переключайтесь между кистью и посыпкой, а потом скачивайте результат в JPG прямо с телефона.",
    pills: [
      "🥚 Яйцо не выпускает кисть за контур",
      "🍞 Кулич терпит любые оттенки",
      "✨ Посыпка ставится по клику",
      "💾 Обе работы скачиваются в JPG",
    ],
  },
  painters: {
    egg: {
      kicker: "Рисовалка 01",
      title: "Пасхальное яйцо",
      note:
        "Кисть работает только внутри формы. Посыпки здесь нет, зато есть ластик, который возвращает исходную заготовку.",
      clearLabel: "Очистить яйцо",
      downloadLabel: "Скачать яйцо в JPG",
      filename: "paschalnoe-yaitso.jpg",
      shape: "egg",
      allowSprinkles: false,
      allowEraser: true,
      allowText: true,
      baseFill: "#fff6ef",
      accent: "#ffc6df",
      initialColor: "#ffc6df",
      brushSize: 18,
      canvasLabel: "Рисовалка пасхального яйца",
      statusBrush: "Ведите пальцем внутри яйца, чтобы раскрашивать его по контуру.",
      statusEraser: "Ведите пальцем по яйцу, чтобы стереть цвет и вернуть исходную заготовку.",
      statusText: "Введите пожелание и нажмите по открытке, чтобы поставить подпись.",
      statusSprinkle: "Нажмите внутри яйца, чтобы добавить выбранную посыпку.",
    },
    cake: {
      kicker: "Рисовалка 02",
      title: "Пасхальный кулич",
      note:
        "Раскрашивайте кулич, добавляйте глазурную драму и накидывайте эмодзи-посыпку поверх.",
      clearLabel: "Очистить кулич",
      downloadLabel: "Скачать кулич в JPG",
      filename: "paschalnyi-kulich.jpg",
      shape: "cake",
      allowSprinkles: true,
      allowEraser: false,
      allowText: true,
      baseFill: "#f6e2c4",
      accent: "#fff0a8",
      initialColor: "#fff0a8",
      brushSize: 20,
      canvasLabel: "Рисовалка пасхального кулича",
      statusBrush: "Ведите пальцем внутри кулича, чтобы перекрашивать его части.",
      statusText: "Введите пожелание и нажмите по открытке, чтобы добавить текст.",
      statusSprinkle: "Нажмите по куличу, чтобы добавить выбранную посыпку.",
    },
  },
  palette: [
    "#ffc6df",
    "#fff0a8",
    "#c7ecff",
    "#f5f7fb",
    "#ff9ed1",
    "#ffd36e",
    "#77e7ff",
    "#c2ff56",
    "#f6b38c",
    "#cab0ff",
  ],
  sprinkles: ["✨", "🌸", "💖", "⭐", "🍬", "🫧", "🐣", "🧁", "🍓", "💫"],
  footer: {
    message: "Хорошего дня. Это не угроза. Наверное.",
    hotline: "Горячая линия Voxtek: +666 (666) 666",
  },
};

const refs = {
  dateChip: document.getElementById("dateChip"),
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroTitle: document.getElementById("heroTitle"),
  greetingLine: document.getElementById("greetingLine"),
  heroCopy: document.getElementById("heroCopy"),
  briefingKicker: document.getElementById("briefingKicker"),
  briefingTitle: document.getElementById("briefingTitle"),
  briefingLead: document.getElementById("briefingLead"),
  briefingGrid: document.getElementById("briefingGrid"),
  briefingNote: document.getElementById("briefingNote"),
  studioKicker: document.getElementById("studioKicker"),
  studioHeading: document.getElementById("studioHeading"),
  studioNote: document.getElementById("studioNote"),
  studioPills: document.getElementById("studioPills"),
  footerMessage: document.getElementById("footerMessage"),
  footerHotline: document.getElementById("footerHotline"),
};

const painterStates = [];

function formatDate() {
  return new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

function renderStaticContent() {
  document.title = content.header.title;
  refs.dateChip.textContent = formatDate();
  refs.heroEyebrow.textContent = content.header.eyebrow;
  refs.heroTitle.textContent = content.header.title;
  refs.heroTitle.dataset.text = content.header.title;
  refs.greetingLine.textContent = content.header.greeting;
  refs.heroCopy.textContent = content.header.copy;

  refs.briefingKicker.textContent = content.briefing.kicker;
  refs.briefingTitle.textContent = content.briefing.title;
  refs.briefingLead.textContent = content.briefing.lead;
  refs.briefingNote.textContent = `${content.briefing.noteTitle} ${content.briefing.note}`;

  refs.studioKicker.textContent = content.studio.kicker;
  refs.studioHeading.textContent = content.studio.title;
  refs.studioNote.textContent = content.studio.note;

  refs.footerMessage.textContent = content.footer.message;
  refs.footerHotline.textContent = content.footer.hotline;
}

function renderBriefing() {
  refs.briefingGrid.innerHTML = "";

  content.briefing.sections.forEach((section) => {
    const card = document.createElement("article");
    card.className = `briefing-card${section.fullWidth ? " is-full-width" : ""}`;
    card.innerHTML = `
      <h3>${section.title}</h3>
      ${section.lines.map((line) => `<p>${line}</p>`).join("")}
    `;
    refs.briefingGrid.appendChild(card);
  });
}

function renderStudioPills() {
  refs.studioPills.innerHTML = "";

  content.studio.pills.forEach((label) => {
    const pill = document.createElement("span");
    pill.className = "studio-pill";
    pill.textContent = label;
    refs.studioPills.appendChild(pill);
  });
}

function buildEggPath(width, height) {
  const path = new Path2D();
  path.moveTo(width * 0.5, height * 0.12);
  path.bezierCurveTo(width * 0.28, height * 0.08, width * 0.12, height * 0.28, width * 0.14, height * 0.55);
  path.bezierCurveTo(width * 0.16, height * 0.79, width * 0.3, height * 0.92, width * 0.5, height * 0.94);
  path.bezierCurveTo(width * 0.7, height * 0.92, width * 0.84, height * 0.79, width * 0.86, height * 0.55);
  path.bezierCurveTo(width * 0.88, height * 0.28, width * 0.72, height * 0.08, width * 0.5, height * 0.12);
  path.closePath();
  return path;
}

function buildCakePath(width, height) {
  const path = new Path2D();
  path.moveTo(width * 0.24, height * 0.34);
  path.bezierCurveTo(width * 0.23, height * 0.22, width * 0.34, height * 0.15, width * 0.46, height * 0.2);
  path.bezierCurveTo(width * 0.52, height * 0.13, width * 0.62, height * 0.15, width * 0.67, height * 0.23);
  path.bezierCurveTo(width * 0.8, height * 0.18, width * 0.84, height * 0.29, width * 0.8, height * 0.39);
  path.lineTo(width * 0.74, height * 0.87);
  path.lineTo(width * 0.26, height * 0.87);
  path.closePath();
  return path;
}

function buildCakeIcingPath(width, height) {
  const path = new Path2D();
  path.moveTo(width * 0.26, height * 0.34);
  path.bezierCurveTo(width * 0.28, height * 0.2, width * 0.42, height * 0.17, width * 0.48, height * 0.24);
  path.bezierCurveTo(width * 0.54, height * 0.16, width * 0.66, height * 0.18, width * 0.72, height * 0.28);
  path.bezierCurveTo(width * 0.76, height * 0.22, width * 0.83, height * 0.25, width * 0.8, height * 0.38);
  path.bezierCurveTo(width * 0.73, height * 0.43, width * 0.72, height * 0.47, width * 0.7, height * 0.52);
  path.bezierCurveTo(width * 0.67, height * 0.47, width * 0.64, height * 0.43, width * 0.62, height * 0.5);
  path.bezierCurveTo(width * 0.6, height * 0.58, width * 0.53, height * 0.58, width * 0.5, height * 0.49);
  path.bezierCurveTo(width * 0.48, height * 0.42, width * 0.42, height * 0.42, width * 0.4, height * 0.5);
  path.bezierCurveTo(width * 0.37, height * 0.58, width * 0.3, height * 0.55, width * 0.28, height * 0.44);
  path.bezierCurveTo(width * 0.26, height * 0.39, width * 0.24, height * 0.37, width * 0.26, height * 0.34);
  path.closePath();
  return path;
}

function getShapePath(shape, width, height) {
  if (shape === "egg") {
    return buildEggPath(width, height);
  }

  return buildCakePath(width, height);
}

function getNormalizedPoint(event, painter) {
  const rect = painter.canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * painter.width;
  const y = ((event.clientY - rect.top) / rect.height) * painter.height;

  return {
    x,
    y,
    nx: x / painter.width,
    ny: y / painter.height,
  };
}

function isInsideShape(painter, point) {
  const path = getShapePath(painter.config.shape, painter.width, painter.height);
  return painter.ctx.isPointInPath(path, point.x, point.y);
}

function getDefaultStatus(painter) {
  if (painter.mode === "eraser") {
    return painter.config.statusEraser || painter.config.statusBrush;
  }

  if (painter.mode === "text") {
    return painter.config.statusText || painter.config.statusBrush;
  }

  return painter.mode === "brush" ? painter.config.statusBrush : painter.config.statusSprinkle;
}

function setPainterStatus(painter, text) {
  painter.statusNode.textContent = text || getDefaultStatus(painter);
}

function drawStageBackground(ctx, width, height, accent) {
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#10141e");
  gradient.addColorStop(1, "#0b0b0f");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const glow = ctx.createRadialGradient(width * 0.3, height * 0.2, 10, width * 0.3, height * 0.2, width * 0.7);
  glow.addColorStop(0, `${accent}33`);
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);
}

function drawShapeBase(painter, ctx, width, height) {
  const shapePath = getShapePath(painter.config.shape, width, height);

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
  ctx.beginPath();

  if (painter.config.shape === "egg") {
    ctx.ellipse(width * 0.5, height * 0.92, width * 0.2, height * 0.04, 0, 0, Math.PI * 2);
  } else {
    ctx.ellipse(width * 0.5, height * 0.9, width * 0.25, height * 0.05, 0, 0, Math.PI * 2);
  }

  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = painter.config.baseFill;
  ctx.fill(shapePath);

  if (painter.config.shape === "egg") {
    const highlight = ctx.createLinearGradient(width * 0.35, height * 0.12, width * 0.65, height * 0.88);
    highlight.addColorStop(0, "rgba(255,255,255,0.58)");
    highlight.addColorStop(0.45, "rgba(255,255,255,0)");
    highlight.addColorStop(1, "rgba(255,198,223,0.12)");
    ctx.fillStyle = highlight;
    ctx.fill(shapePath);
  } else {
    const icingPath = buildCakeIcingPath(width, height);
    ctx.fillStyle = "#fff7fa";
    ctx.fill(icingPath);
  }

  ctx.restore();
}

function drawStrokeLayer(painter, ctx, width, height) {
  const shapePath = getShapePath(painter.config.shape, width, height);
  const layerCanvas = document.createElement("canvas");
  const layerCtx = layerCanvas.getContext("2d");
  layerCanvas.width = width;
  layerCanvas.height = height;

  layerCtx.save();
  layerCtx.clip(shapePath);

  painter.strokes.forEach((stroke) => {
    if (!stroke.points.length) {
      return;
    }

    layerCtx.beginPath();
    layerCtx.lineCap = "round";
    layerCtx.lineJoin = "round";
    layerCtx.strokeStyle = stroke.color;
    layerCtx.lineWidth = (stroke.size / painter.width) * width;
    layerCtx.globalCompositeOperation = stroke.mode === "eraser" ? "destination-out" : "source-over";

    stroke.points.forEach((point, index) => {
      const px = point.x * width;
      const py = point.y * height;

      if (index === 0) {
        layerCtx.moveTo(px, py);
      } else {
        layerCtx.lineTo(px, py);
      }
    });

    if (stroke.points.length === 1) {
      const dot = stroke.points[0];
      layerCtx.arc(dot.x * width, dot.y * height, layerCtx.lineWidth / 2, 0, Math.PI * 2);
      layerCtx.fillStyle = stroke.color;
      layerCtx.fill();
    } else {
      layerCtx.stroke();
    }
  });

  layerCtx.restore();
  ctx.drawImage(layerCanvas, 0, 0, width, height);

  ctx.save();
  ctx.clip(shapePath);

  const fontSize = painter.config.shape === "egg" ? Math.round(width * 0.09) : Math.round(width * 0.08);

  painter.sprinkles.forEach((sprinkle) => {
    ctx.save();
    ctx.translate(sprinkle.x * width, sprinkle.y * height);
    ctx.rotate(sprinkle.rotation);
    ctx.font = `${Math.round(fontSize * sprinkle.scale)}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(sprinkle.emoji, 0, 0);
    ctx.restore();
  });

  ctx.restore();
}

function drawShapeOutline(painter, ctx, width, height) {
  const shapePath = getShapePath(painter.config.shape, width, height);

  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
  ctx.lineWidth = Math.max(4, width * 0.012);
  ctx.stroke(shapePath);

  ctx.strokeStyle = "rgba(53, 242, 255, 0.28)";
  ctx.lineWidth = Math.max(2, width * 0.006);
  ctx.stroke(shapePath);

  if (painter.config.shape === "cake") {
    const icingPath = buildCakeIcingPath(width, height);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
    ctx.lineWidth = Math.max(3, width * 0.009);
    ctx.stroke(icingPath);
  }

  ctx.restore();
}

function wrapTextLines(ctx, text, maxWidth) {
  const lines = [];
  const rawLines = text.split("\n");

  rawLines.forEach((rawLine) => {
    const words = rawLine.split(/\s+/).filter(Boolean);

    if (!words.length) {
      lines.push("");
      return;
    }

    let currentLine = words[0];

    for (let i = 1; i < words.length; i += 1) {
      const testLine = `${currentLine} ${words[i]}`;

      if (ctx.measureText(testLine).width <= maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }

    lines.push(currentLine);
  });

  return lines;
}

function drawTextLayer(painter, ctx, width, height) {
  painter.textItems.forEach((item) => {
    const fontSize = Math.round(width * item.sizeScale);
    const maxWidth = width * 0.7;
    const x = item.x * width;
    const y = item.y * height;

    ctx.save();
    ctx.font = `700 ${fontSize}px ${getComputedStyle(document.documentElement).getPropertyValue("--font-body").trim() || "Inter, sans-serif"}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
    ctx.lineWidth = Math.max(4, fontSize * 0.18);
    ctx.fillStyle = item.color;
    ctx.shadowColor = "rgba(0, 0, 0, 0.28)";
    ctx.shadowBlur = fontSize * 0.25;
    ctx.shadowOffsetY = 2;

    const lines = wrapTextLines(ctx, item.text, maxWidth);
    const lineHeight = fontSize * 1.15;
    const blockHeight = lines.length * lineHeight;
    let currentY = y - blockHeight / 2;

    lines.forEach((line) => {
      ctx.strokeText(line, x, currentY, maxWidth);
      ctx.fillText(line, x, currentY, maxWidth);
      currentY += lineHeight;
    });

    ctx.restore();
  });
}

function renderPainter(painter, targetCtx = painter.ctx, width = painter.width, height = painter.height) {
  drawStageBackground(targetCtx, width, height, painter.config.accent);
  drawShapeBase(painter, targetCtx, width, height);
  drawStrokeLayer(painter, targetCtx, width, height);
  drawShapeOutline(painter, targetCtx, width, height);
  drawTextLayer(painter, targetCtx, width, height);
}

function triggerFileDownload(dataUrl, fileName) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function syncColorPalette(painter) {
  painter.colorButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.color === painter.currentColor);
  });

  painter.colorInput.value = painter.currentColor;
}

function syncSprinklePalette(painter) {
  painter.emojiButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.emoji === painter.currentEmoji);
  });
}

function syncModeButtons(painter) {
  painter.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === painter.mode);
  });

  painter.stage.classList.toggle("is-sprinkle-mode", painter.mode === "sprinkle");
}

function createStroke(painter, point) {
  const stroke = {
    color: painter.currentColor,
    mode: painter.mode,
    size: painter.config.brushSize,
    points: [{ x: point.nx, y: point.ny }],
  };

  painter.strokes.push(stroke);
  painter.activeStroke = stroke;
}

function startBrush(painter, point) {
  if (!isInsideShape(painter, point)) {
    painter.activeStroke = null;
    return;
  }

  createStroke(painter, point);
  renderPainter(painter);
}

function continueBrush(painter, point) {
  if (!isInsideShape(painter, point)) {
    painter.activeStroke = null;
    return;
  }

  if (!painter.activeStroke) {
    createStroke(painter, point);
  } else {
    painter.activeStroke.points.push({ x: point.nx, y: point.ny });
  }

  renderPainter(painter);
}

function placeSprinkle(painter, point) {
  if (!isInsideShape(painter, point)) {
    return;
  }

  painter.sprinkles.push({
    x: point.nx,
    y: point.ny,
    emoji: painter.currentEmoji,
    rotation: (Math.random() - 0.5) * 0.8,
    scale: 0.9 + Math.random() * 0.3,
  });

  renderPainter(painter);
}

function placeText(painter, point) {
  const text = painter.textInput.value.trim();

  if (!text) {
    setPainterStatus(painter, "Сначала введите пожелание в поле ниже.");
    return;
  }

  painter.textItems.push({
    x: point.nx,
    y: point.ny,
    text,
    color: painter.currentColor,
    sizeScale: 0.055,
  });

  renderPainter(painter);
  setPainterStatus(painter, "Подпись добавлена на открытку.");
}

function downloadPainterAsJpg(painter) {
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = painter.width * 3;
  exportCanvas.height = painter.height * 3;
  const exportCtx = exportCanvas.getContext("2d");

  renderPainter(painter, exportCtx, exportCanvas.width, exportCanvas.height);

  const dataUrl = exportCanvas.toDataURL("image/jpeg", 0.94);
  triggerFileDownload(dataUrl, painter.config.filename);
  setPainterStatus(painter, `Файл сохранён: ${painter.config.filename}`);
}

function clearPainter(painter) {
  painter.strokes = [];
  painter.sprinkles = [];
  painter.textItems = [];
  painter.activeStroke = null;
  renderPainter(painter);
  setPainterStatus(painter, "Холст очищен. Можно начинать заново.");
}

function bindPainterControls(painter) {
  painter.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.mode === "sprinkle" && !painter.config.allowSprinkles) {
        return;
      }

      if (button.dataset.mode === "eraser" && !painter.config.allowEraser) {
        return;
      }

      if (button.dataset.mode === "text" && !painter.config.allowText) {
        return;
      }

      painter.mode = button.dataset.mode;
      syncModeButtons(painter);
      setPainterStatus(painter);
    });
  });

  painter.colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      painter.currentColor = button.dataset.color;
      syncColorPalette(painter);
      setPainterStatus(painter);
    });
  });

  painter.colorInput.addEventListener("input", (event) => {
    painter.currentColor = event.target.value;
    syncColorPalette(painter);
    setPainterStatus(painter);
  });

  painter.emojiButtons.forEach((button) => {
    button.addEventListener("click", () => {
      painter.currentEmoji = button.dataset.emoji;
      syncSprinklePalette(painter);
      setPainterStatus(painter);
    });
  });

  painter.clearButton.addEventListener("click", () => clearPainter(painter));
  painter.downloadButton.addEventListener("click", () => downloadPainterAsJpg(painter));

  painter.canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    const point = getNormalizedPoint(event, painter);
    painter.isDrawing = painter.mode === "brush" || painter.mode === "eraser";

    if (painter.mode === "brush" || painter.mode === "eraser") {
      startBrush(painter, point);
    } else if (painter.mode === "text") {
      placeText(painter, point);
    } else if (painter.config.allowSprinkles) {
      placeSprinkle(painter, point);
    } else {
      startBrush(painter, point);
    }

    painter.canvas.setPointerCapture(event.pointerId);
  });

  painter.canvas.addEventListener("pointermove", (event) => {
    if (!painter.isDrawing || (painter.mode !== "brush" && painter.mode !== "eraser")) {
      return;
    }

    event.preventDefault();
    continueBrush(painter, getNormalizedPoint(event, painter));
  });

  const endDrawing = () => {
    painter.isDrawing = false;
    painter.activeStroke = null;
  };

  painter.canvas.addEventListener("pointerup", endDrawing);
  painter.canvas.addEventListener("pointercancel", endDrawing);
  painter.canvas.addEventListener("pointerleave", endDrawing);
}

function renderPalette(container, painter) {
  container.innerHTML = "";

  content.palette.forEach((color) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "palette-swatch";
    button.dataset.color = color;
    button.style.setProperty("--swatch", color);
    button.setAttribute("aria-label", `Выбрать цвет ${color}`);
    container.appendChild(button);
  });

  painter.colorButtons = Array.from(container.querySelectorAll(".palette-swatch"));
}

function renderSprinkles(container, painter) {
  container.innerHTML = "";

  content.sprinkles.forEach((emoji) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "emoji-swatch";
    button.dataset.emoji = emoji;
    button.textContent = emoji;
    button.setAttribute("aria-label", `Выбрать посыпку ${emoji}`);
    container.appendChild(button);
  });

  painter.emojiButtons = Array.from(container.querySelectorAll(".emoji-swatch"));
}

function setupPainters() {
  const sections = document.querySelectorAll(".painter-panel");

  sections.forEach((section) => {
    const painterId = section.dataset.painter;
    const config = content.painters[painterId];
    const canvas = section.querySelector('[data-role="canvas"]');
    const ctx = canvas.getContext("2d");
    const modeControls = section.querySelector('[data-role="mode-controls"]');
    const colorPalette = section.querySelector('[data-role="color-palette"]');
    const emojiPalette = section.querySelector('[data-role="emoji-palette"]');
    const colorInput = section.querySelector('[data-role="color-input"]');
    const textInput = section.querySelector('[data-role="text-input"]');
    const modeGroup = modeControls.closest(".tool-group");
    const sprinkleGroup = emojiPalette.closest(".tool-group");
    const sprinkleModeButton = modeControls.querySelector('[data-mode="sprinkle"]');
    const eraserModeButton = modeControls.querySelector('[data-mode="eraser"]');
    const textModeButton = modeControls.querySelector('[data-mode="text"]');

    const painter = {
      id: painterId,
      config,
      section,
      stage: section.querySelector(".painter-stage"),
      canvas,
      ctx,
      width: canvas.width,
      height: canvas.height,
      modeButtons: Array.from(modeControls.querySelectorAll(".mode-button")),
      colorButtons: [],
      emojiButtons: [],
      colorInput,
      textInput,
      clearButton: section.querySelector('[data-action="clear"]'),
      downloadButton: section.querySelector('[data-action="download"]'),
      statusNode: section.querySelector('[data-role="status"]'),
      currentColor: config.initialColor,
      currentEmoji: content.sprinkles[0],
      mode: "brush",
      strokes: [],
      sprinkles: [],
      textItems: [],
      activeStroke: null,
      isDrawing: false,
    };

    section.querySelector('[data-role="kicker"]').textContent = config.kicker;
    section.querySelector('[data-role="title"]').textContent = config.title;
    section.querySelector('[data-role="note"]').textContent = config.note;
    painter.clearButton.textContent = config.clearLabel;
    painter.downloadButton.textContent = config.downloadLabel;
    canvas.setAttribute("aria-label", config.canvasLabel);

    renderPalette(colorPalette, painter);

    if (!config.allowEraser && eraserModeButton) {
      eraserModeButton.remove();
      painter.modeButtons = painter.modeButtons.filter((button) => button.dataset.mode !== "eraser");
    }

    if (!config.allowText && textModeButton) {
      textModeButton.remove();
      painter.modeButtons = painter.modeButtons.filter((button) => button.dataset.mode !== "text");
      textInput.closest(".tool-group").hidden = true;
    }

    if (config.allowSprinkles) {
      renderSprinkles(emojiPalette, painter);
    } else {
      painter.mode = "brush";
      if (sprinkleModeButton) {
        sprinkleModeButton.remove();
      }
      sprinkleGroup.hidden = true;
      painter.modeButtons = painter.modeButtons.filter((button) => button.dataset.mode !== "sprinkle");

      if (painter.modeButtons.length <= 1) {
        modeGroup.hidden = true;
      }
    }

    syncColorPalette(painter);
    if (config.allowSprinkles) {
      syncSprinklePalette(painter);
    }
    syncModeButtons(painter);
    setPainterStatus(painter);
    bindPainterControls(painter);
    renderPainter(painter);

    painterStates.push(painter);
  });
}

function init() {
  renderStaticContent();
  renderBriefing();
  renderStudioPills();
  setupPainters();
}

init();
