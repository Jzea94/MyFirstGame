function startGame(){
    let buttonSelectPet = document.getElementById('button_Select_Pet')
    buttonSelectPet.addEventListener('click', selectPet)
}

function selectPet (){

    let inputCharizard = document.getElementById('charizard')
    let inputVaporeon = document.getElementById('vaporeon')
    let inputNidoking = document.getElementById('nidoking')
    let spanPetName = document.getElementById('pet_Name')

    if (inputCharizard.checked){
        spanPetName.innerHTML= 'Charizard'
    }    else if (inputVaporeon.checked){
        spanPetName.innerHTML= 'Vaporeon'
    }    else if (inputNidoking.checked){
        spanPetName.innerHTML= 'Nidoking'
    }    else{
        alert('Selected a pet')
    }

    selectEnemyPet()
}

function selectEnemyPet(){
    let  enemyPetName = aleatorio(1,3)
    let spanEnemyPetName = document.getElementById('enemy_Pet_Name')
    if (enemyPetName == 1) {
        spanEnemyPetName.innerHTML = 'Charizard'
    } else if (enemyPetName == 2){
        spanEnemyPetName.innerHTML = 'Vaporeon'
    } else{
        spanEnemyPetName.innerHTML = 'Nidoking'
    }

}

function aleatorio (min, max){
   return Math.floor(Math.random() * (max - min +1)+1)
}

window.addEventListener('load', startGame)