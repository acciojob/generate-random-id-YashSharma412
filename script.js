function makeid(l) {
  // write your code here
	l = Number(l)

	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let arr = []
	for (let i = 0; i < l; i++) {
		arr.push(characters[Math.floor(Math.random()*characters.length)])
	}
	return arr.join("")
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
