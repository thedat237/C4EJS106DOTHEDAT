// const DATE=fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
// console.log(DATE);

// async function getData(params) {
//     const DATE = await fetch(' https://pokeapi.co/api/v2/pokemon/pikachu/')
//     let data= await DATE.json()
//     console.log(data);
// }
// getData()

// in ra list email của người dùng trong data
// khi click vào email => in ra màn hình tất cả thông tin tương ứng của người đó
// bao gồm: họ tên+ảnh

// async function getData(params) {
//     const DATA=await fetch('https://reqres.in/api/users')
//     let Data=await DATA.json()
//     let dataEmail=Data.data
//     for(let item of dataEmail){
//         document.write('<p>Link:' + item.email.link(item.avatar)+'</p>')
        
//         // console.log(item);
//     }
// }
// getData()




// 1:
// let upBtn=document.getElementById('count-up')
// let downBtn=document.getElementById('count-down')
// let updateNum=document.getElementById('number')
// let number=0

// function countUp(params) {
//    number++
//     updateNum.innerHTML=number
// }
// upBtn.addEventListener('click',countUp)

// function countDown(params) {
//     number--
//     updateNum.innerHTML=number
// }
// downBtn.addEventListener('click',countDown)

// 2:

// let startBtn=document.getElementById('start')
// let stopBtn=document.getElementById('stop')
// let newNumber=document.getElementById('number')
// let numberInput=document.getElementById('number-input')

// let time
// function count(){
//     let number=numberInput.value
//     newNumber.innerHTML=number
//     time=setInterval(function(){
//         newNumber.innerHTML=number--
//     },1000)

// }
// startBtn.addEventListener('click',count)

// function stop(){
//     clearInterval(time)
// }
// stopBtn.addEventListener('click',stop)


// 3:
// let p=document.querySelector('p')
// let h4=document.querySelector('h4')
// async function getData(params) {
//     const DATA = await fetch(' https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')
//     let data= await DATA.json()
//     let randomQuote=Math.floor(Math.random()* (data.length))
//     // console.log(data[randomQuote].quoteText);
//     p.innerHTML=data[randomQuote].quoteText
//     h4.innerHTML=data[randomQuote].quoteAuthor
// }
// getData()

// let reload=document.getElementById('reload-btn')
// reload.addEventListener('click',getData)

// 4:
// let tbody=document.getElementById('ts_body')
// console.log(tbody);

// let timeSheetData = [
//     {
//         Project:'Learn front-end',
//         Task:'Learn HTML',
//         TimeSpent:6
//     },
//     {
//         Project:'Learn front-end',
//         Task:'Learn CSS',
//         TimeSpent:8
//     },
//     {
//         Project:'Learn front-end',
//         Task:'Learn JS Variables and Data Types',
//         TimeSpent:6
//     },
//     {
//         Project:'Learn git',
//         Task:'Learn git basics',
//         TimeSpent:2
//     }
// ]
// console.log(timeSheetData[0]);
// let projectInput=document.getElementById('project-input')
// let taskInput=document.getElementById('task-input')
// let timeInput=document.getElementById('time-input')
// let addBtn=document.getElementById('add-btn')
// render()



  
// function addItemHander(){
//     timeSheetData.push(
//         {Project:`${projectInput.value}`,
//         Task:`${taskInput.value}`,
//         TimeSpent:`${timeInput.value}`}
//     )
//     render()

// }

// function removeItemHandler(e){
//     let removeTr=e.target.parentElement.parentElement
//     let removeItem=removeTr.outerText.replace('X', '')
//     let removeIndex=timeSheetData.indexOf(removeItem)
//     timeSheetData.splice(removeIndex,1)
//     render()
// }

// function updateItemHandler(e){
//     let updateTr=e.target.parentElement.parentElement
//     let updateItem=updateTr.outerText.replace('XU', '')
//     let updateIndex=timeSheetData.indexOf(updateItem)
    
//     // for(let item of timeSheetData){
//     projectInput.value=updateItem
//     taskInput.value=updateItem
//     timeInput.value=updateItem  
//     // }
//     // let updateTr = e.target.parentElement
//     // // Hiển thị lên ô input
//     // projectInput.value = updateTr.children[0].innerHTML
//     // taskInput.value = updateTr.children[1].innerHTML
//     // timeInput.value = updateTr.children[2].innerHTML
//     render()
// }


// function render(){
//     tbody.innerHTML=''
//     for(let item of timeSheetData){
//         let tr=`<tr><td>${item.Project}</td><td>${item.Task}</td><td>${item.TimeSpent}</td><td><button class='remove-btn'>X</button></td><td><button class='update-btn'>U</button></td></tr>`
//         tbody.innerHTML+=tr 
//         addBtn.addEventListener('click',addItemHander)
//         let removeBtn=document.getElementsByClassName('remove-btn')
//         for(let btn  of removeBtn){
//             btn.addEventListener('click',removeItemHandler)
//         }
//         let updateBtn=document.getElementsByClassName('update-btn')
//         for(let btn of updateBtn){
//             btn.addEventListener('click',updateItemHandler)
//         }
//     }

// }




// console.log(tbody);
// console.log(item);




