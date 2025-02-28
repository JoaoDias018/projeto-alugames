function alterarStatus(id){
    let dash = document.getElementById(`dash-${id}`);
    let button = document.getElementById(`button-${id}`);
    if (dash.classList.toString() == "dashboard__item__img"){
        dash.classList.replace('dashboard__item__img','dashboard__item__img--rented');
        button.classList.replace('dashboard__item__button', 'dashboard__item__button--return');
        button.innerHTML = 'Devolver';
    } else {
        if(confirm(`Você tem certeza que deseja devolver o jogo ?`)) {
            dash.classList.replace('dashboard__item__img--rented','dashboard__item__img');
            button.classList.replace('dashboard__item__button--return', 'dashboard__item__button');
            button.innerHTML = 'Alugar';
        }    
    }
}