let rezult = 0;
let num = 0;
let gl = "";
let flag = 0;
let num1 = 0;

let colors = ["#FFF700", "#BFBB30", "#A6A000", "#FFF940", "#FFFB73", "#3016B0",	"#3C2D84", "#190773", "#624AD8", "#8170D8",
"#C30083", "#92256E", "#7F0055", "#E138AA", "#E165B9", "#660BAB", "#592680", "#41046F", "#9440D5", "#A668D5", 
"#00CC00",	"#269926",	"#008500",	"#39E639",	"#67E667", "#009999",	"#1D7373",	"#006363",	"#33CCCC",	"#5CCCCC", 
"#FF0000",	"#BF3030",	"#A60000",	"#FF4040",	"#FF7373"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function randomized(){
	let j = getRandomInt(20, 0);
	document.getElementsByClassName('display')[0].style = "background-color:" + colors[j];
	j = getRandomInt(20, 0);
	document.getElementsByClassName('main')[0].style = "background-color:" + colors[j];
	j = getRandomInt(100, 0);
	let intensive = getRandomInt(5, 2);
	let red = getRandomInt(255, 50);
	let green = getRandomInt(90, 160);
	let blue = getRandomInt(90,160);
	for (let i = 0; i < 18; i++) {
		document.getElementsByClassName('but')[i].style = 
		"background-color: rgb("+ red + "," + green + "," + blue + ")";
		if (intensive % 2 == 0){
		green -= intensive;
		blue += intensive;
		} else {
		green += intensive;
		blue -= intensive;
		}
	}
}

function cl(){
	rezult = 0;
	updateStr(rezult);
}

function digit(number){
	rezult *= 10;
	rezult += number;
	updateStr(rezult);
}

function arifm(mark){
	if (flag === 1) {
		if (gl === '+') {
			num += rezult;
			gl = mark;
			cl();
		}
		if (gl === '*') {
			num *= rezult;
			gl = mark
			cl();
		} 
		if (gl === '/') {
			num /= rezult;
			gl = mark
			cl();
		}
		if (gl === '-') {
			num -= rezult;
			gl = mark
			cl();
		} 		
		
		if (mark === 'answ') {
			updateStr('Answer is' + ' ' + num);
			rezult = 0;
			flag = 0;
			return;
		}
	}
	if (flag === 0) {
		num = rezult;
		gl = mark;
		cl();
		flag = 1;
	} 
}

function updateStr(num1){
		console.log(num1);
	document.getElementById("result").textContent = num1;
}