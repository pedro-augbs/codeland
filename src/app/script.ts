import { v4 as uuidv4 } from "uuid";

const DATA = [
	{
		title: "What is a programming language? Learn about the main ones",
		content:
			"The programming field is one of the most popular areas of information technology. It continues to have a high demand for work, precisely because of the speed with which technological devices are advancing.",
		date: "Ago 17th, 2024",
	},
	{
		title: "GitHub now allows you to log in without needing a password.",
		content:
			"On Wednesday (12), GitHub announced the access through passkeys, a passwordless authentication method. The novelty is available in a public beta version and can replace two-factor authentication.",
		date: "Jul 12th, 2024",
	},
	{
		title: "Why are hyperlinks mostly blue?",
		content:
			"Anyone browsing the internet has likely noticed that it features various resources to make our lives easier. Among these options, we can mention hyperlinks - a clickable word or term that directs the reader.",
		date: "Jun 21th, 2024",
	},
];

const dataWithIds = DATA.map((item) => ({
	id: uuidv4(),
	...item,
}));

export { dataWithIds as DATA };
