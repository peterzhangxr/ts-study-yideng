import 'reflect-metadata'
function inject(serviceIdentifier: string) {
	return function(target: Object, targetKey: string, index: number) {
		Reflect.defineMetadata(serviceIdentifier, 'sssss', target)
	}
}

class IndexController {
	public indexService: string
	constructor(@inject('xxx') arg: string) {
		this.indexService = arg
	}
}

const obj = new IndexController('aaa')
console.log(obj.indexService)
console.log(Reflect.getMetadata('xxx', IndexController))
