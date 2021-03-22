// 1.
// viết hàm tính tbc điểm của học sinh
// alert ra màn hình học lực của học sinh đó

// function diemtbc(...others){
//     let tong=0;
//     for(let i of others){
//         tong+=i
//     }
//     let dtb=tong/4;
//     console.log(dtb);
//     if(dtb>=9){
//         alert(`Điểm trung bình:${dtb} => điểm giỏi`)
//     }
//     else if(dtb>=7 && dtb<9){
//         alert(`Điểm trung bình:${dtb} => điểm khá`)
//     }
//     else if(dtb>=5 && dtb<7){
//         alert(`Điểm trung bình:${dtb} => điểm trung bình`)
//     }
//     else{
//         alert(`Điểm trung bình:${dtb} => điểm yếu`)
//     }
// }
// diemtbc(8,6,9,7)

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
//         let delta=b*b-4*a*c
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



