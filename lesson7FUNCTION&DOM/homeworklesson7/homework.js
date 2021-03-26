// 1.
// viết hàm tính tbc điểm của học sinh
// alert ra màn hình học lực của học sinh đó

let listMark=[8,9,9,8]
getRank(averageCaculate,listMark)
function getRank(caculate, listMark){
    let average = caculate(listMark)
    if(average < 5){
        console.log("yeu")
    }else if(average < 8){
        console.log("kha")
    }else{
        console.log("pro")
    }

}

function averageCaculate(listMark){
    let sum = 0;
    let average = 0
    let len = listMark.length
    for(let num of listMark){
        sum += num
    }
    average = sum / len
    return average
}


// 2.
// "Viết hàm giải phương trình bậc 2 một ẩn: ax2 + bx + c = 0
// Tham số truyền vào: a, b, c

// function ptbac2(a,b,c) {
//     let x
//     if(a==0){
//             x=-c/b
//             console.log(`Phương trình có nghiệm duy nhất: ${x}`);
//         }
//     else{
//         let delta=b*b-4*a*c  // delta=b**2 -4*a*c
//         if(delta>0){
//             let x1=(-b+Math.sqrt(delta))/(2*a)
//             let x2=(-b-Math.sqrt(delta))/(2*a)
//             console.log(`Phương trình có 2 nghiệm phân biệt: x1=${x1} \n x2=${x2}`);
//         }
//         else if(delta==0){
//             x=-b/2*a
//             console.log(`Phương trình có nghiệm kép: ${x}`);
//         }
//         else{
//             console.log(` Phương trình vô nghiệm `);
//         }
//     }
// }
// ptbac2(2,-7,3)



