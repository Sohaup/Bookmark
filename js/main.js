var markName = document.getElementById("markName");
var makrkUrl = document.getElementById("markUrl");
var marks =  JSON.parse(localStorage.getItem("marks")) ?? [];
renderMarks();


function createMark(){
    var mark = {
        name:markName.value ,
        url: makrkUrl.value ,                  
    }

   if ( makrkUrl.value && markName.value) {
    marks.push(mark)     
    localStorage.setItem("marks" , JSON.stringify(marks)); 
    resetInputs();
    renderMarks();   
   } else {
    alert("Please Insert Data ");
   }    
}  

function resetInputs() {
    markName.value = "";
    makrkUrl.value = "";
    markName.classList.remove("is-valid" , "is-invalid");
    makrkUrl.classList.remove("is-valid" , "is-invalid");
}

function renderMarks() {
   var marksCard = "";   
for (var index in marks) {
    marksCard += `
    <tr class="text-center">
      <td class="py-3">
                   ${index}
      </td>
      <td>
                  ${marks[index].name}
      </td>
      <td>
      <button class="btn btn-green px-3">
          <i class="fa-solid fa-eye"></i>
          <a href="${marks[index].url}">Visit</a>
      </button>
      </td>
      <td>
      <button class="btn btn-red px-3" onclick="clearMark(${index})">
          <i class="fa-solid fa-trash-can"></i>
                  Delete
      </button>
      </td>
    </tr>      
    `;
   
}
   
document.getElementById("marksContainer").innerHTML = marksCard;
}
 

function clearMark(index) {
    marks.splice(index , 1);
    localStorage.setItem("marks" , JSON.stringify(marks));
    renderMarks();
}

var form = document.getElementById("form");
form.addEventListener("submit" , function (e) {
    e.preventDefault();    
});

var regaxes = {
    nameRegax:/^[A-Z][a-z]{2,}$/ , 
    urlRegax:/^(https:\/\/www.)?[A-Za-z]*(.com|.net|.org|.edu)$/
};

var submitBtn = document.getElementById("submitBtn");
function markValidation(targetInput , regax) {   

    if (regax.test(targetInput.value) ) {
        targetInput.classList.add("is-valid");
        targetInput.classList.remove("is-invalid");
        submitBtn.disabled = false; 
    } else {
        targetInput.classList.add("is-invalid");
        targetInput.classList.remove("is-valid"); 
        submitBtn.disabled = true;       
    }
    
}   


function returnBtn() {
    if (!markName.value & !makrkUrl.value ) {
        submitBtn.disabled = false;
    }   
}


