function menu() {
    const Menuicon = document.querySelector('.sidebar'); 
    Menuicon.style.display = 
    Menuicon.style.display === "none" ? "block" : "none";
}

function refresh(){    
    window.location.href = "Index.html";
}

function sidebar(){
    const Composite = document.querySelector('.Message_box')
    Composite.style.display = 
    Composite.style.display === "block" ? "none" : "block";
}

function More_option(){
    const hide = document.querySelector('.Hide')
    hide.style.display =
    hide.style.display === "block" ? "none" : "block";
}

function sent(){

    const textBoxSelect = document.querySelector(".text-box").value;
    localStorage.setItem("textbox", textBoxSelect);
}

function sentMsg(){    
    window.location.href = "sent.html";
}

function inbox(){
    window.location.href = "Inbox.html"
}

function draft(){
    window.location.href = "Draft.html"
}
