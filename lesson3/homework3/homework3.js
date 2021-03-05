// console.log("Ex1")
// console.log("1.")
// let a=5;
// let b=6;
// [a,b]=[b,a];
// console.log(a,b);
// console.log("2.");
// let a=5;
// let b=6;
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log(a,b);

// console.log("EX2")
// const s="Hello beauty there";
// const a=s.split(" ",3);
// console.log(a);

// console.log("Ex3")
// const a = [4, 5, 7, -8];
// console.log(...a);

// console.log("Ex4")
// let items=["Jeans","T-Shirt","Socks"];
// while(true)
//      {
//          let a=prompt("Hi there, welcome to shop  admin panel, what do you want (C, R, U, D) ?");
//          {
//             if (a=="r")
//             {
//                 // console.log(`The  current items are `);
//                 alert(`The current items are ${items}`);
//             }
//              else if (a=="c")
//          {
//              let newitem=prompt("Enter the name of the new item");
//              alert("Done");
//              items.push(newitem);
             
//              alert(items);
//          }
//         else if(a=="u")
//          {
//              let positionup=prompt("Enter the position you want to update");
//              let newname=prompt("Enter the new name");
//              alert("Done");
//              for(let i=0;i<=items.length;i++)
//              if(positionup==i)
//                  {
//                      items[i]=newname;
//                      alert(items);
//                  }
//         }
//         else if(a=="d")
//         {
//             let positionde=prompt("Enter the position you want delete");
//                 {
//                     for(let i=0;i<=items.length;i++)
//                     if(positionde=i)
//                     {
//                         items.splice(i,1);
//                         alert(items);
//                     }
//                 }
//             }
//         else
//          {
//               alert("This command is not supported");
//               break;
//          }
//      }
//     }
    
 

// console.log("Ex5")
// let nums=(prompt("Enter a squence of Number, sparated by commas (,)"));
// let sum=Number;
// sum=0;
// nums=nums.split(",");
// for(let i=0;i<nums.length;i++)
// sum+=parseInt( nums[i]);
//     {
//     alert(`The sum of them is ${sum}`);
//     }

// console.log("Ex6")
// let nums=prompt("Enter a squence of Number, sparated by ","");
// let min=Number;
// nums=nums.split(",");
// min=nums[0];
// for(let i=0;i<nums.length;i++)
// if(nums[min]>nums[i])
// {
//     min= nums[i];
//     alert(`The smallest number is ${min}`);
// }


// console.log("Ex7")
// let arr=[3,4,6,-9,10,-88,2];
// let a=Number(prompt("Enter a number"));
// let check=arr.indexOf(a);
//     {
//         if(check ===-1)
//         {
//             alert(`${a} is NOT FOUND in my array`);
//         }
//         else
//         {
//              alert(`${a} is FOUND in my array at index ${check}`);
//         }
//     }

// console.loh("Ex8")
// let arr=[5,7,300,90,24,50,75]
// console.log("Hello, my name is Phuong Nam and here is my sheep sizes:")
// console.log(...arr)
// let max=Math.max(...arr);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);
// let position=arr.indexOf(max)
// arr[position]=8;
// console.log("After shearing, here is my flock")
// console.log(...arr);
// console.log("MONTH1")
// console.log("One month has, passed, my sheeps have grown, here are their sizes")
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=arr[i]+50;
// }
// console.log(...arr)
// {
//     let max=Math.max(...arr);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);
// let position=arr.indexOf(max)
// arr[position]=8;
// console.log("After shearing, here is my flock")
// console.log(...arr);
// }

// console.log("MONTH2")
// console.log("One month has, passed, my sheeps have grown, here are their sizes")
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=arr[i]+50;
// }
// console.log(...arr)
// {
//     let max=Math.max(...arr);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);
// let position=arr.indexOf(max)
// arr[position]=8;
// console.log("After shearing, here is my flock")
// console.log(...arr);
// }

// console.log("MONTH3")
// console.log("One month has, passed, my sheeps have grown, here are their sizes")
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=arr[i]+50;
// }
// console.log(...arr)
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
//     sum+=arr[i];
// }
// console.log(`My flock has size in total:${sum} `)
// let money=2;
// console.log(`I would get ${sum}*${money}$ = ${sum * money}`)

// console.log("Ex9")
// console.log("Ex10")
// let ques=prompt("Enter a sequence of names");
// ques=ques.split(",");
// let ques2=[];
// for(let name of ques)
// {
//     name=`<${name}>`;
//     ques2.push(name);
// }
// alert(`${ques}=>${ques2}`);

// console.log("Ex11")
// let numbers=prompt("Enter a sequence number");
// numbers=numbers.split(",");
// let numbers2=[];
// let number=Number;
// for(let number of numbers)
// {
//     if(number%2!==0)
//     {
//         numbers2.push(number);
//     }
// }
// alert(`${numbers}=>${numbers2}`);

// console.log("Ex12")
// let members=["Dat","Ha","Hien","Hoang"]
// while(true)
// {
//     let ans=prompt("Nguoi dung muon thao tac (C, R, U, D)")
//     if(ans=="C")
//     {
//         let ans1=prompt("Muon them hoc sinh nao")
//         members.push(ans1)
//         alert(members);
//     }
//     else if(ans=="R")
//     {
//         let ans2=prompt("Muon xem hoc sinh o vi tri bao nhieu")
//         for(let i=0;i<=members.length;i++)
//         {
//             if(ans2==i)
//             {
//                 alert(members[i])
//             }
//         }
//     }
//     else if(ans=="U")
//     {
//         let ans3=prompt("Muon update hoc sinh o vi tri bao nhieu")
//         for(let i=0;i<=members.length;i++)
//         {
//             if(ans3==i)
//             {
//                 members[i]="Hai"
//                 alert(members)
//             }
//         }
//     }
//     else if(ans=="D")
//     {
//         let ans4=prompt("Muon xoa hoc sinh o vi tri bao nhieu")
//         for(let i=0;i<=members.length;i++)
//         {
//             if(ans4==i)
//             {
//                 members.splice(i,1)
//                 alert(members)
//             }
//         }
//     }
//     else if(ans=="Q")
//     {
//         alert(members)
//         break
//     }
//     else
//     {
//         alert("Vui long nhap lai")
//         break
//     }

// }



 

