//Функя, испоьзуя рекурсию
/*function powTwo(a) {
	if(a === 1){
		return console.log("YES");
	} else if(a%2 === 0 && a!==0){
		return powTwo(a/2);
	} else console.log("NO");
}*/

//Функция, испольуя цкл
function powTwo(a) {
		while (a != 0 && a!=1 && a%2===0){
			a /= 2;	
		}
		//console.log(a);
		if (a===0 || a>1){
			return console.log("NO");
		}
			else {
				return console.log("YES");
			}
}


powTwo(0);
powTwo(1);
powTwo(2);
powTwo(3);
powTwo(4);
powTwo(35);
powTwo(32);
powTwo(51);
powTwo(128);