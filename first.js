// Run by Node.js
// 369 게임
// node first.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	number = line
	var result = 0
	var countnum = function (number){
		var count = 0
		while(number>0){
			if(number%10 == 0){
				number = (number-number%10)/10
				continue
			}
			if((number % 10)%3 == 0){
				count++
			}
			number = (number-number%10)/10
		}
		return count
	}
	for(var i=0; i<=number; i++){
		result += countnum(i)
		console.log(i, countnum(i), result)
	}
	console.log(result)	
	rl.close();
}).on("close", function() {
	process.exit();
});
