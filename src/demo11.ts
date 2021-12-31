const add = (a: number, b: number): number => {
	return a + b
}

type addType = Parameters<typeof add>
const x = (...data: addType) => {
	const [x, y] = data
	console.log(x, y)
	return [x, y] as const
}

//key强制校验

function getKV<T extends Object, K extends keyof T>(o: T, name: K): T[K] {
	return o[name]
}

