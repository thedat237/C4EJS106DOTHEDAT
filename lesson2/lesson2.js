
// let a=prompt("Nhập món 1");
// let a1=prompt("Nhập giá món 1");

// let b=prom("Nhập món 2");
// let b1=prompptt("Nhập giá món 2");

// let c=prompt("Nhập món 3");
// let c1=prompt("Nhập giá món 3");

// console.log(a);
// console.log(a1);
// console.log(b);
// console.log(b1);
// console.log(c);
// console.log(c1);

// for(let i=0;i<3;i++){
//  let a=prompt("Nhập món");
//  let b=prompt("Nhập giá");
// console.log(`${a}: ${b}`);
// }

// console.log("bài1")
//  for(let i=0;i<=100;i++){
//  console.log(i);}
// console.log("bài2")
//  for (let i=100;i>=0;i--)
//  {console.log(i);}
// console.log("bài3")
//  for(let i=0;i<=50;i+=2)
//  {console.log(i);}

// let m=Number(prompt("Nhập số m"));
// let n=Number(prompt("Nhập số n"));
// for(let i=m;i<=n;i++)
// console.log(i);
// while(m<=n)
// {console.log(m)
// m++;
// }

// let n=prompt("Nhập n");
// for(let i=3;i<=n;i+=3)
// console.log(i);

// let m=Number(prompt("Nhập m"));
// let n=Number(prompt("Nhập n"));
// for(let i=m;i<=n;i++)
// {
//     if(i%3==0)
//     {
//         console.log("Chia hết cho 3");
//     }
//     else if(i%5==0)
//     {
//         console.log("Chia hết cho 5");
//     }
//     else
//     {
//         console.log("Failed");
//     }
// }

// yêu cầu người dùng nhập tuổi từ đó in ra xem người dùng đã đủ tuổi lấy vợ hay chưa
// nếu tuổi <10 => trẻ con
// nếu tuổi <20 => chưa đủ tuổi
// nếu tuổi <60 => oke
// nếu tuổi >60 => già quá
while(true){
let age=Number(prompt("Nhập tuổi của người dùng"));
if(age==0)
    {
        break;
    }
else
{
    if(age<10)
        {
            console.log("Trẻ con");
        }
    else if(age<20)
        {
            console.log("Chưa đủ tuổi");
        }
    else if(age<60)
        {
            console.log("Oke");
        }
    else 
        {
            console.log("Già quá");
        }
    }
}