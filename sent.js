function call(){
    const emaillistsectionSelect = document.querySelector(".emailrow_message")
    emaillistsectionSelect.innerHTML = `    
    <h4>${localStorage.getItem("textbox")}</h4>`
};
call()

function inbox(){
    window.location.href = "Inbox.html"
}

function refresh(){    
    window.location.href = "Index.html";
}

function menu() {
    const Menuicon = document.querySelector('.sidebar'); 
    Menuicon.style.display = 
    Menuicon.style.display === "none" ? "block" : "none";
}

function menu() {
    const Menuicon = document.querySelector('.sidebar'); 
    Menuicon.style.display = 
    Menuicon.style.display === "none" ? "block" : "none";
}