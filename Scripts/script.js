


const chat = document.getElementById('chat');
const spin = document.getElementById('spin');
const body = document.getElementById('body');
const viewChat = document.getElementById('viewChat');
const sendMsg = document.getElementById('sendMsg');
const sendMsgIcon = document.getElementById('sendMsgIcon');
const radiate = document.getElementById('radiate');
const scrollIntoView = document.getElementById('scrollIntoView');



let name = prompt('Pleae enter your name!');
console.log(name);

// STYLES
function rotate(){
 spin.classList.add('spinAnimation')
 spin.classList.add('display')
}

function displayNone(){
    spin.classList.remove('display')
}

function radiateF(){
    if(chat.value.length == 0){
        radiate.style.animation = 'noSendMsgAlert 0.5s  linear infinite';
        
    }
    else{
        radiate.style.animation = '';
        radiate.style.animation = 'sendMsgAlert 0.5s  linear infinite';
    }
}

function noRadiateF(){
    radiate.style.animation = '';
}



chat.addEventListener('focus', rotate)
viewChat.addEventListener('click', displayNone)
viewChat.addEventListener('mouseover', noRadiateF)
sendMsg.addEventListener('mouseover',radiateF)
// sendMsg.addEventListener('click',msgSentF)

// STYLES

//FUNCTIONALITY

function renderMsg(){
    if(name==false){
        name = 'User'
    }
    if(chat.value.length==0){
        // console.log('type something');
        radiate.style.animation='notSentMsgAlert 1s 1';
    }
    else{
    const div = document.createElement('div');
    const spanName = document.createElement('span');
    // spanName.classList.add('spanName');
    const text = document.createTextNode(chat.value);
    radiate.style.animation = 'sentMsgAlert 1s 1';
    let audio = new Audio('SF/WhatsApp Sending Message Sound Effect.mp3')
    audio.play()
    // console.log(chat.value);
    chat.value = '';
    div.appendChild(text);
    spanName.innerHTML=' - ' + name;
    div.appendChild(spanName);
    viewChat.appendChild(div);
    // viewChat.appendChild(spanName);
    scrollIntoView.scrollIntoView();


    const message = document.getElementById('chat').value;


    
}
}

function otherUser(msgFromOtherUser){
    let div = document.createElement('div');
    let text = `Other User - ${msgFromOtherUser}`;
    div.innerHTML = text;
    div.classList.add('chat__otherUserChat')
    let audio = new Audio('SF/note.mp3')
    audio.play()
    viewChat.appendChild(div);
    scrollIntoView.scrollIntoView();
    console.log(text);

}

sendMsg.addEventListener('click',renderMsg)