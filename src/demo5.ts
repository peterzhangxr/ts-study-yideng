//类型断言
function getLen(str: string | number): number {
	return str.toString().length;
	if((str as string).length) {
		return (<string>str).length;
	} else {
		return str.toString().length;
	}
}

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
	if (typeof n === 'string') {
		return n;
	} else {
		return n();
	}
}