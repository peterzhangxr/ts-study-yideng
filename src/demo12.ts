interface User {
	id: number,
	age: number,
	name: string
}

//必须的字段变成可选
type PartialUser = Partial<User>
//去掉问号
type RequiredPartialUser = Required<PartialUser>
//选择一些字段
type PickUser = Pick<User, 'id' | 'age'>
//排除一些字段
type OmitUser = Omit<User, 'id' | 'age'>
//排除掉两个类型的交集，从一个类型
type A = Exclude<'x' | 'a' | 'b', 'x' | 'y' | 'z'>

type Select = 'id' | 'age'

//让部分可选 再让部分不可选
type SelectPartial<T, V extends keyof T> = Partial<Pick<T, V>> & Omit<T, V>
type Final = SelectPartial<User, Select>
const sa: Final = {
	name: 'peterzhang'
}

//Extract 求取相同的属性
type B = Extract<'x' | 'a' | 'b', 'x' | 'y' | 'z'>