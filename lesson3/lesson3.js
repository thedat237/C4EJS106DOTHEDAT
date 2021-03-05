  let movies=["batman","spiderman","hitman","pokemongo"];
// movies.push("Upin Ipin");// thêm vào cuối
// movies.unshift("Boooos");// thêm vào đầu
// console.log(movies);

// tạo ra 1 danh sách các bạn trong lớp
// hỏi ng dùng có muốn thêm thành viên mới không
// nếu có: thêm thành viên mới vào cuối danh sách
// nếu ko: in ra danh sách lớp và thoát chương trình

//  let classmember=["A","B","C"];
//  while(true)
//  {
//      let ans=prompt("Có muốn thêm ko? (Y/N)");
//      if(ans="Y")
//      {
//         let newmember=prompt("Tên của học sinh");
//         classmember.push(newmember);
//         console.log(classmember);

//      }
//      else{
//         console.log(classmember);
//          break;
//      }
//  }

// Read

// let firstMovies=movies[0];
// console.log(firstMovies);
// console.log(movies.length);
// for(let i=0;i<=movies.length;i++)
// console.log(movies[i]);

// for(let movie of movies)
//  {
//      console.log(movie);
//  }

//  for(let movie in movies)
//  {
//      console.log(movie);
//  }

// Update
//  movies[0]="Wonder Woman";
//  console.log(movies);
// movies[movies.length - 1]="Thuy Tinh";

// Delete
//  movies.splice(0);
// movies.splice(movies.length - 1);
movies.splice(1,movies.length - 1);
console.log(movies)


/*
tạo ra 1 ds các bạn trong lớp
hỏi ng dùng muốn thao tác (c,r,u,d)
nếu ng dùng chọn c thì hỏi thêm học sinh nào và thêm vào danh sách
nếu ng dùng chọn r thì hỏi muốn xem học sinh ở vị trí bao nhiêu và alert tên học sinh ở vị trí đó
nếu chọn u thì hỏi xem muốn update học sinh ở vị trí bao nhiêu và thay đổi học sinh ở vị trí tương ứng
nếu chọn d hỏi xem muốn xóa học sinh ở vị trí bn và xóa học sinh ở vi trí đó
(dùng While)
*/


