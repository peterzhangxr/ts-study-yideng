//将属性K对应的T转换为U 
interface ProductIncat {
	id: number,
	name: string,
	label?: string
}
//等价于
interface Test {
	[key: string]: ProductIncat
}

class CartModel {
	products: Record<string, ProductIncat> = {
		peterzhang: {
			id: 20,
			name: 'peterzhang'
		}
	}
}
