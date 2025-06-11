document.getElementById("eligibility-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get user input
    const businessType = document.getElementById("business-type").value;
    const annualRevenue = parseInt(document.getElementById("annual-revenue").value);
    const creditScore = parseInt(document.getElementById("credit-score").value);
    const yearsInBusiness = parseInt(document.getElementById("years-in-business").value);
    
    // Check eligibility based on criteria
    let isEligible = false;
    let eligibilityMessage = "You are not eligible for a MicroFund loan.";
  
    // Criteria for eligibility (example)
    if (annualRevenue >= 10000 && creditScore >= 650 && yearsInBusiness >= 1) {
      isEligible = true;
      eligibilityMessage = "Congratulations! You are eligible for a MicroFund loan.";
    }
  
    // Display result
    const resultDiv = document.getElementById("eligibility-result");
    resultDiv.textContent = eligibilityMessage;
    resultDiv.className = isEligible ? "result success" : "result failure";
  });
  
