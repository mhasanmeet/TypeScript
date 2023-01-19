//objects explicit way
const objects: {id:number, name:string} = {id:10, name:"Mahmudul"};

//object without explicit
type objPrototype = {id:number, name:string}
const newObject:objPrototype = {id: 1, name:"Sakib"}
const newObject2:objPrototype = {id: 2, name:"eva"}