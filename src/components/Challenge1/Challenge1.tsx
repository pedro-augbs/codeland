"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";

import { DATA } from "./script";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";

interface CheckboxStates {
	[key: string]: boolean;
}

export const Challenge1 = () => {
	const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({});
	const [searchValue, setSearchValue] = useState("");

	const filteredData = DATA.filter((item) =>
		item.title.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const handleCheckboxChange = (id: string) => {
		setCheckboxStates((prevStates) => ({
			...prevStates,
			[id]: !prevStates[id],
		}));
	};

	return (
		<main className="flex flex-1 flex-col items-center">
			<div className="flex w-full flex-col items-center gap-6 bg-zinc-800 px-[10%] py-8">
				<h1 className="text-4xl font-bold">
					<span className="text-primary">Code</span>land
				</h1>
				<div className="relative flex w-full items-center justify-center">
					<Search className="absolute left-2 h-6 w-6 text-primary" />
					<input
						type="search"
						name="search"
						id="search"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						className="w-full rounded-md bg-transparent bg-zinc-900 py-2 pl-10 pr-4 ring-1 ring-zinc-700"
					/>
				</div>
			</div>
			<div className="flex w-full flex-1 flex-col items-center gap-6 bg-zinc-950 px-[10%] py-8">
				{filteredData.map((i) => (
					<div
						key={i.id}
						className={`flex w-full flex-col gap-3 rounded-md bg-zinc-900 p-8 ring-1
						${checkboxStates[i.id] ? "ring-primary" : "ring-zinc-800"}`}
					>
						<div className="flex items-center justify-between">
							<span className="text-xs font-semibold text-primary">
								{i.date}
							</span>
							<label
								htmlFor={i.id}
								className="relative cursor-pointer text-primary transition-all"
							>
								{checkboxStates[i.id] ? (
									<HeartFilledIcon className="w-5 h-5" />
								) : (
									<HeartIcon className="w-5 h-5" />
								)}
								<Checkbox
									id={i.id}
									checked={checkboxStates[i.id] || false}
									onCheckedChange={() => handleCheckboxChange(i.id)}
									className="sr-only"
								/>
							</label>
						</div>
						<h2 className="text-lg font-medium">{i.title}</h2>
						<p className="text-md text-zinc-400">{i.content}</p>
					</div>
				))}
			</div>
		</main>
	);
};
