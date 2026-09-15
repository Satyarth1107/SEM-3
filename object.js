// let student={
//     name:"Amit Kumar",
//     roll:25,
//     CGPA:9.3,
//     ispass:true
// };
// console.log(student.ispass);
// student.name="Satyarth Raj Nandan";
// console.log(student.name);
// let marks=[23,43,65,29,83];
// console.log(marks[0]);
let student=[
             {name:"Satyarth Raj Nandan",roll:29,CGPA:9.2},
             {name:"Shivang",roll:32,CGPA:9.1},
            {name:"Shreyas",roll:88,CGPA:9.5},
            {name:"kyojuro Rengoku ",roll:121,CGPA:10.0},
            {name:"Yatharth",roll:10,CGPA:9.55},
            {name:"Naruto Uzumaki",roll:3,CGPA:7.5},
            {name:"Sasuke uchaia",roll:172,CGPA:9.9},
            {name:"Gojo Satuaro",roll:2,CGPA:8.5},
            {name:"Levi Acraman",roll:129,CGPA:10}]
console.table(student);
let g=student.length;
console.log(g);
for(let i=0;i<g;i++){
    if(student[i].CGPA>9){
        console.log(student[i].name);
    }
}
