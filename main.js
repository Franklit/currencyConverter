
  // global variables
  const select = document.querySelectorAll('select');
  const input = document.querySelector('input');
  const result = document.querySelector('.result');
  const dateToday = document.querySelector('.data');
  const buttonChange = document.querySelector('.change')
  const API_url = "https://api.exchangeratesapi.io/latest";
  let html = '';
  const licznik = document.querySelector('.licznik')
  


    
// fetch Api
  async function currency(){
    const res = await fetch(API_url);
    const data = await res.json();

    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    
    //set today date
    dateToday.textContent = data.date
    // add options into select
    arrKeys.map(item =>{
      return html += `<option value=${item}>${item}</option>`;
    });

    html0 = html.replace("value=USD", "selected value=USD");
    html1 = html.replace("value=PLN", "selected value=PLN");
          
    select[0].innerHTML =html0;
    select[1].innerHTML= html1
    // auto result
    licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`

    function convert(){
      if(input.value !== ""){
      //   result.textContent = 
      // (input.value * rates[select[1].value]/ rates[select[0].value]).toFixed(2)
        result.innerHTML = `<p>${input.value} ${select[0].value}</p>
        <text>=</text>
        <span>${(input.value * rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}</span>
        `
    
        // result.textContent = `${input.value} ${select[0].value} = ${(input.value * rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`
      
    
    };
      


      }
      
      
    input.addEventListener('keyup', ()=> {
      if(!isNaN(input.value)){
        if(input.value === "")result.textContent = '';
        if(input.value < 0) input.value = -input.value;
        convert();
      }
      else input.value = '';
          
    } );

    select[0].addEventListener('change', ()=>{

      convert();
      licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`;

    });

    select[1].addEventListener('change', ()=>{
      convert();
      licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`;

    });
    
    buttonChange.addEventListener('click', ()=>{
      // swap values
    [select[0].value, select[1].value] = [select[1].value, select[0].value];
    input.value= '';
    result.textContent= '';
    
    licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`

      
    });

  };

  currency();
  


