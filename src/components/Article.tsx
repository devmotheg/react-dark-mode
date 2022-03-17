/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const Article = () => {
	return (
		<div>
			<strong className="block mb-1 text-3xl font-bold text-pink-700 dark:text-pink-300">
				What Are The React Team Principles
			</strong>
			<div className="flex items-center gap-2 mb-2 text-sm italic">
				<span className="text-neutral-800 dark:text-neutral-50">
					Thursday 4th, 2015
				</span>
				<span className="text-neutral-800 dark:text-neutral-50">
					5 min read
				</span>
			</div>
			<p className="text-neutral-800 dark:text-neutral-50">UI Before API.</p>
		</div>
	);
};

export default Article;
