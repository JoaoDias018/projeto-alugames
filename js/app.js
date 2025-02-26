function alterarStatus(id){
    switch (id){
        case 1 :
            alterarEstilo('dash_one','buttonOne');
        break;
        case 2 :
            alterarEstilo('dash_two','buttonTwo');
        break;
        case 3 :
            alterarEstilo('dash_three','buttonThree');
        break;
    }
}

function alterarEstilo(idDash, idButton){
    let dash = document.getElementById(idDash);
    let button = document.getElementById(idButton);
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