// 抽象类
/**
 * 抽象类可以具体实现 也可以定义抽象方法
 * 修饰符
 * 	public
 * 	private
 * 	protected
*/
abstract class Animal {
	abstract makeSound(): void;
	move(): void {
		console.log('move')
	}
}

class Dog extends Animal {
	constructor() {
		super()
	}
	move(): void {
		console.log('dog move')
	}
	makeSound(): void {
			console.log('汪汪汪')
	}
}

const dog: Animal = new Dog()
dog.move()
dog.makeSound()