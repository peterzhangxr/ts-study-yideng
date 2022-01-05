class User {
	constructor(public name: string) {
		
	}
}
//ioc
interface IContruct<T extends new (...args: any) => any>{
	type: new (...args: ConstructorParameters<T>) => InstanceType<T>
}
type UserConstruct = IContruct<typeof User>
const constr: UserConstruct = {
	type: User
}
const user = new constr.type('peterzhang')
console.log(user.name)