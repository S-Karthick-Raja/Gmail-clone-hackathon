function call(){
    const emaillistsectionSelect = document.querySelector(".emaillist_section")
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