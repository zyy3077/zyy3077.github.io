(function () {
  const canvas = document.getElementById("leo-constellation-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const stars = [
    { id: "regulus", label: "Regulus", x: 0.34, y: 0.67, r: 2.7, mag: 1 },
    { id: "eta", label: "Eta Leo", x: 0.41, y: 0.52, r: 1.8, mag: 0.65 },
    { id: "algieba", label: "Algieba", x: 0.35, y: 0.42, r: 2.2, mag: 0.82 },
    { id: "adhafera", label: "Adhafera", x: 0.35, y: 0.31, r: 1.9, mag: 0.7 },
    { id: "rasalas", label: "Rasalas", x: 0.27, y: 0.25, r: 1.7, mag: 0.62 },
    { id: "alterf", label: "Alterf", x: 0.22, y: 0.41, r: 1.5, mag: 0.52 },
    { id: "algenubi", label: "Algenubi", x: 0.29, y: 0.55, r: 1.5, mag: 0.55 },
    { id: "zosma", label: "Zosma", x: 0.56, y: 0.42, r: 2.0, mag: 0.76 },
    { id: "chertan", label: "Chertan", x: 0.59, y: 0.58, r: 1.9, mag: 0.68 },
    { id: "denebola", label: "Denebola", x: 0.78, y: 0.48, r: 2.5, mag: 0.92 }
  ];

  const links = [
    ["regulus", "algenubi"],
    ["algenubi", "alterf"],
    ["alterf", "adhafera"],
    ["adhafera", "rasalas"],
    ["adhafera", "algieba"],
    ["algieba", "eta"],
    ["eta", "zosma"],
    ["zosma", "denebola"],
    ["zosma", "chertan"],
    ["chertan", "regulus"],
    ["chertan", "denebola"]
  ];

  const byId = new Map(stars.map((star) => [star.id, star]));
  const pointer = { x: -9999, y: -9999, active: false };
  let width = 0;
  let height = 0;
  let dpr = 1;
  let backgroundStars = [];
  let lastFrame = 0;
  let rafId = 0;

  function seededRandom(seed) {
    let value = seed % 2147483647;
    if (value <= 0) value += 2147483646;
    return function () {
      value = (value * 16807) % 2147483647;
      return (value - 1) / 2147483646;
    };
  }

  function isDark() {
    return (
      document.documentElement.getAttribute("data-theme") === "dark" ||
      document.body.getAttribute("data-theme") === "dark" ||
      document.body.classList.contains("dark") ||
      themeQuery.matches
    );
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const random = seededRandom(Math.round(width * 13 + height * 17));
    const count = Math.min(120, Math.max(48, Math.floor((width * height) / 17000)));
    backgroundStars = Array.from({ length: count }, () => ({
      x: random() * width,
      y: random() * height,
      r: 0.35 + random() * 1.1,
      a: 0.16 + random() * 0.34,
      phase: random() * Math.PI * 2
    }));
    draw(performance.now());
  }

  function layoutStar(star) {
    const constellationWidth = Math.min(width * (width < 720 ? 0.98 : 1.06), 1280);
    const constellationHeight = Math.min(height * (width < 720 ? 0.62 : 0.78), constellationWidth * 0.62);
    const centerX = width * (width < 720 ? 0.48 : 0.43);
    const centerY = height * (width < 720 ? 0.34 : 0.39);
    return {
      x: centerX + (star.x - 0.5) * constellationWidth,
      y: centerY + (star.y - 0.5) * constellationHeight
    };
  }

  function influenceAt(point) {
    if (!pointer.active) return 0;
    const distance = Math.hypot(pointer.x - point.x, pointer.y - point.y);
    const radius = Math.max(120, Math.min(width, height) * 0.24);
    const t = Math.max(0, 1 - distance / radius);
    return t * t;
  }

  function lineColor(alpha, dark) {
    return dark ? `rgba(192, 213, 255, ${alpha})` : `rgba(38, 69, 116, ${alpha})`;
  }

  function starColor(alpha, dark) {
    return dark ? `rgba(236, 243, 255, ${alpha})` : `rgba(23, 45, 82, ${alpha})`;
  }

  function glowColor(alpha, dark) {
    return dark ? `rgba(135, 175, 255, ${alpha})` : `rgba(69, 119, 191, ${alpha})`;
  }

  function drawBackground(now, dark) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    if (dark) {
      gradient.addColorStop(0, "#05070d");
      gradient.addColorStop(0.55, "#0a1020");
      gradient.addColorStop(1, "#101522");
    } else {
      gradient.addColorStop(0, "#f8fafc");
      gradient.addColorStop(0.58, "#eef4fb");
      gradient.addColorStop(1, "#f9fbff");
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    for (const star of backgroundStars) {
      const twinkle = reduceMotion ? 0 : Math.sin(now / 1800 + star.phase) * 0.08;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = starColor(Math.max(0, star.a + twinkle) * (dark ? 0.9 : 0.55), dark);
      ctx.fill();
    }
  }

  function drawConstellation(now, dark) {
    const positions = new Map(stars.map((star) => [star.id, layoutStar(star)]));

    for (const [from, to] of links) {
      const a = positions.get(from);
      const b = positions.get(to);
      const lineInfluence = Math.max(influenceAt(a), influenceAt(b));
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.lineWidth = 0.8 + lineInfluence * 1.1;
      ctx.strokeStyle = lineColor((dark ? 0.26 : 0.18) + lineInfluence * 0.42, dark);
      ctx.stroke();
    }

    for (const star of stars) {
      const point = positions.get(star.id);
      const influence = influenceAt(point);
      const pulse = reduceMotion ? 0 : Math.sin(now / 1300 + star.x * 9) * 0.16;
      const radius = star.r + star.mag * 0.6 + influence * 4.2 + pulse;

      if (influence > 0.03) {
        const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 22 + influence * 36);
        glow.addColorStop(0, glowColor(0.4 * influence, dark));
        glow.addColorStop(1, glowColor(0, dark));
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 24 + influence * 36, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(point.x, point.y, Math.max(1, radius), 0, Math.PI * 2);
      ctx.fillStyle = starColor((dark ? 0.72 : 0.56) + influence * 0.44, dark);
      ctx.fill();

      if (influence > 0.22) {
        ctx.font = "12px Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
        ctx.fillStyle = starColor((dark ? 0.48 : 0.36) + influence * 0.26, dark);
        ctx.fillText(star.label, point.x + 10, point.y - 8);
      }
    }

    ctx.font = "13px Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
    ctx.fillStyle = starColor(dark ? 0.36 : 0.28, dark);
    const denebola = positions.get("denebola");
    ctx.fillText("Leo", denebola.x + 26, denebola.y + 24);
  }

  function draw(now) {
    const dark = isDark();
    drawBackground(now, dark);
    drawConstellation(now, dark);
  }

  function animate(now) {
    if (!reduceMotion && now - lastFrame > 33) {
      draw(now);
      lastFrame = now;
    }
    rafId = window.requestAnimationFrame(animate);
  }

  function handlePointerMove(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    if (reduceMotion) draw(performance.now());
  }

  function handlePointerLeave() {
    pointer.active = false;
    if (reduceMotion) draw(performance.now());
  }

  document.body.classList.add("leo-constellation-page");
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("mousemove", handlePointerMove, { passive: true });
  window.addEventListener("touchmove", function (event) {
    if (!event.touches.length) return;
    pointer.x = event.touches[0].clientX;
    pointer.y = event.touches[0].clientY;
    pointer.active = true;
    if (reduceMotion) draw(performance.now());
  }, { passive: true });
  window.addEventListener("mouseleave", handlePointerLeave, { passive: true });
  themeQuery.addEventListener("change", function () {
    draw(performance.now());
  });

  resize();
  if (!reduceMotion) rafId = window.requestAnimationFrame(animate);

  window.addEventListener("pagehide", function () {
    if (rafId) window.cancelAnimationFrame(rafId);
  });
})();
