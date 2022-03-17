/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

import Project from "./components/Project";

const App = () => (
	<>
		<Project />
		<a
			className="block mx-auto mt-12 mb-4 text-sm font-bold w-fit text-neutral-800 dark:text-neutral-50"
			href="https://github.com/devmotheg">
			Coded by Mohamed Muntasir
		</a>
	</>
);

export default App;
