console.log("a.")
let a=prompt("Nhập môn 1");
let b=prompt("Nhập môn 2");
let c=prompt("Nhập môn 3");
let a1=Number(prompt("Nhập điểm môn 1"));
let b1=Number(prompt("Nhập điểm môn 2"));
let c1=Number(prompt("Nhập điểm môn 3"));
console.log("Điểm tổng của Khánh trong năm học vừa rồi:");
console.log(`${a}:${a1}`);
console.log(`${b}:${b1}`);
console.log(`${c}:${c1}`);

let tb=Number;
tb=(a1+b1+c1)/3;
alert(`Điểm trung bình của Khánh: ${tb}`);
if(tb<4)
{
    alert("Kém");
}
else if(tb<6)
{
    alert("Trung bình");
}
else if(tb<8)
{
    alert("Khá");
}
else{
    alert("Giỏi");
}
