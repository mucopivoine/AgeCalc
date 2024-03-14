  var anyText = document.getElementById("Aging");
  anyText.innerHTML= "";
  const input = document.getElementById("birthdate");

 function calculateAge(){
   
       const birthdate = new Date(document.getElementById("birthdate").value);
       const birthYear = birthdate.getFullYear();
       const thisyear = new Date().getFullYear();

       if(input.value === ""){
        anyText.innerHTML = " Enter your birth date.";
        return;
    } else if (isNaN(birthYear)){
        anyText.innerHTML = "Invalid date entered";
        return;
       }else if(birthYear > thisyear){
        anyText.innerHTML = "No future birth year";
        return ;
       } else if(thisyear > birthYear){
       const difference = thisyear - birthYear;
      anyText.innerHTML = `Your age is ${difference} years .`;
      return;
 }
}
 document.getElementById("calculate").addEventListener("click", calculateAge);
 
 input.addEventListener("input",function(){
    const enterDate = new Date(input.value);
    const enterYear = enterDate.getFullYear();

    if(enterYear.toString().length > 4){
        input.value = input.value.slice(0, -1);
    }
 });



