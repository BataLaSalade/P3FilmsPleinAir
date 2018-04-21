$(document).ready(function() {
    console.log("bonjour")
    
    $("#formValidation").submit( function(event) {
        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated');
    });
})
// Voir avec Marc, j'ai voulu changer le nom de l'ID dans le html
// j'ai mis le même dans le .js mais le script ne fonctionne plus
// j'ai remis l'ID précédent et ça ne fonctionne plus non plus...