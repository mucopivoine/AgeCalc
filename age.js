 var anyText = document.getElementById("Aging");
 anyText.innerHTML= "";
 const input = document.getElementById("birthdate");

function calculateAge(){
    if(input.value === ""){
        anyText.innerHTML = " Enter your birth date";
        return;
    }
    const birthdate = new Date(document.getElementById("birthdate").value);
     const bynow = new Date();
     var difference = bynow.getFullYear() - birthdate.getFullYear();
      document.getElementById("Aging").innerHTML = `Your age is ${difference} years .`;
}
document.getElementById("calculate").addEventListener("click", calculateAge);
