//1.不要混淆ES6和TS中的=> 简单头函数
let myNum: (x: number, y: number) => number = function(x: number, y: number): number {
	return x + y
}

//2.函数默认参数
function buildName (firstName: string, lastName: string = 'cat', thirdName?: string): string {
	return firstName + lastName + thirdName
}

//3.剩余参数
function push(array: any[], ...items: any[]): any[]{
	items.forEach((item) => {
		array.push(item)
	})

	return array;
}

//4.可选参数
