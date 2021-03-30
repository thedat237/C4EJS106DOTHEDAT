// console.log('hello');
// setTimeout(function(){
//     console.log('how are you');
// },5000)

// setInterval(function(){
//     console.log('good bye');
// },5000)


items = ["backpack","Miband","Ring"]
let listItem = document.getElementById('list-item')
let addBtn = document.getElementById('add-btn')
let addInput = document.getElementById('add-input')
let updateInput=document.getElementById('update-input')
let saveBtn=document.getElementById('save-btn')
render()


addBtn.addEventListener('click',addItemHander)

function removeItemHandler(e) {
    let parentElement=e.target.parentElement
    let removeItem=parentElement.outerText.replace('remove', '')
    let removeIndex=items.indexOf(removeItem)
    items.splice(removeIndex,1)
    render()
}

function updateItemHandler(e) {
    let parentElement1=e.target.parentElement
    let updateItem=parentElement1.outerText.replace('remove update', '')
    let updateIndex=items.indexOf(updateItem)
    updateInput.value=updateItem

    saveBtn.addEventListener('click',function(){
        let newInput=document.getElementById('new-input')
        let newValue=newInput.value
        items[updateIndex]=newValue
        updateInput.value=''
        newInput.value=''
        render()
    })
    
}

function addItemHander(){
    let addInput = document.getElementById('add-input')
    let addValue = addInput.value
    items.push(addValue)
    addInput.value = ''
    render()
}

function render(){
    listItem.innerHTML=''
    for(let item of items){
    let li =` <li>${item}<button class='remove-btn'>remove</button> <button class='update-btn'>update</button> </li>`
    listItem.innerHTML += li
    let removeBtn=document.getElementsByClassName('remove-btn')
    for(let btn of removeBtn){
        btn.addEventListener('click',removeItemHandler)
        }
    let updateBtn=document.getElementsByClassName('update-btn')
     
    for(let btn of updateBtn){
        btn.addEventListener('click',updateItemHandler)
    }
    }
}

 console.log(listItem)
 console.log(addBtn)
 console.log(addInput)

