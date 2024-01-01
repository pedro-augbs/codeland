import { v4 as uuidv4 } from "uuid";

const DATA = [{}];

const dataWithIds = DATA.map((item) => ({
	id: uuidv4(),
	...item,
}));

export { dataWithIds as DATA };
