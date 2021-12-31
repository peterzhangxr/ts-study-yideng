let isDone: boolean = false
let num: number = 1
let hexLiteral: number = 0xf00d
let myName: string = 'peterzhagn'

//类型推断
function alertName(name: string | number): string {
	return '测试' + name
}

let unusable: void = undefined

//枚举
enum Days {
	Sun, Mon, Tue, Wed, Thu, Fri, Sat
}
console.log(Days[0] == 'Sun')

//元组

//interface

interface Person {
	readonly id: number,
	age?: number,
	name: string,
	[props: string]: any
}
const person: Person = {
	id: 30,
	name: 'peter zhang'
}
//person['id'] = 40 Cannot assign to 'id' because it is a read-only property.