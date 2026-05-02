function getComputerChoice(){
    let nombre  = Math.random();
    if(nombre<0.33){
        return "ciseaux";

    }
    else if(nombre<=0.66){
        return "pierre";
    }
    else {
        return "feuille"
    }

}
function getHumanChoice(){
    return prompt("veuillez faire un choix entre: pierre-feuille-ciseaux");
}
let humanCompteur = 0;
let computerCompteur=0;

function playgroud(){
    console.log("debut de manche")
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    if (computerSelection === humanSelection){
        console.log("egaliter")
    }
    else if ((computerSelection ==="pierre"&& humanSelection==="ciseaux")||
       (computerSelection === "feuille"&& humanSelection==="pierre")||
       (computerSelection ==="ciseaux"&& humanSelection==="feuille"))
       {
        computerCompteur++;
        console.log("l'ordi gagne cette manche!")
       }
    else{
        humanCompteur++;
        console.log("tu a gagner cette manche!")
    }
    
    
}
function playGame() {
    for (let i = 0; i < 5; i++) {
         console.log("Manche numéro : " + (i+1))
        playgroud()
    }
    console.log("fin de la partie!")
    // après les 5 manches, on annonce le vainqueur
    if (humanCompteur > computerCompteur) {
        console.log("Tu as gagné la partie !")
    } else if (computerCompteur > humanCompteur) {
        console.log("L'ordi a gagné la partie !")
    } else {
        console.log("Egalité !")
    }
}

playGame()