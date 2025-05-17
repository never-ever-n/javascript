let calculation = localStorage.getItem('calculation') || '';
      const heading=document.querySelector("#heading")
      function updateCalculation(value) {
        calculation += value;
        heading.innerText=calculation
        heading.style.visibility='visible'
        localStorage.setItem('calculation', calculation);
      }
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }