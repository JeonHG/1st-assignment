const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on("line", function(line) {
    var strArray = line.split('_')
    // for(var i=0; i<strArray.length; i++){
    //     strArray[i] = strArray[i]*1
    // }
    // strArray.forEach(function(item){
    //     item = item * 1
    // })
    var Array = strArray.map(function(str){
        return Number(str)
    })
    //https://bblog.tistory.com/300 배열오소 일괄변경할때는 map쓰자
    var yield = (Array[0]*Math.pow(1+Array[1]/100,Array[2])).toFixed(2)
	console.log(strArray, Array, parseFloat(yield))	
	rl.close();
}).on("close", function() {
	process.exit();
});
