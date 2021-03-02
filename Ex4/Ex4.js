let a=Number(prompt("Nhập a"));
let b=Number(prompt("Nhập b"));
let c=Number(prompt("Nhập c"));
let d=Number;
let x=Number;
let y=Number;
let z=Number;
d=b*b-4*a*c;
if(d>0)
{
    console.log("PT có 2 nghiệm phân biệt");
    console.log(x=(-b+Math.sqrt(d))/(2*a));
    console.log(y=(-b-Math.sqrt(d))/(2*a));
}
else if(d<0)
{
    console.log("PT vô nghiệm");
}
else
{
    console.log("PT có nghiệm kép");
    console.log(z=-b/2*a);
}