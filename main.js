let btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
  // Get input VALUES (not elements) and convert to numbers
  const a = parseFloat(document.querySelector(".avar").value);
  const i = parseFloat(document.querySelector(".ivar").value);
  const n = parseFloat(document.querySelector(".year").value);

  // Check for valid inputs
  if (isNaN(a) || isNaN(i) || isNaN(n)) {
    alert("Please enter valid numbers!");
    return;
  }

  // Correct formula: [(1+i)^n - 1] / [i*(1+i)^n] * a
  const factor = ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n)));
  const calculation = a * factor;
  var final_result=document.getElementById("final_result");
 var show_result= final_result.innerHTML = calculation ;


 /* alert("Result: " + calculation);*/
});

/*-------------------------------------------------------------------*/

btn.addEventListener("click", function() {
    // Get input VALUES (not elements) and convert to numbers
    const PV = parseFloat(document.querySelector(".avar").value);
    const i = parseFloat(document.querySelector(".ivar").value);
    const n = parseFloat(document.querySelector(".year").value);
  
    // Check for valid inputs
    if (isNaN(a) || isNaN(i) || isNaN(n)) {
      alert("Please enter valid numbers!");
      return;
    }
  
    // Correct formula: [(1+i)^n - 1] / [i*(1+i)^n] * a
    const numerator = i * Math.pow(1 + i, n);
    const denominator = Math.pow(1 + i, n) - 1;
    const calculation =PV * (numerator / denominator) ;
    var final_result=document.getElementById("final_result");
   var show_result= final_result.innerHTML = calculation ;
  
  
   /* alert("Result: " + calculation);*/
  });

/*-------------------------------------------------------------------*/
 
  

/*// Equation 1: Present Value of Annuity
function presentValueAnnuity(A, i, n) {
    const factor = (Math.pow(1 + i, n) - 1 / (i * Math.pow(1 + i, n));
    return A * factor;
}

// Equation 2: Annuity Payment
function annuityPayment(PV, i, n) {
    const numerator = i * Math.pow(1 + i, n);
    const denominator = Math.pow(1 + i, n) - 1;
    return PV * (numerator / denominator);
}

// Equation 3: NPV of Annual Costs
function npvAnnualCosts(CI, m, I, n) {
    const annuityFactor = (Math.pow(1 + I, n) - 1 / (I * Math.pow(1 + I, n));
    return CI * (1 + m * annuityFactor);
}

// Equation 4: Energy Input
const E_I = (PR, CF) => 8760 * PR * CF;

// Equation 5: NPV Simplified
function npvCA(CI, m, I, n) {
    const annuityFactor = (Math.pow(1 + I, n) - 1 / (I * Math.pow(1 + I, n)));
    return (CI / n) * (1 + m * annuityFactor);
}

// Equation 6: Cost per Unit
function costPerUnit(CI, PR, CF, m, I, n) {
    const npvCA = (CI / (8760 * n)) * (1 / (PR * CF));
    const annuityFactor = (Math.pow(1 + I, n) - 1 / (I * Math.pow(1 + I, n)));
    return npvCA * (1 + m * annuityFactor);
}

// Equation 7: Present Value of O&M Costs
function pvOM(m, CI, I, n) {
    return m * CI * ((Math.pow(1 + I, n) - 1) / (I * Math.pow(1 + I, n)));
}

// Equation 8: NPV of Benefits
function npvBenefits(BA, I, n) {
    return BA * ((Math.pow(1 + I, n) - 1) / (I * Math.pow(1 + I, n));
}

// Equation 9: Net Present Value
function netPresentValue(BA, CI, m, I, n) {
    const benefits = npvBenefits(BA, I, n);
    const costs = CI * (1 + m * ((Math.pow(1 + I, n) - 1) / (I * Math.pow(1 + I, n))));
    return benefits - costs;
}

// Equation 10: Benefit-Cost Ratio
function benefitCostRatio(BA, CI, m, I, n) {
    const numerator = npvBenefits(BA, I, n);
    const denominator = CI + npvAnnualCosts(CI, m, I, n);
    return numerator / denominator;
}

// Equation 11: Solve for n
function calculateN(I, CI, BA, m) {
    const numeratorTerm = 1 - (I * CI) / (BA - m * CI);
    return -Math.log(numeratorTerm) / Math.log(1 + I);
}

// Equation 12: BCR Formula
function bcr(BA, CI, m, I, n) {
    const numerator = BA * ((Math.pow(1 + I, n) - 1) / (I * Math.pow(1 + I, n)));
    const denominator = CI * (1 + m * ((Math.pow(1 + I, n) - 1) / (I * Math.pow(1 + I, n))));
    return numerator / denominator;
}

// Equation 13: IRR Equation (requires numerical methods to solve)
function irrEquation(BA, CI, m, IRR, n) {
    const left = BA * ((Math.pow(1 + IRR, n) - 1) / (IRR * Math.pow(1 + IRR, n));
    const right = CI * (1 + m * ((Math.pow(1 + IRR, n) - 1) / (IRR * Math.pow(1 + IRR, n)));
    return left - right; // Solve for IRR where this equals 0
}

// Equation 14: NPV Equality
function npvEquality(CI, npvCA) {
    return CI + npvCA; // Assuming NPV_BA = CI + NPV_CA
}*/