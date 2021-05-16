const fuu = function() {console.log(this.a);}, 1000)}


const a = {
a: 1,
myFunc: () => {
setTimout(fuu, 1000)
}
}

console.log(a.myFunc())
