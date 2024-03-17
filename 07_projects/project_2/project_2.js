const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)  // coverted the string to integer

form.addEventListener('submit',function(e){
    e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)  // coverted the string to integer
  const weight = parseInt(document.querySelector('#weight').value)  // coverted the string to integer
  const results = document.querySelector('#results')
  const weightguide = document.querySelector('#weight-guide')
  if(height === '' || height < 0 || isNaN(height) ){
    results.innerHTML = `please give a valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight) ){
    results.innerHTML = `please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight /  ((weight*height)/10000)).toFixed(2)  //toFixed is used to show upto 2 variable value
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;

   let bmiRange = '';
   if(bmi < 18.6){
    bmiRange = 'underweight';
   }
   else if (bmi >=18.6 && bmi <= 24.9) {
    bmiRange = 'normal range';
   }
   else {
    bmiRange = 'overweight'
   }
   weightguide.innerHTML = `<h3>BMI Weight Guide</h3>
   <p>${bmiRange}</p>`
  }
})  