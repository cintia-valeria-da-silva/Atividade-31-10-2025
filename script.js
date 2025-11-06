document.getElementById('forminscricao').addEventlistener('submit', function(e) {
    e.preventDefault();

    document.getElementById("mensagemConfirmacao").style.display="block";
    document.getElementById("formInscricao").style.display="none";
});

document.getElementById("voltarBtn") .addEventlistener("click",function(){
    document.getElementById("formInscricao").style.display="block"
    document.getElementById("mensagemConfirmacao").style.display="none";
});
