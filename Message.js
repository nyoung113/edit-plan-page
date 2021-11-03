// chatting message object 
const chatForm = document.querySelector(".chat form");
chatForm.addEventListener("submit", sendChattingMessage);

function sendChattingMessage(event){
    event.preventDefault();
    const input = chatForm.querySelector("input");
    //console.log(input.value);

    chattingList.addMessage("", input.value, "incoming");
    input.value = "";
}

// server side에서 전달 받을 때 사용할 함수
function recieveChattingMessage(name, message){
    chattingList.addMessage(name, message, "outgoing");
}

class Message {
    constructor(name, message, className){
        this.elements = {};
        this.elements.root = Message.createRoot();
        this.elements.root.classList.add(className);

        if(className === "outgoing"){

            this.elements.root = `${name} : ${message}`; 
        }
        else{
            this.elements.root = `${message}`; 
        }
    }

    static createRoot(){
        const range = document.createRange();
		range.selectNode(document.body);
		return range.createContextualFragment(`
			<div class="chat"></div>
		`).children[0];
    }
}

class ChattingList {
    constructor(root){
        this.root = root;
    }

    addMessage(name, message, className){
        const msg = new Message(name, message, className);
        this.root.append(msg.elements.root);
    }
}

const chattingList = new ChattingList(document.querySelector(".chat-box"));

//chattng popup click
const chattingPopup = document.querySelector("#popup");

chattingPopup.addEventListener("click", showChatBox);

function showChatBox(){
    document.querySelector(".chat").style.display = "flex";
    chattingPopup.style.display = "none";
}

document.querySelector(".chat button").addEventListener("click", showChatPopup);
function showChatPopup(event){
    event.preventDefault();
    chattingPopup.style.display = "flex";
    document.querySelector(".chat").style.display = "none";
}