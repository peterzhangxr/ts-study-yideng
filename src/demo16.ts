interface Cat {
	name: string
}

const bobCat: Cat = {
	name: 'Boob'
}
function printCatName (this: Cat) {
	console.log(this.name)
}
//printCatName(bobCat)

printCatName.apply(bobCat)