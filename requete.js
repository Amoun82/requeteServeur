/* variable permettant l'affichage de la requete */
const divAfficher = document.getElementById('afficher') ;
const divAff = document.getElementById('aff') ;


function requete()
{
    fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
    /* sert a vérifier que la requete et recupere */
    .then(function(recupere){
        if(recupere.ok)
        return recupere.json() ;
    })
    .then(function(valeur){
        
        console.log(valeur) ;
        
        divAfficher.innerHTML = "id: " + valeur.product.id + "<br>" ;

        let x = 0 ;
        for(let i of valeur.product._keywords )
        {
            x++;
            divAfficher.innerHTML += "<br>" + `ligne numero ${x} : ` + i ;
        }
        
    })

    .catch(function(erreur){
        document.write('erreur') ;
        console.log(erreur) ;
    })
}


/* variable permettant l'ajout du paragraphe est de la classe */
const p = document.createElement('p') ;

document.getElementById('affichage').appendChild(p) ;

p.classList.add("rien") ;

/* variable permettant l'écoute */
const monText = document.getElementById('monText') ;

/* écoute l'input pour vérifier ca validiter */
monText.addEventListener('change', (event) => {
    const regex = /^([a-zA-Z ]+)$/ ;
    console.log(event) ;
    const test = event.target.value ;

    console.log(test) ;

    if(test.match(regex))
    {
        p.innerHTML = 'tu as le droit' ;
        remplace(true,p) ;
    }
    else
    {
        p.innerHTML = 'tu n as pas le droit' ;
        remplace(false,p)
    }
})

/* variable permettant l'ajout du paragraphe est de la classe */
const p1 = document.createElement('p') ;

document.getElementById('affichage').appendChild(p1) ;

p1.classList.add("rien") ;

/* variable permettant l'écoute */
const mesChiffres = document.getElementById('mesChiffres') ;

/* écoute l'input pour vérifier ca validiter */
mesChiffres.addEventListener('change', (event) =>{
    const regex = /^([0-9]){4}$/ ;

    if(event.target.value.match(regex))
    {
        p1.innerHTML = 'c\'est le bon' ;
        remplace(true,p1) ;
    }
    else
    {
        p1.innerHTML = 'ce n\'est pas bon' ;
        remplace(false,p1)
    }    
})

/* variable permettant l'ajout du paragraphe est de la classe */
const p2 = document.createElement('p') ;

document.getElementById('affichage').appendChild(p2) ;

p2.classList.add("rien") ;

/* variable permettant l'écoute */
const monTextSuivant = document.getElementById('monTextSuivant') ;

/* écoute l'input pour vérifier ca validiter */
monTextSuivant.addEventListener('change', (event) =>{
    const regex = /le code est ([0-9]{4}$)/i ;

    if(event.target.value.match(regex))
    {
        p2.innerHTML = 'c\'est un bon code' ;
        remplace(true,p2) ;
    }
    else
    {
        p2.innerHTML = 'ce n\'est pas un bon code' ;
        remplace(false,p2) ;
    }

})

/* variable permettant l'ajout du paragraphe est de la classe */
const p3 = document.createElement('p') ;

document.getElementById('affichage').appendChild(p3) ;

p3.classList.add("rien") ;

/* variable permettant l'écoute */
const encoreMonTextSuivant = document.getElementById('encoreMonTextSuivant') ;

/* écoute l'input pour vérifier ca validiter */
encoreMonTextSuivant.addEventListener('change', (event)=>{
    const regex = /le mot de passe est ([a-zA-Z])/i ;

    if(event.target.value.match(regex))
    {
        p3.innerHTML = 'tu as mis le bon mot de passe' ;
        remplace(true,p3) ;
    }
    else
    {
        p3.innerHTML = 'tu n\'as pas mis le bon mot de passe' ;
        remplace(false,p3) ;
    }
})


/* fonction remplacant la class du paragraphe */
function remplace(test,para)
{
    if(para.classList.contains('rien') == true && test == true)
    {
        para.classList.replace('rien','bon') ;
    }
    else if(para.classList.contains('rien') == true && test == false)
    {
        para.classList.replace('rien','mauvais') ;
    }
    else if(para.classList.contains('mauvais') == true && test == true)
    {
        para.classList.replace('mauvais', 'bon') ;
    }
    else if(para.classList.contains('bon') == true && test == false)
    {
        para.classList.replace('bon', 'mauvais')
    }
    console.log(para)    
}

function bouton(valeur)
{
    if(valeur)
        document.getElementById('submit-btn').setAttribute("disabled",true) ;
    else
        document.getElementById('submit-btn').removeAttribute("disabled") ;
}
  
document
    .getElementById("code")
    .addEventListener("input", function(valeur) {
    if (/^CODE-/.test(valeur.target.value))
    {
        document.getElementById("code-validation").innerText = "Code valide";
        bouton(false);
    }
    else
    {
        document.getElementById("code-validation").innerText = "Code invalide";
        bouton(true);
    }
});


const boutonBas = document.querySelector("button");

boutonBas.setAttribute("id", "boutonBas");
console.log(boutonBas)

boutonBas.addEventListener("click" , () =>{
        document.getElementById('leResultat').innerHTML = "coucou" ;
        boutonBas.setAttribute("id" , "boutonBas1")
        boutonBas.setAttribute("disabled", "");
        console.log(boutonBas) ;
});



const boutonActiver = document.querySelector("#boutonActiver")

boutonActiver.addEventListener("click", ()=>{
    boutonBas.removeAttribute("disabled") ;
    document.getElementById('leResultat').innerHTML = "" ;
}) ;


const codeAtester = document.getElementById('codeAtester') ;
const boutonSubmit = document.getElementById('boutonSubmit') ;

function boutonAValider(valeur)
{
    if(valeur)
        boutonSubmit.removeAttribute("disabled") ;
    else
        boutonSubmit.setAttribute("disabled", "")
}

codeAtester.addEventListener('input', function(valeur){
    if(/^ici/.test(valeur.target.value))
    {
        
        boutonAValider(true) ;
    }
    else
    {
        boutonAValider(false) ;
    }
      
}) ;

function appel()
{
    fetch("https://mockbin.com/request?attention=le message a été envoyé<br>mais c'est quand local")
    .then(function(recupere) {
    if (recupere.ok) {
      return recupere.json();
    }
  })
  .then(function(value) {
    console.log(value);  
    document
        .getElementById('afficherReponse')
        .innerHTML = value.queryString.attention ;

        
  })
  .catch(function(err) {
    document.write("erreur") 
    console.log(err) ;
  });
}


function envoyer(e) {
    e.preventDefault();
    fetch("https://mockbin.com/request", {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({valeur: document.getElementById("value").value + " " + document.getElementById("value2").value})
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        document
          .getElementById("result")
          .innerText = value.postData.text;
          console.log(value)
    });
  }
  
  document
    .getElementById("form")
    .addEventListener("submit", envoyer);
  