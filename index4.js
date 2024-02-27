let radio1 = document.getElementById("Radio1")
let radio2 = document.getElementById("Radio2")

let distanceA = document.getElementById("distanceA")
let container = document.getElementById("container")//for b
let slider = document.getElementById("slideAngle")
let orderEL = document.getElementById("order")
let wavelength = document.getElementById("wavelength")
let distanceD = document.getElementById("D")
let beta = document.getElementById("beta")
let m = document.getElementById("orderOfm")
let N = document.getElementById("N")
let firstMin = document.getElementById("firstMin")

let checkA = document.getElementById("myCheck1")
let checkB = document.getElementById("myCheck2")//for b
let checkTheta = document.getElementById("myCheck3")
let checkOrder = document.getElementById("myCheck4")
let checkLambda = document.getElementById("myCheck8")
let checkD = document.getElementById("myCheck5")
let checkBeta = document.getElementById("myCheck6")
let checkM = document.getElementById("myCheck7")
let checkN = document.getElementById("myCheck9")
let checkFirstMinima = document.getElementById("myCheck10")

// function radioCheck() {
//    if(radio2.checked) 
//    {
//       let x = document.getElementById("opt-el")
//       let option = document.createElement("option")
//       option.text = "Missing Order"
//       x.add(option)
//       let option2 = document.createElement("option")
//       option2.text = "Diffraction Grating"
//       x.add(option2)
//       let option3 = document.createElement("option")
//       option3.text = "Highest Order of Spectrum"
//       x.add(option3)
   
//    }
//    else if (radio1.checked) {
//       console.log("Radio 1 is checked");
//       const checkboxes = document.querySelectorAll(".double");
//       console.log(checkboxes)
//       checkboxes.forEach(checkbox => {
//          checkbox.style.display="none";
//       });

//       const labels = document.querySelectorAll(".doubleL");
//       console.log(labels)
//       labels.forEach(label => {
//          label.style.display="none";
//       });
//   }
// }

// if(radio1.checked || radio2.checked) {

function radioCheck() {
   if(radio2.checked) 
   {
      let x = document.getElementById("opt-el")
      let option = document.createElement("option")
      option.text = "Missing Order"
      x.add(option)
      let option2 = document.createElement("option")
      option2.text = "Diffraction Grating"
      x.add(option2)
      let option3 = document.createElement("option")
      option3.text = "Highest Order of Spectrum"
      x.add(option3)
   
   }
   const checkboxes = document.querySelectorAll(".double");
   const labels = document.querySelectorAll(".doubleL");

   const displayStyle = radio1.checked ? "none" : "inline-block";

   checkboxes.forEach((checkbox) => {
       checkbox.style.display = displayStyle;
   });

   labels.forEach((label) => {
       label.style.display = displayStyle;
       if (radio2.checked) {
           label.style.margin = "auto"; // Adjust margin for inline display
       } else {
           label.style.marginLeft = "0"; // Reset margin for other display types
       }
   });
}



function selectedOpt() {
   
   const e = document.getElementById("opt-el").value

   if((radio1.checked || radio2.checked) && (checkA.checked || checkB.checked || checkTheta.checked || checkOrder.checked || checkD.checked || checkBeta.checked || checkM.checked || checkLambda.checked || checkN.checked)) {

   if(e == "Wavelength"){
     // clearVal()
      let Button = document.getElementById("button")
      Button.innerHTML = "<button onclick = 'calcLambda()'>CALCULATE WAVELENGTH</button>"

   }
   
   else if(e == "Angle"){
      //clearVal()
      let Button = document.getElementById("button")
      Button.innerHTML = "<button onclick = 'calcAngle()'>CALCULATE ANGLE</button>"
      
   }

   else if(e == "Order of Spectrum"){
      //clearVal()
      let Button = document.getElementById("button")
      Button.innerHTML = "<button onclick = 'calcOrder()'>CALCULATE ORDER</button>"

   }

   else if(e == "Diffraction Grating"){
      //clearVal()
      let Button = document.getElementById("button")
      Button.innerHTML = "<button onclick = 'diffractionGrating()'>CALCULATE DIFFRACTION GRATING</button>"
   }


   else if(e == "Missing Order"){
     // clearVal()
      let Button = document.getElementById("button")
      Button.innerHTML = "<button onclick = 'missingOrder()'>CALCULATE MISSING ORDER</button>"
      
    }else if(e == "Highest Order of Spectrum"){
      // clearVal()
       let Button = document.getElementById("button")
       Button.innerHTML = "<button onclick = 'highestOrder()'>CALCULATE HIGHEST ORDER OF SPECTRUM</button>"
       
     }
    //else
   // {
   //    let comment = document.getElementById("cmt").innerHTML="Please select one from the drop-menu"
   // }

   else {
      let comment = document.getElementById("cmt").innerHTML="Please choose the diffraction pattern"
   }
   }

}
//}
// }
// else {
//    let comment = document.getElementById("cmt").innerHTML="Please choose the diffraction pattern"
// }

// wavelength for single slit
function calcLambda1A() {
   let A = document.getElementById("a").value
   let Theta = document.getElementById("c").value
   let Order = document.getElementById("d").value
   let lambda = Math.abs((parseFloat(A)*Math.sin(parseFloat(Theta))) / parseFloat(Order))
   document.getElementById("ans").textContent = "Wavelength: " + lambda        
}

function calcLambda1B() {
   let A = document.getElementById("a").value
   let D = document.getElementById("distD").value
   let firstMin = document.getElementById("firstMinima").value
   let lambda = Math.abs((parseFloat(A)*parseFloat(firstMin)) / parseFloat(D))
   document.getElementById("ans").textContent = "Wavelength: " + lambda        
}

function angleOfFirst() {
   let A = document.getElementById("a").value
   let n = document.getElementById("d").value
   let wavelength = document.getElementById("lambda").value
   let angle = Math.asin((parseFloat(n) * parseFloat(wavelength)) / parseFloat(A))
   let angleOfFirst = (180 * angle) / Math.PI
   document.getElementById("ans").textContent = "Angle:" + angleOfFirst
}

function orderOfFirst() {
   let A = document.getElementById("a").value
   let Theta = document.getElementById("c").value
   let wavelength = document.getElementById("lambda").value
   let order = (parseFloat(A) * Math.sin(parseFloat(Theta))) / parseFloat(wavelength)
   document.getElementById("ans").textContent = "Order: " + order
}

// wavelength for double slit
function calcLambda2A() {
   let A = document.getElementById("a").value
   let B = document.getElementById("b").value
   let Theta = document.getElementById("c").value
   let Order = document.getElementById("d").value
   let lambda = Math.abs(((parseFloat(A) + parseFloat(B))*Math.sin(parseFloat(Theta))) / parseFloat(Order))
   document.getElementById("ans").textContent = "Wavelength: " + lambda
}

function calcLambda2B() {
   let D = document.getElementById("distD").value
   let beta = document.getElementById("beta-el").value
   let B = document.getElementById("b").value
   let lambda = Math.abs((parseFloat(B)*parseFloat(beta)) / parseFloat(D))
   document.getElementById("ans").textContent = "Wavelength: " + lambda
}

function angleOfSecond() {
 if(checkA.checked && checkB.checked && checkOrder.checked && checkLambda.checked) {
   let A = document.getElementById("a").value
   let B = document.getElementById("b").value
   let n = document.getElementById("d").value
   let wavelength = document.getElementById("lambda").value
   let angle = Math.asin((parseFloat(n) * parseFloat(wavelength)) / (parseFloat(A) + parseFloat(B)))
   let angleOfSecond = (180 * angle) / Math.PI
   document.getElementById("ans").textContent = "Angle: " + angleOfSecond
} else if(checkLambda.checked && checkN.checked && checkOrder.checked) {
   let N = document.getElementById("noOfLines").value
   let n = document.getElementById("d").value
   let wavelength = document.getElementById("lambda").value
   let angle = Math.asin((parseFloat(N) * parseFloat(wavelength)) / parseFloat(n))
   let angleOfSecond = (180 * angle) / Math.PI
   document.getElementById("ans").textContent = "Angle: " + angleOfSecond
}
}

function orderOfSecond() {
   let A = document.getElementById("a").value
   let B = document.getElementById("b").value
   let Theta = document.getElementById("c").value
   let wavelength = document.getElementById("lambda").value
   let order = ((parseFloat(A) + parseFloat(B)) * Math.sin(parseFloat(Theta))) / parseFloat(wavelength)
   document.getElementById("ans").textContent = "Order: " + order
}

function highestOrder() {
  if(checkN.checked && checkLambda.checked && checkTheta.checked) {
   let N = document.getElementById("noOfLines").value
   let Theta = document.getElementById("c").value
   let wavelength = document.getElementById("lambda").value
   let highestOrder = Math.round((Math.sin(parseFloat(Theta))) / (parseFloat(wavelength)*parseFloat(N)))
   document.getElementById("ans").textContent = "Order: " + highestOrder
  } else if(checkN.checked && checkLambda.checked){
   let N = document.getElementById("noOfLines").value
   let wavelength = document.getElementById("lambda").value
   let highestOrder = Math.round(1 / (parseFloat(wavelength)*parseFloat(N)))
   document.getElementById("ans").textContent = "Order: " + highestOrder

   }
}

function diffractionGratingA() {
   let A = document.getElementById("a").value
   let B = document.getElementById("b").value
   let N = 1 / (parseFloat(A) + parseFloat(B))
   document.getElementById("ans").textContent = "Diffraacting Grating: " + N
}

function diffractionGratingB() {
   let theta = document.getElementById("c").value
   let order = document.getElementById("d").value
   let lambda = document.getElementById("lambda").value
   let N = Math.abs(Math.sin(parseFloat(theta)) / (parseFloat(order) * parseFloat(lambda)))
   document.getElementById("ans").textContent = "Diffraacting Grating: " + N
}

function missingOrder() {
   let A = document.getElementById("a").value
   let B = document.getElementById("b").value
   let m = document.getElementById("m").value
   let missingOrder = parseFloat(m) * (parseFloat(A) + parseFloat(B)) / parseFloat(A)
   document.getElementById("ans").textContent = missingOrder + "," + 2*missingOrder + "," + 3*missingOrder +",..."
}

//calculate function 
function calcLambda() {
   if(radio1.checked) {
      if(checkA.checked && checkTheta.checked && checkOrder.checked){
      calcLambda1A()
   } else if(checkFirstMinima.checked && checkA.checked && checkD.checked) {
      calcLambda1B()
   }
   }
      
   else {
      if(checkA.checked && checkTheta.checked && checkOrder.checked && checkB.checked)
      {calcLambda2A()
      } else if(checkB.checked && checkD.checked && checkBeta.checked) {
         calcLambda2B()
      }
       }     
}

function diffractionGrating() {
if(checkA.checked && checkB.checked) {
   diffractionGratingA()
} else if(checkTheta.checked && checkOrder.checked && checkLambda.checked){
   diffractionGratingB()
}
}


function calcAngle() {
   if(radio1.checked) {
      angleOfFirst()
      }
      
   else {
      angleOfSecond()
       }        
}
function calcOrder() {
   if(radio1.checked) {
      orderOfFirst()
      }
      
   else {
      orderOfSecond()
       }        
}

function myFunction() {
   let mySlider = document.getElementById("c")
   myReadout.innerHTML = Number(mySlider.value).toFixed(1)
   
}
let Btn = document.getElementById("btn")
function resetFunc() {
   clearVal()
   document.getElementById("myform").reset()
   
}

function clearVal() {
   distanceA.innerHTML = ""
   container.innerHTML = ""
   slider.innerHTML = ""
   orderEL.innerHTML = ""
   wavelength.innerHTML = ""
   distanceD.innerHTML = ""
   beta.innerHTML = ""
   m.innerHTML = ""
   N.innerHTML = ""
   firstMin.innerHTML = ""

}


function myFunct() {
   if(radio1.checked)
      {
      if(checkA.checked) {
         distanceA.innerHTML = "<input type = 'text' id = 'a' placeholder='Enter a'</input>"
      } else {distanceA.innerHTML = ""} 
      if(checkTheta.checked) {
         slider.innerHTML = "<input type='range' id='c' min='-90' max='90' step='0.1' onchange='myFunction()' oninput='myFunction()'> Theta(angle) = <span id='myReadout'>0.0</span>"
         myFunction()
      } else {slider.innerHTML = ""} 
      if(checkOrder.checked) {
         orderEL.innerHTML = "<input type = 'text' id = 'd' placeholder='Enter Order of Spectrum'</input>"
      } else {orderEL.innerHTML = ""} 
      if(checkD.checked) {
         distanceD.innerHTML = "<input type = 'text' id = 'distD' placeholder='Enter distance between slit and screen'</input>"
      } else {distanceD.innerHTML = ""}  
      if(checkLambda.checked) {
         wavelength.innerHTML = "<input type = 'text' id = 'lambda' placeholder='Enter the Wavelength'</input>"
      } else{ wavelength.innerHTML = ""}
      if(checkFirstMinima.checked) {
         firstMin.innerHTML = "<input type = 'text' id = 'firstMinima' placeholder='First Minima at'</input>"
      } else {firstMin.innerHTML = ""}

   } else if(radio2.checked) {
      if(checkA.checked) {
         distanceA.innerHTML = "<input type = 'text' id = 'a' placeholder='Enter a'</input>"
      } else {distanceA.innerHTML = ""} 
      if(checkTheta.checked) {
         slider.innerHTML = "<input type='range' id='c' min='-90' max='90' step='0.1' onchange='myFunction()' oninput='myFunction()'> Theta(angle) = <span id='myReadout'>0.0</span>"
         myFunction()
      } else {slider.innerHTML = ""} 
      if(checkOrder.checked) {
         orderEL.innerHTML = "<input type = 'text' id = 'd' placeholder='Enter Order of Spectrum'</input>"
      } else {orderEL.innerHTML = ""} 
      if(checkD.checked) {
         distanceD.innerHTML = "<input type = 'text' id = 'distD' placeholder='Enter distance between slit and screen'</input>"
      } else {distanceD.innerHTML = ""}  
      if(checkLambda.checked) {
         wavelength.innerHTML = "<input type = 'text' id = 'lambda' placeholder='Enter the Wavelength'</input>"
      } else{ wavelength.innerHTML = ""}
      if(checkB.checked) {
         container.innerHTML = "<input type = 'text' id = 'b' placeholder='Enter b'</input>"
      } else {container.innerHTML = ""} 
      if(checkBeta.checked) {
         beta.innerHTML = "<input type = 'text' id = 'beta-el' placeholder='Enter the value of beta'</input>"
      } else {beta.innerHTML = ""} 
      if(checkM.checked) {
         m.innerHTML = "<input type = 'text' id = 'm' placeholder='Enter the Order (m)'</input>"
      } else{ m.innerHTML = ""}
      if(checkN.checked) {
         N.innerHTML = "<input type = 'text' id = 'noOfLines' placeholder='Enter no of lines per cm'</input>"
      } else {N.innerHTML = ""}
   }
}
