import Image from "next/image";
import Link from "next/link";

import c1 from "@/assets/c1.png";

export default function Home() {
	return (
		<main className="flex p-12 justify-center gap-4">
			<div>
				<Link
					href={""}
					className="flex w-96 aspect-video rounded-lg relative overflow-hidden hover:scale-105"
				>
					<Image
						src={c1}
						alt={""}
						width={1280}
						height={800}
						className="absolute inset-0 -z-10 opacity-60"
					/>
					<div className="flex flex-1 w-full flex-col justify-center gap-2 items-center">
						<span className="font-bold text-6xl">Blog</span>
						<span className="text-lg font-light">challenge 1</span>
					</div>
				</Link>
			</div>
		</main>
	);
}
