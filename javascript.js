// suma prirodnih brojeva po izboru

function prviZadatak() {

	var number = sumaPrirodnihBrojeva(prompt("Unesi broj do kog zelis da saznas sumu prirodnih brojeva."));

function sumaPrirodnihBrojeva(broj) {

	if(isNaN(broj)) {
	number = alert("Unesi samo broj.");
	}
	else if (broj % 1 != 0) {
    number = alert("Unesi ceo broj, ne decimalni.");
    }
    else if (/^ *$/.test(broj)) {
    number = alert("Unesi nesto.");
    }
    else {
	var i = 1;
	var suma = 0;
	while (i <= broj){
	suma = suma + i;
    ++i;
	}
	document.getElementById('log').innerHTML = "" ;
	document.getElementById('log').innerHTML += '<br>Suma prvih ' + broj + ' prirodnih brojeva je ' + suma + '.';
}
}
}

// faktorijel broja po izboru

function drugiZadatak () {

var number = faktorijel(prompt("Unesi broj da saznas njegov faktorijel."));

function faktorijel(broj) {
	
	if(isNaN(broj)) {
	number = alert("Unesi samo broj.");
	}
	else if (broj % 1 != 0) {
    number = alert("Unesi ceo broj, ne decimalni.");
    }
    else if (/^ *$/.test(broj)) {
    number = alert("Unesi nesto.");
    }
	else {
	var i = 1;
	var suma = 1;

	while (i <= broj){
	suma = suma * i;
    ++i;
	}
	document.getElementById('log').innerHTML = "" ;
	document.getElementById('log').innerHTML += '<br>Faktorijel broja ' + broj + ' je ' + suma + '.';
}
}
}

// koliko proizvoda za sumu novca i kusur

function treciZadatak() {

var pare = kolikoProizvoda(prompt("Unesi cenu proizvoda (u brojevima)."), (prompt("Unesi kolko para imas (u brojevima).")));

function kolikoProizvoda (proizvod, pare) {

	kolicina = Math.floor(pare / proizvod);
	ostatak = (pare % proizvod);

	if(isNaN(pare, proizvod)) {
	pare = alert("Unesi samo broj.");
	}
	else if (pare, proizvod % 1 != 0) {
    pare = alert("Unesi ceo broj, ne decimalni.");
    }
    else if (/^ *$/.test(pare, proizvod)) {
    number = alert("Unesi nesto.");
    }
	else if (kolicina == 1) {
	document.getElementById('log').innerHTML = "" ;
	document.getElementById('log').innerHTML += '<br>Mozes da kupis ' + kolicina + ' proizvod' + ' i ostace ti kusur ' + ostatak + ' RSD.';
	} 
	else if (kolicina > 1) {
	document.getElementById('log').innerHTML = "" ;
	document.getElementById('log').innerHTML += '<br>Mozes da kupis ' + kolicina + ' proizvoda' + ' i ostace ti kusur ' + ostatak + ' RSD.';
	} 
	else if (kolicina <=0) {
	document.getElementById('log').innerHTML = "" ;
	document.getElementById('log').innerHTML += '<br>Nemas dovoljno para lol, poz.';
	}
}
}

// suma brojeva u opsegu

function cetvrtiZadatak() {

var brojevi = sumaDvaPrirodnaBroja(prompt("Unesi prvi broj.") -1, (prompt("Unesi drugi broj")));

function sumaDvaPrirodnaBroja(broj1, broj2) {

	var sum = 0;
	var prviBroj = broj1 + 1;

	if(isNaN(broj1, broj2)) {
	brojevi = alert("Unesi samo broj.");
	}
	else if (broj1, broj2 % 1 != 0) {
    brojevi = alert("Unesi ceo broj, ne decimalni.");
    }
    else if (/^ *$/.test(broj2)) {
    number = alert("Unesi nesto.");
    }
	else if (broj1<broj2) {
	while(broj1<broj2) {
	++broj1;
	sum = sum+broj1;
	}
	document.getElementById('log').innerHTML = "" ;
	document.getElementById('log').innerHTML += '<br>Zbir brojeva u opsegu ' + prviBroj + ' i ' + broj2 + ' je ' + sum + '.';
	}
	else if (broj2=broj1) {
	document.getElementById('log').innerHTML = "" ;
	document.getElementById('log').innerHTML += '<br>Tvoj prvi broj mora biti manji od drugog.';
	}
}
}