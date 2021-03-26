// 1:
//1-b 2-a 3-c 4-d

// 2:
// let a=setInterval(function(){
//         console.log('hello');
//     },1000)

// 3:
// 3.1: No
// 3.2: No

// 4:
// let li=document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// function change() {
//     for(let items of li){
//         console.log(items);
//     }
// }
// change()


// 5:
// let a=document.getElementsByTagName('div')
// console.log(a);
// console.log(a[2]);
// let div=document.getElementsByClassName('singer')
// console.log(div)
// function change(params) {
//     for(let singer of div){
//         console.log(singer);
//     }
// }
// change()


// 6:
// 7:
// 8:

// function doThisYear(params) {
//     alert('Do The Dat')
//     alert('Learn more')
// }
// doThisYear()

// 9:
// function userName(params) {
//     let a=prompt("input your name")
//     alert(a)
// }
// function userWish(){
//     let b=prompt("input your wish")
//     alert(b)
// }
// userName()
// userWish()

// 10:
// function userName(params) {
//         let a=prompt("input your name")
//         alert(a)
//     }
//     function userWish(){
//         let b=prompt("input your wish")
//         if(b==''){
//             alert('You have not a wish')
//         }
//         else{
//             alert(b)
//         }
//     }
//     userName()
//     userWish()

// 11:
// let input=document.getElementById('name-input')
// let upperBtn=document.getElementById('upper-btn')
// let div=document.getElementById('result-div')
// /*11.2 */
// console.log(upperBtn);
// /*11.3*/
// upperBtn.addEventListener('click',change)

// function change() {
//     console.log('Upper it!!! just clicked');
// }
// /*11.4*/
// console.log(input);
// /*11.5*/
// /*11.6*/
//  function upper(){
//     console.log(`User's name:${input.value}`);
//     let upper=input.value.toUpperCase()
//     console.log(`User name uppercase: ${upper}`);
// }
// upperBtn.addEventListener('click',upper)
// /*11.7*/
// console.log(div);
// /*11.8*/
// function changeDiv(){
//     let upper=input.value.toUpperCase()
//     div.innerHTML=upper;
// }
// upperBtn.addEventListener('click',changeDiv)

// 12:

let items=['Backpack','MiBand watch','Ring']
let list=document.getElementById('item_list_ul')
let li=document.getElementsByTagName('li')
let btnAdd=document.getElementById('add_btn')
let input=document.getElementById('item_input')
let btnRemove=document.getElementById('btn_remove')

// 12.1:
console.log(items);
// 12.3:
console.log(list);
// 12.4:
// li[0].remove()
// li[0].remove()
// 12.7:
function clickAdd(){
    console.log('Add button clicked');
}
btnAdd.addEventListener('click',clickAdd)
// 12.8:
function add(){
    let newItems=input.value
    console.log(newItems);
}
btnAdd.addEventListener('click',add)
// 12.9:
function add1(){
    items.push(input.value)
    console.log(items);
}
btnAdd.addEventListener('click',add1)
// 12.10:
function update(){
    list.insertAdjacentHTML('beforeend','<li>'+input.value+'</li>') 
}
btnAdd.addEventListener('click',update)

// btn.addEventListener('click',function(){
//     list.innerHTML+='<li>' + input.value +'</li>'
// })

function clickRemove(){
    console.log('Remove');
}
btnRemove.addEventListener('click',clickRemove)






