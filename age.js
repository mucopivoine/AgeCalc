 var anyText = document.getElementById("Aging");
 anyText.innerHTML= "";

function calculateAge(){
    const birthdate = new Date(document.getElementById("birthdate").value);
     const bynow = new Date();
     var difference = bynow.getFullYear() - birthdate.getFullYear();
      document.getElementById("Aging").innerHTML = `Your age is ${difference} years .`;
}
document.getElementById("calculate").addEventListener("click", calculateAge);
