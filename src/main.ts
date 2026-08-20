import "./style.css";
import { watchArtwork } from "./watch-art";

const root = document.documentElement;
const hero = document.querySelector<HTMLElement>("[data-assembly-hero]");
const mount = document.querySelector<HTMLElement>("[data-watch-mount]");
const chapterNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
const partItems = Array.from(document.querySelectorAll<HTMLElement>("[data-part-item]"));
const progressValue = document.querySelector<HTMLOutputElement>("[data-progress-value]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

root.classList.add("js");

if (mount) {
	mount.innerHTML = watchArtwork;
}

const explodedParts = Array.from(
	document.querySelectorAll<SVGGraphicsElement>("[data-explode-x]")
).map((element) => ({
	element,
	x: Number(element.dataset.explodeX ?? 0),
	y: Number(element.dataset.explodeY ?? 0),
	rotation: Number(element.dataset.explodeRotate ?? 0),
	start: Number(element.dataset.assembleStart ?? 0),
	end: Number(element.dataset.assembleEnd ?? 0.82)
}));

let frame = 0;
let lastChapter = -1;

const clamp = (value: number, minimum = 0, maximum = 1) =>
	Math.min(maximum, Math.max(minimum, value));

const smoothstep = (value: number) => {
	const bounded = clamp(value);
	return bounded * bounded * (3 - 2 * bounded);
};

const setChapter = (chapter: number) => {
	if (chapter === lastChapter) return;
	lastChapter = chapter;

	for (const [index, node] of chapterNodes.entries()) {
		const active = reduceMotion.matches || index === chapter;
		node.classList.toggle("is-active", active);
		node.setAttribute("aria-hidden", active ? "false" : "true");
	}
};

const renderHero = () => {
	frame = 0;
	if (!hero) return;

	const bounds = hero.getBoundingClientRect();
	const distance = Math.max(1, bounds.height - window.innerHeight);
	const rawProgress = reduceMotion.matches ? 1 : clamp(-bounds.top / distance);
	const progress = smoothstep(rawProgress);
	root.style.setProperty("--hero-progress", progress.toFixed(4));
	root.style.setProperty(
		"--intro-opacity",
		String(reduceMotion.matches ? 1 : clamp(1 - rawProgress * 4))
	);
	root.style.setProperty("--hero-light-x", `${12 + progress * 48}%`);
	root.style.setProperty("--hero-glow-x", `${45 + progress * 10}%`);
	root.style.setProperty("--hero-fill", `${progress * 100}%`);

	for (const part of explodedParts) {
		const local = smoothstep((progress - part.start) / Math.max(0.001, part.end - part.start));
		const remaining = 1 - local;
		part.element.style.transform = `translate(${(part.x * remaining).toFixed(2)}px, ${(part.y * remaining).toFixed(2)}px) rotate(${(part.rotation * remaining).toFixed(2)}deg)`;
		part.element.style.opacity = String(0.42 + local * 0.58);
	}

	const chapter = reduceMotion.matches
		? chapterNodes.length - 1
		: Math.min(4, Math.floor(rawProgress * 5));
	setChapter(chapter);

	const activePart = reduceMotion.matches
		? partItems.length - 1
		: Math.min(partItems.length - 1, Math.floor(rawProgress * partItems.length));
	for (const [index, item] of partItems.entries()) {
		item.classList.toggle("is-active", index <= activePart);
		if (index === activePart) item.setAttribute("aria-current", "step");
		else item.removeAttribute("aria-current");
	}
	if (progressValue) progressValue.value = `0${chapter}—04`;
};

const requestHeroRender = () => {
	if (!frame) frame = window.requestAnimationFrame(renderHero);
};

window.addEventListener("scroll", requestHeroRender, { passive: true });
window.addEventListener("resize", requestHeroRender, { passive: true });
reduceMotion.addEventListener("change", requestHeroRender);
requestHeroRender();

const revealObserver = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				revealObserver.unobserve(entry.target);
			}
		}
	},
	{ rootMargin: "0px 0px -12%", threshold: 0.12 }
);

for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
	if (reduceMotion.matches) element.classList.add("is-visible");
	else revealObserver.observe(element);
}
