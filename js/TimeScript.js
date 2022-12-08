 //자기 태어난 날짜 계산

 /*
 var Cu_date = new Date();
 current_Year = Cu_date.getFullYear();
 var My_Born_Year = 2000;
 var My_AGE = current_Year - My_Born_Year;
 document.getElementById("my_age").innerHTML = My_AGE;

 */

 const TODAY = new Date();
 const birthdate = new Date(2000, 1, 31);

 let Age = TODAY.getFullYear() - birthdate.getFullYear();
 const Month = TODAY.getMonth() - birthdate.getMonth();
 const DAY_DAY = TODAY.getDay() - birthdate.getDay();
 
 if (Month < 0 || (Month === 0 && TODAY.getDate() < birthdate.getDate())) {
    Age--;
 }

 document.getElementById("my_age").innerHTML = Age;
 

   
//저작권 년도 설정
var Cu_return_date_two = new Date();
var Year = Cu_return_date_two.getFullYear();
                
                
//저작권 년도 계산한 변수 HTML에 지정된 id를 불러오기
document.getElementById("Year_return_two").innerHTML = Year;
                