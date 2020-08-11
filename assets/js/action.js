const chatBot = document.querySelector('.btn-chat');
const chatBotBox = document.querySelector('.chat-bot');
const closeChat = document.querySelector('.close-chat')





chatBot.addEventListener('click', ()=>{
   document.querySelector('.chat-bot').style.display = 'block';
   console.log('pressed');

});

// chatBotBox.addEventListener('click', ()=>{
//     document.querySelector('.chat-bot').style.display = 'none'
 
//  });
 
closeChat.addEventListener('click', ()=>{
    document.querySelector('.chat-bot').style.display = 'none'
 
 });