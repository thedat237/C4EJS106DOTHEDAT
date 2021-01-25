// console.log("Ex1");
// 1. var và const là kiểu khai báo biến trong JS
// 2. Sự khác nhau giữa var và let:
// - Phạm vi sử dụng của var có thể trong hoặc ngoài funcion, toàn cục.
// - Phạm vi sử dụng của let là trong một block, xác định bằng cặp dấu {}.
// 3. Sự khác nhau giữa var và const:
// - var có thể được cập nhật và khai báo lại trong phạm vi của nó, var có thể được khai báo mà không được khởi tạo.
// - const không thể cập nhật hoặc khai báo lại, const phải được khởi tạo trong quá trình khai báo.
// 4. Trường hơp sử dụng:
// - Dùng var khi cần truy cập biến nhiều lần.
// - Dùng let khi cần biến truy cập một lần, hiệu quả trong một vòng lặp.
// - Dùng const khi cần định nghĩa một hằng số.

// console.log("Ex2");
// Boolean is a data type with two possible values: true or false

// console.log("Ex3");
 console.log("a)");
 for(let i=0;i<7;i++)
 console.log(i);

// console.log("b)");
 let n=Number(prompt("Enter a number"));
 for(let i=0;i<n;i++)
 console.log(i)

// console.log("c)");
 let n=Number(prompt("Enter n"));
 for(let i=3;i<n;i++)
 console.log(i);

//console.log("d)");
 let c=Number(prompt("Enter c"));
 let n=Number(prompt("Enter n"));
 for(let i=c;i<n;i++)
 console.log(i);

// console.log("e)");
 let c=Number(prompt("Enter c"));
 let n=Number(prompt("Enter n"));
 for(let i=c;i<n;i+=3)
 console.log(i);

 console.log("f)");
 let c=Number(prompt("Enter c"));
 let n=Number(prompt("Enter n"));
 let s=Number(prompt("Enter s"));
 for(let i=c;i<n;i+=s)
 console.log(i);

// console.log("Ex4");
 fact = 1
 let n=Number(prompt("Enter a number"));
 for(let i=1;i<=n;i++)
 fact*=i;
 alert(`The factorial of ${n} is ${fact}`);

// console.log("Ex5");
 let age=Number(prompt("How old are you?"));
 if(age<14)
     {
         alert('You are not enough to view this content');
     }
 else
     {
         alert('Enjoy!');
     }

// console.log("Ex6");
 let x=Number(prompt("Enter a number"));
 for(let i=0;i<10;i++)
 if(x<4)
     {
         alert('Lower half of 9');
     }
 else
     {
         alert('Higher half of 9');
     }

// console.log("Ex7");
 let n=Number(prompt("n="));
 let x=Number(prompt("x="));
 for(let i=0;i<n;i++)
 if(x<n/2)
     {
         alert(`${x} is in lower half of ${n}`);
     }
 else
     {
         alert(`${x} is in higher half of ${n}`);
     }

// console.log("Ex8");
 let n=Number(prompt("n="));
 if(n%2==0)
     {
         alert(`${n} is an even number`);
     }
 else
     {
         alert(`${n} is an odd number`);
     }

// console.log("Ex9");
 console.log("a)");
  for(let i=0;i<6;i++)
  if(i<6/2)
  {
   console.log("L");
  }
  else{
    console.log("H");
  }
 

// console.log("b)");
 let n=Number(prompt("Enter the total number of L's and H's"));
 for(let i=0;i<n;i++)
 if(i<=n/2)
 {
   console.log("L");
 }
 else{
   console.log("H");
 }
  
  

// console.log("c)");
 for(let i=0;i<8;i++)
 if(i%2==0)
     {
         console.log(0);
     }
 else 
     {
         console.log(1);
     }

// console.log("d)");
 let n=Number(prompt("Enter the total number of 1's and 0's"));
 for(let i=0;i<n;i++)
 if(i%2==0)
     {
         console.log(0);
     }
 else
     {
         console.log(1);
     }


// console.log("Ex10")
 let weight=Number(prompt("Your weight in kg"));
 let height=Number(prompt("Your height in cm"));
  height/=100;
  BMI=(weight/(height*height)).toFixed(1);
  
  alert(`Your BMI is ${BMI}`);
  if(BMI<16)
      {
          alert("You are severely");
      }
  else if(BMI<18.5)
      {
          alert("You are underweight");
      }
  else if(BMI<25)
      {
          alert("You are normal");
      }
  else if(BMI<30)
      {
          alert("You are overweight");
      }
  else
      {
          alert("You are obese")
      }
