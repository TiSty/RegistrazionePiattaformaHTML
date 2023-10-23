class Utility {

    constructor() {
        this.passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        this.cellulareRegex = /^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/;
        this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\-.]?\w+)*(\.\w{2,4})+$/;
    }

    validaNome(nome) {
        let rit = 0;
        if ((nome == '') || (nome == 'undefinited')) {
            alert("Il nome è obbligatorio")
            rit++;
        }
        return (rit == 0);
    }

    //------------------------------------------------------------

    verificaCognome() {
        let rit = 0;
        if ((cognome == '') || (cognome == 'undefinited')) {
            alert("Il cognome è obbligatorio")
        }
        return (rit == 0);
    }

    //------------------------------------------------------------
    verificaNascita(dataNascita) {
        let rit = 0;


        if (dataNascita == '') {
            alert("La data di nascita è obbligatoria")
        }

        const dataParts = dataNascita.split('/');
        if (dataParts.length !== 3) {
            // alert("La data di nascita non è corretta, inserisci il formato gg/mm/aaaa");
        }

        const day = parseInt(dataParts[0], 10);
        const month = parseInt(dataParts[1], 10);
        const year = parseInt(dataParts[2], 10);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert("La data di nascita non è corretta, inserisci il formato gg/mm/aaaa");
        }

        

        return (rit == 0);
    }


    dataValida(dataNascita) {
        let rit = 0;
        // Verifica il formato gg/mm/aaaa
        const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!dateRegex.test(dataNascita)) {
            return false;
        }

        // Divide la data in giorno, mese e anno
        const [day, month, year] = dataNascita.split('/').map(Number);

        // Verifica che il mese sia compreso tra 1 e 12
        if (month < 1 || month > 12) {
            return false;
        }

        // Verifica che il giorno sia valido per il mese specificato
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day < 1 || day > daysInMonth) {
            return false;
        }

        // Verifica che l'anno sia un numero positivo
        if ((year < 0) && (year <= 1930)) {
            return false;
        }
        
        // Se tutte le verifiche hanno successo, la data è valida
        return (rit == 0);
    }


    //------------------------------------------------------------
    verificaScelta() {
        let rit = 0;


        if (sesso === "") {
            alert("Seleziona un'opzione valida.");
        }
        return (rit == 0);
    }

    //------------------------------------------------------------
    /**
     * funzione che verifica la password
     * @returns 
     */
    validaPassword(password) {
        let rit = 0;
        //verifica password
        if (password != 0) {
            if (!this.passwordRegex.test(password)) {
                //verifica se ha 8 caratteri
                if (password.length < 8) {
                    console.log("La password deve contenere almeno 8 caratteri.");
                }
                //verifica se ha una lettera maiuscola
                if (!/(?=.*[A-Z])/.test(password)) {
                    console.log("La password deve contenere almeno una lettera maiuscola.");
                }
                //verifica se ha una lettera minuscola
                if (!/(?=.*[a-z])/.test(password)) {
                    console.log("La password deve contenere almeno una lettera minuscola.");
                }
                //verifica se ha un numero
                if (!/(?=.*\d)/.test(password)) {
                    console.log("La password deve contenere almeno un numero.");
                }
                //verifica se ha un carattere speciale
                if (!/(?=.*[@$!%*?&])/.test(password)) {
                    console.log("La password deve contenere almeno un carattere speciale tra @$!%*?&.");
                }
                alert("La password deve contenere 8 caratteri, almeno una maiuscola, almeno una minuscola, almeno un numero ed un carattere speciale (tra @$!%*?&.).")
            }
        } else {

        }

        return (rit == 0);
    }

    //------------------------------------------------------------------------------
    validaEmail(email) {
        let rit = 0;
        //verifica email
        if (!this.emailRegex.test(email)) {
            //verifico la email
            if (!this.emailRegex.test(email) || (email == '') || (email === 'undefined')) {
                alert("La e-mail non è corretta")
            }
        }
        return (rit == 0);
    }

    //-------------------------------------------------------------------------------
    validaCellulare(cellulare) {
        //verifica numero di cellulare
        if (!this.cellulareRegex.test(cellulare)) {
            //verifica se è la lunghezza giusta
            if (isNaN(cellulare) || (cellulare == '') || (cellulare == 'undefined') || (cellulare <= 10) || (cellulare >= 11)) {
                alert("Il numero non è corretto")
            }
        }

    }

    //-----------------------------------------------------------------------------------
    passwordCombaciano(password, passwordRegistrata) {
        let rit = 0;
        if (!this.passwordRegex.test(password)) {
            if ((password == '') && (password == 'udefined')) {
                alert('password errata')
            }
            if (password === passwordRegistrata) {

            } else {
                alert('le password non corrispondono')
            }

        }
        return (rit == 0);
    }

    //-----------------------------------------------------------------------------------


}




