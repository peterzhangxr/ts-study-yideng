let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2,3]
let arr3 = new Array<number>(4)
console.log(arr3.length)

interface NumberArray {
	[index: number]: number
}

let arr4: NumberArray = [1, 2, 3]

//类数组
function sum() {
	let args: IArguments = arguments
	// args.callee()
}


//元组
let turple: [number, string] = [1, '测试']

//元组与数组区别
function useFetch () {
	const response: string = 'peterzhang'
	const age: number = 30
	//return [response, age] as const
	return tuplify(response, age)
}

function tuplify<T extends unknown[]>(...args: T): T {
	return args;
}


const [response] = useFetch()
console.log(response)
