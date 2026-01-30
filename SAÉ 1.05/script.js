let images = document.querySelectorAll(".image-cliquable");
let popup = document.querySelector(".popup");

let popupImage = document.getElementById("popup-image");
let popupTitle = document.getElementById("popup-title");
let popupResume = document.getElementById("popup-resume");
let popupLike = document.getElementById("popup-like");

let fermer = document.querySelector(".cache-fenetre");

images.forEach(function(image){
    image.addEventListener("click", function(){

        popupImage.src = image.src;
        popupTitle.innerHTML = image.dataset.title;
        popupResume.innerHTML = "<strong>Résumé :</strong> " + image.dataset.resume;
        popupLike.innerHTML = "<strong>Pourquoi j’aime cette série :</strong> " + image.dataset.like;

        popup.classList.remove("popup-invisible");
        popup.classList.add("popup-visible");
    });
});

fermer.addEventListener("click", function(){
    popup.classList.add("popup-invisible");
});


// prévisualisation formulaire
document.getElementById("titre").addEventListener("keyup", function(){
    document.getElementById("titleuser").innerHTML = this.value;
});

document.getElementById("description").addEventListener("keyup", function(){
    document.getElementById("descriptionuser").innerHTML = this.value;
});

// bouton envoyer
document.getElementById("button").addEventListener("click", function(){
    let titre = document.getElementById("titre").value;
    let description = document.getElementById("description").value;
    let email = document.getElementById("email").value;

    if(titre === "" || description === "" || email === ""){
        alert("Veuillez remplir tous les champs");
        return;
    }
    let imageSerie = document.getElementById("image-serie").value.trim();

    if(imageSerie === ""){
    alert("Veuillez ajouter le lien de l'image de la série");
    return;
}

    alert("Merci pour votre série préférée !");
});

// prévisualisation image série utilisateur
document.getElementById("image-serie").addEventListener("keyup", function(){
    let imageUrl = this.value;
    let imageUser = document.getElementById("imageuser");

    if(imageUrl !== ""){
        imageUser.src = imageUrl;
        imageUser.style.display = "block";
    } else {
        imageUser.style.display = "none";
    }
});



