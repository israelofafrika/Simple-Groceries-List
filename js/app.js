window.onload=()=>{
const textInput = document.getElementById("input-value")
const submitBtn = document.querySelector(".submitBtn")
const clearBtn = document.querySelector(".clearBtn")
const itemContainer = document.querySelector(".list-items")
const feedback = document.querySelector(".feedback")




const fetchInputFn =  ()=>{
    return textInput.value 
}



const submitBtnFn = ()=>{
    if (fetchInputFn().length == 0){
        feedback.insertAdjacentHTML("afterbegin",  `<p> No ITEM INPUTTED</p>`)
        feedback.classList.add("alert-danger", "alert-success", "showItem")
        setTimeout(()=>{
            feedback.classList.remove("alert-danger", "alert-success",  "showItem");
            feedback.removeChild(feedback.firstChild)
    }, 1500)

    }
    else {
        itemContainer.insertAdjacentHTML("afterbegin", `<div class="item my-3 d-flex justify-content-between p-2">
        <h5 class="item-title text-capitalize" >${fetchInputFn()}</h5>
        <span class="remove-icon text-danger"><i class="fas fa-trash" data-id = "deleteBtn"></i></span>
       </div>`)
       textInput.value = ""
        //console.log(fetchInputFn())
        feedback.insertAdjacentHTML("afterbegin",  `<p> ITEM ADDED SUCCESSFULLY </p>`)
        feedback.classList.add("alert-danger", "alert-success",  "showItem")
        setTimeout(()=>{feedback.classList.remove("alert-danger", "alert-success",  "showItem");
        feedback.removeChild(feedback.firstChild)}, 1500)
    }
}



document.addEventListener("click",(e)=>{
    if (e.target.dataset.id == "deleteBtn"){
        itemContainer.removeChild(e.target.parentElement.parentElement)
    }
})

const closeBtnFN = ()=>{
    while(itemContainer.parentNode){
        itemContainer.removeChild(itemContainer.firstChild)
        // feedback.insertAdjacentHTML("afterbegin",  `<p> ITEM REMOVED SUCCESSFULLY </p>`)
        // feedback.classList.add("alert-danger", "alert-success",  "showItem")
        // setTimeout(()=>{feedback.classList.remove("alert-danger", "alert-success",  "showItem");
        // feedback.removeChild(feedback.firstChild)}, 4000)
    }
}




submitBtn.addEventListener("click", submitBtnFn)
clearBtn.addEventListener("click", closeBtnFN)


























}