//Функция, используя рекурсию
function powTwo1(a) {
	if(a === 1){
		return console.log("YES");
	} else if(a % 2 === 0 && a !== 0){
		return powTwo1(a/2);
	} else console.log("NO");
}

powTwo1(0);
powTwo1(1);
powTwo1(2);
powTwo1(3);
powTwo1(4);
powTwo1(35);
powTwo1(32);
powTwo1(51);
powTwo1(128);

//Функция, используя цикл
function powTwo2(a) {
	while (a !== 0 && a % 2 === 0){
		a /= 2;	
	}
	//console.log(a);
	if (a !== 1){
		return console.log("NO");
	} else {
		return console.log("YES");
	}
}

powTwo2(0);
powTwo2(1);
powTwo2(2);
powTwo2(3);
powTwo2(4);
powTwo2(35);
powTwo2(32);
powTwo2(51);
powTwo2(128);