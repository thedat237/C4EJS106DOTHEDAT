// let obj = {
//     "mauDa": "vang",
//     mauYeuthich: "den",
//     age: 23,
//     list: ["dat", "ha", "hien"]
// }
// console.log(obj.mauDa)
// console.log(obj["mauDa"])
// console.log(obj.age)
// console.log(obj.list)

// for(let key in obj){
//     // console.log(key);
//     console.log(obj[key]);
// }

// for(let value of obj){
//     console.log(value);
// }

// let posts = {
//     10325:{
//         title:"Gia Bitcoin giam sau",
//         content:"bdsbadkjjdnsakj"
//     }
// }

let huanRose ={
    name:"Huấn Rô Xì",
    address:"Yên Bái",
    age:48,
    isMarried:true,
    favorites:["Ối dồi ôi","Giảng đạo"],
    wife:{
        name:"Ai đó",
        age:30
    },
    earnMoney:function(){
        console.log("Chỉ có làm mới có ăn")
    }
}
// // thêm thuộc tính cho object
huanRose.weight='hahaha';
console.log(huanRose);
// huanRose["height"]=180;
// huanRose.children=[
//     {name:"Child1",age:10},
//     {name:"Child2",age:12}
// ]
// console.log(huanRose.wife.name);

// // sửa giá trị thuộc tính
// huanRose.name="Huan Rose";
// huanRose.age=50


// // xóa thuộc tính
// delete huanRose.favorites;
// delete huanRose.address

// console.log(huanRose);

// // duyệt obj: bao nhiêu thuộc tính
// for(let key in huanRose)
// {
//     console.log("Key"+key+":"+huanRose[key]);
// }

// tạo 1 object là người yêu của các bạn gồm các thuộc tính:name, age, address, weight, height, favorites:[], crush:{name, age, address},
// apperance:[]

// let ngYeu={
//     name:"hahaha",
//     age:20,
//     address:"HP",
//     weight:50,
//     height:160,
//     favorites:["xem phim"],
//     crush:{
//         name:"hohoho",
//         age:19,
//         address:"HN"
//     },
//     appearance:[{face:"xinh"},{hair:"tóc đen"}]
// }
// console.log(ngYeu);

// let data = [
//     { id: 1, name: 'Loan', age: 20, address: "HN" },
//     { id: 2, name: 'Linh', age: 20, address: "HN" },
//     { id: 3, name: 'Lien', age: 21, address: 'TH' },
//     { id: 4, name: 'Hong', age: 40, address: 'BN' },
//     { id: 5, name: 'Hang', age: 32, address: 'QT' },
//     { id: 6, name: 'Huong', age: 15, address: 'HN' },
// ];
// for (let person of data) {
//     if (person.id == 3) {
//         console.log(person)
//         break
//     }
// }

// for(let Person1 of data){
//     if(Person1.age==20){
//         console.log(Person1.name)
//         break
//     }
// }

// for(let a of data){
//     if(a.age>20){
//         console.log(a.address)
//     }
// }

// for (let b of data) {
//     if(b.name[0]=='L'){
//             console.log(b.age)
//         }
//     }


// for(let obj of data){
//     if(obj.name.startsWith('L',0)){
//         console.log(obj.name);
//     }
// }

// let films = [
//     {
//         id: 1,
//         name: 'Film 1',
//         year: 2020,
//         actors: [
//             'Actor 1',
//             'Actor 2',
//             'Actor 3'
//         ]
//     },

//     {
//         id: 2,
//         name: 'Film 2',
//         year: 2019,
//         actors: [
//             'Actor 2',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 3,
//         name: 'Film 3',
//         year: 2021,
//         actors: [
//             'Actor 1',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 4,
//         name: 'Film 4',
//         year: 2021,
//         actors: [
//             'Actor 2',
//             'Actor 1',
//             'Actor 5'
//         ]
//     }
// ];

//1. Tìm những phim sx vào năm 2020
//2. Nhập vào tên 1 diễn viên bất kì, tìm các phim có diễn viên đó tham gia
//3. Sắp xếp danh sách phim theo thứ tự năm sản xuất tăng dần

// for (let nameFilm of films) {
//     if (nameFilm.year == 2020) {
//         console.log(nameFilm.name)
//     }
// }

// let question = prompt("Nhập vào tên 1 diễn viên bất kì")
// for (let nameActor of films) {
//     for (let actor of nameActor.actors) {
//         if (actor == question) {
//             console.log(nameActor.name)
//         }
//     }
// }

// for(let film of films){
//     if(film.actors.includes(question)){
//         console.log(film)
//     }
// }

// let nums=[9,7,1,2,4,10,-1,3]
// for(let i=0;i<nums.length;i++){
//     for(let j=0;j<nums.length;j++){
//         if(nums[i]<nums[j]){
//             let tmp=nums[i]
//             nums[i]=nums[j]
//             nums[j]=tmp
//         }
//     }
// }
// console.log(nums)






