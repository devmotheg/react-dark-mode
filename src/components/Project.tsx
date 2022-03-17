/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useEffect, useState } from "react";
import { GiSun, GiMoon, GiCheckMark, GiCrossMark } from "react-icons/gi";

import Article from "./Article";

const Project = () => {
	const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

	const getTheme = () => {
		if (
			theme === "light" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: light)").matches)
		)
			return "light";
		else if (
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
			return "dark";

		return "light" || "dark";
	};

	useEffect(() => {
		if (getTheme() === "light")
			document.querySelector("html")?.classList.remove("dark");
		else document.querySelector("html")?.classList.add("dark");
	}, [theme]);

	const SystemIcon = theme === "system" ? GiCheckMark : GiCrossMark;
	const themeButtonStyling = theme === "system" ? "opacity-70" : "opacity-100";
	const themeToggleStyling =
		getTheme() === "light"
			? "bg-neutral-50 left-px translate-x-0"
			: "bg-neutral-800 left-[calc(100%-1px)] -translate-x-full";

	return (
		<>
			<header className="flex flex-col items-center justify-center gap-10 mt-8 md:flex-row md:justify-between mb-28">
				<h1 className="text-4xl font-bold capitalize text-neutral-800 dark:text-neutral-50">
					overreacted
				</h1>
				<nav className="flex flex-col items-center gap-6">
					<button
						className={`relative flex items-center justify-between w-20 h-8 rounded-full bg-neutral-800 dark:bg-neutral-50 ${themeButtonStyling}`}
						onClick={() => {
							if (getTheme() === "light") setTheme("dark");
							else setTheme("light");
						}}>
						<span className="sr-only">toggle theme</span>
						<GiSun className="w-8 h-full p-[0.1rem] text-neutral-800" />
						<span
							className={`absolute top-1/2 -translate-y-1/2 w-[1.9rem] z-10 h-[1.9rem] rounded-full ${themeToggleStyling}`}></span>
						<GiMoon className="w-8 h-full p-[0.1rem] text-neutral-50" />
					</button>
					<button
						className="flex items-center gap-2 font-bold capitalize text-neutral-800 dark:text-neutral-50"
						onClick={() => {
							if (theme === "system") setTheme(getTheme());
							else setTheme("system");
						}}>
						system preferance
						<SystemIcon className="w-5 h-5 p-[0.2rem] text-neutral-800 dark:text-neutral-50" />
					</button>
				</nav>
			</header>
			<main className="mb-20 space-y-10">
				<Article />
				<Article />
				<Article />
			</main>
		</>
	);
};

export default Project;
