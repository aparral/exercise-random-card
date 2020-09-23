/* Paso 1: Rescatar elementos desde html */
             let symbolsup = document.getElementById("symbolsup");
             let num = document.getElementById("numbers");
     
/* Paso 2: Trabajarlos o procesar tareas requeridas */
        let symbols = ['&spades;','&clubs;','&hearts;','&diams;'];
        let numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
       let posicionpinta = Math.floor(Math.random() * symbols.length);
       let colorpinta;
       if (posicionpinta == 2 || posicionpinta == 3) {// Rojo
              colorpinta = 'red';
       }
       else {
              colorpinta = 'black';
       }

/* Paso 3: Pintar elementos en html */
        symbolsup.innerHTML= symbols[posicionpinta];
        symbolsup.style.color = colorpinta;
        num.innerHTML=numbers[Math.floor(Math.random()*numbers.length)];
        num.style.color = colorpinta;
        symbolsdown.innerHTML= symbols[posicionpinta];
        symbolsdown.style.color = colorpinta;
       


