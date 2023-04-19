/*------------------------------------------ Global Variables---------------------------------------------*/
let attackPlayer
let varAttackEnemy

/*------------------------------------------ Start Game ---------------------------------------------*/
function startGame(){
    let buttonSelectPet = document.getElementById('button_Select_Pet')
    buttonSelectPet.addEventListener('click', selectPet)

    let buttonAttackFire = document.getElementById('button_Attack_Fire')
    buttonAttackFire.addEventListener('click' , attackFire )
    
    let buttonAttackWater = document.getElementById('button_Attack_Water')
    buttonAttackWater.addEventListener('click' , attackWater )
    
    let buttonAttackEarth = document.getElementById('button_Attack_Earth')
    buttonAttackEarth.addEventListener('click' , attackEart)

}

/*------------------------------------ Select Pet Player1-------------------------------------------*/
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

/*------------------------------------ Select Pet Enemy-------------------------------------------*/
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
/*----------------------------------------  Attack Player -----------------------------------------*/

function  attackFire (){    
    attackPlayer = 'Fire'
    attackEnemy()
}
function attackWater(){
    attackPlayer = 'Water'
    attackEnemy()
}
function attackEart(){
    attackPlayer = 'Earth'
    attackEnemy()
}

/*----------------------------------------  Attack Enemy -----------------------------------------*/
function attackEnemy(){
    let randomAttackEnemy = aleatorio(1,3)
        
    if (randomAttackEnemy == 1){
        varAttackEnemy = 'Fire'
    } else if (randomAttackEnemy == 2){
        varAttackEnemy = 'Water'
    } else{
        varAttackEnemy = 'Earth'
    }    
    createMassage()
}
/*------------------------------  HTML loaded in the browser ---------------------------------*/
function createMassage(){
    let sectionMessage = document.getElementById('message')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'You attack with '+ attackPlayer + ' --- Enemy pet attack with '+varAttackEnemy

    sectionMessage.appendChild(paragraph)
}

/*------------------------------  HTML loaded in the browser ---------------------------------*/

window.addEventListener('load', startGame)