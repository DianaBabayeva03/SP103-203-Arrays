// const students = [
//     {
//       id: 1,
//       name: "Elvin",
//       surname: "Məmmədov",
//       groupName: "CS101",
//       university: "Bakı Dövlət Universiteti",
//       grade: 91,
//       age: 20
//     },
//     {
//       id: 2,
//       name: "Aysel",
//       surname: "Hüseynova",
//       groupName: "CS102",
//       university: "ADA Universiteti",
//       grade: 88,
//       age: 21
//     },
//     {
//       id: 3,
//       name: "Rəşad",
//       surname: "İsmayılov",
//       groupName: "CS101",
//       university: "Xəzər Universiteti",
//       grade: 95,
//       age: 22
//     },
//     {
//       id: 4,
//       name: "Leyla",
//       surname: "Əliyeva",
//       groupName: "CS103",
//       university: "Azərbaycan Texniki Universiteti",
//       grade: 84,
//       age: 20
//     },
//     {
//       id: 5,
//       name: "Kamran",
//       surname: "Abdullayev",
//       groupName: "CS101",
//       university: "Bakı Dövlət Universiteti",
//       grade: 79,
//       age: 21
//     },
//     {
//       id: 6,
//       name: "Nigar",
//       surname: "Qasımova",
//       groupName: "CS104",
//       university: "ADA Universiteti",
//       grade: 90,
//       age: 22
//     },
//     {
//       id: 7,
//       name: "Tural",
//       surname: "Əliyev",
//       groupName: "CS102",
//       university: "Xəzər Universiteti",
//       grade: 76,
//       age: 23
//     },
//     {
//       id: 8,
//       name: "Günel",
//       surname: "Məhərrəmova",
//       groupName: "CS103",
//       university: "Azərbaycan Texniki Universiteti",
//       grade: 87,
//       age: 20
//     },
//     {
//       id: 9,
//       name: "Orxan",
//       surname: "Quliyev",
//       groupName: "CS104",
//       university: "Bakı Dövlət Universiteti",
//       grade: 92,
//       age: 21
//     },
//     {
//       id: 10,
//       name: "Zaur",
//       surname: "İsmayılov",
//       groupName: "CS101",
//       university: "ADA Universiteti",
//       grade: 85,
//       age: 19
//     }
// ];
  
//   1. console-da bütün tələbələrin adlarını yazdırın.
// students.forEach(student => {
//     console.log(student.name);
// });


//   2. grade-i 80-dən yuxarı olanları console-a yazdırın.
// students.forEach(student => {
//     if (student.grade > 80) {
//         console.log(student.name);
//     }
// });

//   3. Age-i 20-dən aşağı olanları console-da yazdırın.
// students.forEach(student => {
//     if (student.age < 20) {
//         console.log(student.name + " " + student.surname);
//     }
// });

//   4. Universiteti "Bakı Dövlət Universiteti" olan tələbələrin name və surname-ni 
//      console-da ayzdırın.
// students.forEach(student => {
//     if (student.university === "Bakı Dövlət Universiteti") {
//         console.log(student.name+ " " + student.surname);
//     }
// });

//   5. id-si 7 olan tələbənin bütün məlumatlarını console-a yazdırın.
// students.forEach(student => {
//     if (student.id === 7) {
//         console.log(student);
//     }
// });
  
//   //northwind-a aid suallar.

//   1. freight 1-dən kiçik olan sifarişləri console-a yazdırın.
//   2. quantity-si 10 olan sifarişləri console-a yazdırın.
//   3. İD-si 11075 olanı tapıb console-da yazdırın.
//   4. country-si Sweden olan sifarişləri console-a ayzdırın.
//   5. unitPrice-ı 15-dən kiçik olan sifarişləri console-da yazdırın.
  
//   //
//   1. a, b və c ədədlərimiz var. ax^2 + bx +c = 0 kvadrat tənliyinin həllini tapıb 
//      console-da çap edin. 
// const a=1, b=2, c=3 ;
// const Diskriminant = b*b - 4*a*c;

// if (Diskriminant > 0) {
//     const x1 = (-b + Math.sqrt(D)) / (2 * a);
//     const x2 = (-b - Math.sqrt(D)) / (2 * a);
//     console.log(`Tənliyin iki kökü var: x1 = ${x1}, x2 = ${x2}`);
// } else if (Diskriminant === 0) {
//     const x = -b / (2 * a);
//     console.log(`Tənliyin bir-birinə bərabər iki kökü var: x = ${x}`);
// } else {
//     console.log("Tənliyin həqiqi kökü yoxdur.");
// }

//   2. const arr = [2, 4, 5, 9, 1, 8] bu massivin maksimum elementinin indeksini tapın.
// const arr = [2, 4, 5, 9, 1, 8];
// let maxElement = arr[0];
// let maxIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//         maxElement = arr[i];
//         maxIndex = i;
//     }
// }
// console.log(`Massivin maksimum elementi: ${maxElement}`);
// console.log(`Maksimum elementin indeksi: ${maxIndex}`);

//   3. const students = [
//         { name: "Elvin", grade: 91, age: 19 },
//         { name: "Leyla", grade: 45, age: 21 },
//         { name: "Aysel", grade: 78, age: 17 },
//          { name: "Kamran", grade: 39, age: 18 },
//         { name: "Rəşad", grade: 65, age: 23 }
//       ];
//      60-dan yuxarı bal toplayanların adlarını filter edib console-a çap edən loop yazın.
//   4. Yuxarıdakı array-də ən yüksək nəticə toplayan tələbənin adını tapın və console-da yazdırın.
//   5. Array-də balların ümumi ortasını tapan kod yazın. Və nəticəni console-a yazdırın.
//   6. Ballara əsasən tələbələri qiymətlindirin. Məsələn, 91 bal toplayan tələbənin adını
//      və qarşısından dərəcəni yazdırın. 85+ "Əla", 50-85 "Yaxşı", 50-dən aşağı "Zəif".
//      Elvin - Əla, Leyla - Zəif və s.
//   7. grade-i 50-dən yuxarı, age-i 20-dən aşağı olan tələbələrin adlarını console-a ayzdırın.
//   8. 