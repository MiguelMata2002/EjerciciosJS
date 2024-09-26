document.querySelectorAll(`li`).forEach(function(item){
    item.addEventListener(`click`,function(){
        const idElemento=this.id;
        const isoId=this.getAttribute('data-id')
        const dialCode=this.getAttribute('data-dial-code');
        alert(
            `Elemento Seleccionado:
            "IdElemento:${idElemento}"
            "ISO ID:${isoId}"
            "Dial Code:${dialCode}"
            `
        )
    })
})