interface LengthWise {
	length: number
}

function getLen2<T extends LengthWise>(args: T): number {
	return args.length;
}

console.log(getLen2<string>('ssss'))

class GenericNumber<T> {
	total: T | undefined
	add: ((x: T, y: T) => T) | undefined
}

//范型函数
function getData<T>(value: T): T {
	return value
}

//范型接口
interface Config {
	<T>(value: T): void
}

const getData2: Config = function<T>(value: T): T {
	return value
}

//动态范型
interface BookMark {
	msg: string
}
class BookMarkService<T extends BookMark> {
	items: T[] = []
}

const ss = new BookMarkService<BookMark>()
console.log(ss.items)

let ok1: readonly boolean[]

