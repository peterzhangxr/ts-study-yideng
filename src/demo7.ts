interface IPriceData {
	id: number,
	price: number
}

type IPriceDataArray = IPriceData[];

// interface和type区别
//都可以描述一个对象或函数
//都允许扩展
//type可以声明基本类型的别名
//
/**
function getPriceData () {
	return new Promise<IPriceDataArray>((resolve, reject) => {
		fetch('url').then(response => {
			return response.json()
		}).then(() => {
			const data: IPriceDataArray = []
			resolve(data)
		})
	})
}

getPriceData().then((data) => {
	console.log(data[0].id)
})*/

interface ClockContructor {
	new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
	tick(): void
}

class DigitalClock implements ClockInterface {
	tick(): void {
			console.log('aaa')
	}
}

function createClock(ctor: ClockContructor, h: number, m: number): ClockInterface {
	return new ctor(h, m)
}

const digital = createClock(DigitalClock, 3, 3)
digital.tick()