function clickMenu() {

    if(itens.style.display == 'flex') {
        itens.style.display = 'none';
        document.body.style.overflowY = 'auto';
    } else {
        itens.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    }

}