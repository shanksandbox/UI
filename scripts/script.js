const tabItems = document.querySelectorAll(".tab-item")
const tabContentItems = document.querySelectorAll(".tab-content-item")
// console.log(tabItems)

function selectItem(event){
    //add border
    removeBorder();
    removeShow();
    this.classList.add("tab-border")
    //grid
    console.log(this.id)
    const contentItem = document.querySelector(`#${this.id}-content`)

    contentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove("tab-border"))
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show"))
}

tabItems.forEach(item => item.addEventListener("click", selectItem))
