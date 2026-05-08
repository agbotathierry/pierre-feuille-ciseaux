// mis en place du choix de l'ordinateur
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
//selection des bouton 
const bouttonPierre = document.querySelector("#pierre");
const bouttonFeuille=  document.querySelector("#feuille");
const bouttonCiseaux= document.querySelector("#ciseaux");
bouttonCiseaux.addEventListener("click",function(){
    playgroud("ciseaux");
})
bouttonFeuille.addEventListener("click", function(){  // appele des choix
    playgroud("feuille");
})
bouttonPierre.addEventListener("click",function(){
    playgroud("pierre");
})
const resultat = document.querySelector(".resultat")
const score = document.querySelector(".score");


// les deux compteur
let humanCompteur = 0;
let computerCompteur=0;
// la fonction coeur du jeu

function playgroud(humanSelection){

    computerSelection = getComputerChoice();
    if (computerSelection === humanSelection){
        resultat.textContent="egualiter"
        score.textContent = humanCompteur.toString()+"point(s)"+" "+computerCompteur.toString()+"point(s)";
    }
    else if ((computerSelection ==="pierre"&& humanSelection==="ciseaux")||
       (computerSelection === "feuille"&& humanSelection==="pierre")||
       (computerSelection ==="ciseaux"&& humanSelection==="feuille"))
       {
        // computer
        computerCompteur++;
        resultat.textContent="l'ordinateur a gagner cette manche!"
        score.textContent = "ORDINATEUR:"+computerCompteur.toString()+"point(s)"+" "+"HUMAIN:"+humanCompteur.toString()+"point(s)";
       }
    else{
        humanCompteur++;
        resultat.textContent="tu a gagner cette manche!"
        score.textContent ="HUMAIN:"+ humanCompteur.toString()+"point(s)"+" "+"ORDINATEUR:"+computerCompteur.toString()+"point(s)";
        
    }
   

    if (humanCompteur===5){
        resultat.textContent = "tu a gagner la partie";
        bouttonCiseaux.disabled = true;
        bouttonPierre.disabled = true;
        bouttonFeuille.disabled = true;
        boutonRejouer.style.display= "block"
      
            }
    
    
    else if (computerCompteur===5){
        resultat.textContent = "l'ordinateur gagne la parti!";
        bouttonCiseaux.disabled = true;
        bouttonPierre.disabled = true;
        bouttonFeuille.disabled = true;
        boutonRejouer.style.display= "block"
    }
    
}
boutonRejouer = document.querySelector(".rejouer")
boutonRejouer.addEventListener("click",function(){
                reset()  
    })
// la fonction de relance du jeu
function reset(){
    humanCompteur =0;
    computerCompteur=0;
    bouttonCiseaux.disabled = false;
    bouttonPierre.disabled = false;
    bouttonFeuille.disabled = false;
    boutonRejouer.style.display= "none";
    resultat.textContent = "";
    score.textContent = "";
}


