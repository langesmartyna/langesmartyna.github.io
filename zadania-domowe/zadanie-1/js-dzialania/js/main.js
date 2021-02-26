function dzialania (a, b) {
    let suma = a + b;
    let minus  = a - b;
    let wynik = a * b;
    

   if ( suma > 0) {
   console.log (`Wynik dodawania wynosi ${suma}`);

  } else {
      console.log ('Wynik jest nieprawidłowy');
  }


    if ( minus > 0) {
    console.log (`Wynik odejmowania wynosi ${minus}`);
 
   } else {
       console.log ('Wynik jest nieprawidłowy');
   }


    if ( wynik > 0) {
   console.log (`Wynik mnożenia wynosi ${wynik}`);

  } else {
      console.log ('Wynik jest nieprawidłowy');
  }

};

dzialania(2,-3);