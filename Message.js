// chatting message object 
const chatForm = document.querySelector(".chat form");
console.log(chatForm);


chatForm.addEventListener("submit", sendChattingMessage);

function sendChattingMessage(event){
    event.preventDefault();
    const input = chatForm.querySelector("input");
    //console.log(input.value);
    // 서버로 메시지 보낸다
    //
    chattingList.addMessage("나", input.value);
    input.value = "";
    
}

function recieveChattingMessage(name, message){
    chattingList.addMessage(name, message);
}

class Message {
    constructor(name, message, className){
        this.elements = {};
        this.elements.root = Message.createRoot();
        this.elements.root.classList.add(className);
        this.elements.root = `${name} : ${message}`; 
    }

    static createRoot(){
        const range = document.createRange();
		range.selectNode(document.body);
		return range.createContextualFragment(`
			<div class="chat"></div>
		`).children[0];
    }

    static returnMessage(){
        
    }
}

class ChattingList {
    constructor(root){
        this.root = root;
    }

    addMessage(name, message){
        const className = "";
        
        const msg = new Message(name, message, className);
        this.root.append(msg.elements.root);
    }
}

const chattingList = new ChattingList(document.querySelector(".chat-box"));



