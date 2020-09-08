//Ejercicio 1
function ejercicio1() {
  alert("Hello World");
}

//Ejercicio 2
function ejercicio2() {
  document.write("Hello World");
}

//Ejercicio 3
function ejercicio3() {
  let variable_global = 3, variable_global_dos = 5; alert("La suma de 3 + 5 es: " + (variable_global + variable_global_dos));
}

//Ejercicio 4
function ejercicio4() {
  let usuario; usuario = prompt("Ingrese su nombre :");
  document.write("Hola " + usuario);
}

//Ejercicio 5
function ejercicio5() {
  var num1 = prompt("Digite primer número: "); var num2 = prompt("Digite el segundo número: ");
  var r = (num1 + num2);
  document.write("La suma de los dos numeros es: " + r);
}

//Ejercicio 6
function ejercicio6() {
  let numero1 = prompt("Ingrese el primer número: ");
  let numero2 = prompt("Ingrese el segundo número: ");
  if (numero1 > numero2) document.write("El número: " + numero1 + " es mayor que " + numero2);
  if (numero2 > numero1) document.write("El número: " + numero2 + " es mayor que " + numero1);
  if (numero1 == numero2) document.write("Los dos números son iguales!");
}

//Ejercicio 7
function ejercicio7() {
  let numero1 = prompt("Ingrese el primer número: ");
  let numero2 = prompt("Ingrese el segundo número: ");
  let numero3 = prompt("Ingrese el segundo número: ");
  if (numero1 > numero2 && numero1 > numero3) document.write("El número " + numero1 + " es mayor");
  if (numero2 > numero1 && numero2 > numero3) document.write("El número " + numero2 + " es mayor ");
  if (numero3 > numero1 && numero3 > numero2) document.write("El número " + numero3 + " es mayor ");
  if (numero1 == numero2 && numero1 == numero3) document.write("Los números son iguales! ");
}

//Ejercicio 8
function ejercicio8() {
  let numero = prompt("Ingrese un numero: ");
  if (numero % 2 == 0) {
    document.write("El numero es divisible por 2");
  } else {
    document.write("El numero no es divisible por 2");
  }
}


Ejercicio 9
function ejercicio() {
  var cadena = prompt("Digite la frase");
  var numeroVocales = cadena.match(/[a]/gi).length;

  alert("Existen : "+ numeroVocales +" vocales 'A/a' en la frase.");
 }


//Ejercicio 10
function ejercicio10() {
  var frase = prompt("Escribe una frase");
  var countfrases = frase.length;
  for (i = 0; i < countfrases; i++) {
      if (frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u") {
      document.write(frase.substr(i,1));
      }
  }

}


//Ejercicio 11
function ejercicio11() {
  var cadena = prompt("Digite la frase");
  var numeroVocales = cadena.match(/[aeiou]/gi).length;

  alert("Existen : "+ numeroVocales +" vocales en la frase.");
 }


//Ejercicio 12
function ejercicio12() {
}

//Ejercicio 13
function ejercicio13() {
  let numero = prompt("Digite un numero");

  if (numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0) alert("El numero es divisible por 2,3,5 o 7");
  if (numero%2==!0 || numero%3==!0 || numero%5==!0 || numero%7==!0) alert("El numero no es divisible por 2,3,5 o 7");
 }

//Ejercicio 14
function ejercicio14() {
  let numero = prompt("Digite un numero");
  var dos=0,tres=0,cinco=0,siete=0;

  if (numero%2==0){dos++;}
  if (numero%3==0){tres++;}
  if (numero%5==0){cinco++;}
  if (numero%7==0){siete++;}

  if (dos>0) alert("El numero es divisible por 2")
  if (tres>0) alert("El numero es divisible por 3")
  if (cinco>0) alert("El numero es divisible por 5")
  if (siete>0) alert("El numero es divisible por 7")

}

//Ejercicio 15
function ejercicio15() {
  let numero= prompt("Digite el numero: ");
  for (let i= 0; i < numero; i++) {

    if(numero%i==0){
      alert(" / El numero es divisible por: "+ i);
    }
  }
}

//Ejercicio 16
function ejercicio16() {
  let numero = prompt("Digite un numero");
  var a=0;
  for (let i = 0; i <= numero; i++) {
     if (numero%i==0){a++;}
  }
  if (a!=2){ alert("El numero no es primo!");
           }else{ alert("El numero es primo!")}

}