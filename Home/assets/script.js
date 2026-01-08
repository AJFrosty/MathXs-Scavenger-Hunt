const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const WORD1 = "MathXs";
const WORD2 = "Education";

const lettersMathXs = document.getElementById("letters-mathxs");
const lettersEdu = document.getElementById("letters-education");
const symbolsRoot = document.getElementById("symbols");

document.getElementById("year").textContent = new Date().getFullYear();

function rand(min, max) { return min + Math.random() * (max - min); }

function makeLetterSpans(container, text) {
    container.innerHTML = "";
    const spans = [];
    for (const ch of text) {
        const s = document.createElement("span");
        s.className = "ch";
        s.textContent = ch === " " ? "\u00A0" : ch;
        container.appendChild(s);
        spans.push(s);
    }
    return spans;
}

/**
 * Compute final centered positions using actual letter widths.
 * Letters are absolutely positioned with left:50% and then translateX(finalX).
 */
function layoutFinalPositions(container, spans, letterGapPx = 0, baselineY = 0) {
    // measure
    spans.forEach(s => {
        s.style.position = "relative";
        s.style.opacity = "1";
        s.style.transform = "none";
        s.style.left = "0px";
        s.style.top = "0px";
        s.style.display = "inline-block";
    });

    const widths = spans.map(s => s.getBoundingClientRect().width);
    const total = widths.reduce((a, b) => a + b, 0) + letterGapPx * (widths.length - 1);

    let x = 0;
    spans.forEach((s, i) => {
        const w = widths[i];
        const left = x;
        x += w + letterGapPx;

        s.dataset.finalX = String(left - total / 2);
        s.dataset.finalY = String(baselineY); // ✅ key change

        // back to absolute for animation
        s.style.position = "absolute";
        s.style.left = "50%";
        s.style.top = "0px";
        s.style.display = "inline-block";
    });

    container.style.height = "1em";
}

function scatterThenSettle(spans, opts) {
    const {
        scatterRadius = 140,
        scatterYOffset = 40,
        settleDelay = 100,
        perCharStagger = 35,
        floatTime = 950
    } = opts;

    // scatter around center (relative to left:50%)
    spans.forEach((s) => {
        const angle = rand(0, Math.PI * 2);
        const r = rand(scatterRadius * 0.35, scatterRadius);

        const sx = Math.cos(angle) * r;

        const baseY = parseFloat(s.dataset.finalY || "0"); // ✅ use final baseline
        const sy = baseY + Math.sin(angle) * r + rand(-scatterYOffset, scatterYOffset);

        const rot = rand(-12, 12);

        s.style.opacity = "0";
        s.style.transform = `translate3d(${sx}px, ${sy}px, 0) rotate(${rot}deg)`;

        s.dataset.scatterX = String(sx);
        s.dataset.scatterY = String(sy);
        s.dataset.scatterR = String(rot);
        s.dataset.phase = String(rand(0, Math.PI * 2));
    });

    // fade in
    requestAnimationFrame(() => {
        spans.forEach((s, i) => {
            setTimeout(() => { s.style.opacity = "1"; }, 40 + i * perCharStagger);
        });
    });

    // gentle float
    const start = performance.now();
    function floatTick(t) {
        const elapsed = t - start;
        const k = Math.min(1, elapsed / floatTime);

        spans.forEach((s) => {
            const baseX = parseFloat(s.dataset.scatterX);
            const baseY = parseFloat(s.dataset.scatterY);
            const phase = parseFloat(s.dataset.phase);
            const rot = parseFloat(s.dataset.scatterR);

            const wobbleX = Math.sin((t * 0.0022) + phase) * (6 - 3 * k);
            const wobbleY = Math.cos((t * 0.0019) + phase) * (7 - 4 * k);

            s.style.transform = `translate3d(${baseX + wobbleX}px, ${baseY + wobbleY}px, 0) rotate(${rot}deg)`;
        });

        if (elapsed < floatTime) requestAnimationFrame(floatTick);
    }
    requestAnimationFrame(floatTick);

    // settle
    setTimeout(() => {
        spans.forEach((s, i) => {
            const fx = parseFloat(s.dataset.finalX);
            const fy = parseFloat(s.dataset.finalY);
            setTimeout(() => {
                s.style.transform = `translate3d(${fx}px, ${fy}px, 0) rotate(0deg)`;
            }, i * perCharStagger);
        });
    }, settleDelay + floatTime);
}

/* --- Hero-only floating symbols (tasteful) --- */
const SYMBOLS = ["+", "−", "×", "÷", "=", "√", "∫", "∑", "π", "Δ", "θ", "∞", "∂", "≈", "≠", "≤", "≥"];

function spawnSymbol() {
    if (!symbolsRoot) return;

    const el = document.createElement("div");
    el.className = "symbol";
    el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

    const size = rand(14, 24);
    el.style.fontSize = size + "px";


    const x0 = rand(0, 100);
    const x1 = x0 + rand(-16, 16);
    el.style.setProperty("--x0", `${x0}vw`);
    el.style.setProperty("--x1", `${x1}vw`);
    el.style.setProperty("--r0", `${rand(-16, 16)}deg`);
    el.style.setProperty("--r1", `${rand(-26, 26)}deg`);

    const duration = rand(18, 34);
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = rand(-duration, 0) + "s";

    symbolsRoot.appendChild(el);
    setTimeout(() => el.remove(), (duration + 2) * 1000);
}

function startSymbols() {
    if (!symbolsRoot || prefersReduced) return;

    // density based on width (tasteful)
    const base = Math.max(10, Math.min(18, Math.floor(window.innerWidth / 95)));
    for (let i = 0; i < base; i++) spawnSymbol();

    setInterval(() => spawnSymbol(), 1000);
}

/* --- Boot --- */
function boot() {
    const spans1 = makeLetterSpans(lettersMathXs, WORD1);
    const spans2 = makeLetterSpans(lettersEdu, WORD2);

    if (prefersReduced) {
        // render static
        spans1.forEach(s => { s.style.position = "static"; s.style.opacity = "1"; s.style.transform = "none"; });
        spans2.forEach(s => { s.style.position = "static"; s.style.opacity = "1"; s.style.transform = "none"; });
        startSymbols();
        return;
    }

    // final layouts
    layoutFinalPositions(lettersMathXs, spans1, 0, 0);
    layoutFinalPositions(lettersEdu, spans2, 8, 58);

    // animate in
    scatterThenSettle(spans1, { scatterRadius: 150, scatterYOffset: 45, floatTime: 1000, perCharStagger: 36 });
    setTimeout(() => {
        scatterThenSettle(spans2, { scatterRadius: 110, scatterYOffset: 35, floatTime: 800, perCharStagger: 22 });
    }, 240);

    startSymbols();

    // keep centered on resize
    window.addEventListener("resize", () => {
        layoutFinalPositions(lettersMathXs, spans1, 0);
        layoutFinalPositions(lettersEdu, spans2, 8);
        spans1.forEach(s => s.style.transform = `translate3d(${s.dataset.finalX}px, 0, 0) rotate(0deg)`);
        spans2.forEach(s => s.style.transform = `translate3d(${s.dataset.finalX}px, 0, 0) rotate(0deg)`);
    });
}

boot();

// --- Reels carousel controls ---
(function reelsCarousel() {
    const track = document.querySelector("[data-reels-track]");
    const prev = document.querySelector("[data-reels-prev]");
    const next = document.querySelector("[data-reels-next]");
    if (!track || !prev || !next) return;

    const step = () => Math.min(420, track.clientWidth * 0.9);

    prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));

    // If IG script is present, re-process after a moment
    setTimeout(() => {
        if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
    }, 600);
})();
