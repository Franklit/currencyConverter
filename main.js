
  const select = document.querySelectorAll('select');
  const input = document.querySelectorAll('input');
  const API_url = "https://api.exchangeratesapi.io/latest";

  let html = '';

    
   const licznik = document.querySelector('div p')

  async function currency(){
    const res = await fetch(API_url);
    const data = await res.json();
    // console.log(data.rates)
    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    console.log(rates);
    

    arrKeys.map(item =>{
      return html += `<option value=${item}>${item}</option>`;
    });
    // console.log(html)
    for(let i=0; i<select.length; i++){
      select[i].innerHTML = html;

    };

    input[0].addEventListener('keyup', ()=>{
      input[1].value = (input[0].value * rates[select[1].value]/ rates[select[0].value]).toFixed(2);

      
    //   licznik.textContent = input[0].value
    });
    input[1].addEventListener('keyup', ()=>{
      input[0].value = (input[1].value * rates[select[0].value]/ rates[select[1].value]).toFixed(2);
    });
    select[0].addEventListener('change', ()=>{
      input[1].value = (input[0].value * rates[select[1].value]/ rates[select[0].value]).toFixed(2);
      licznik.textContent = `1  ${select[0].value} = ${(rates[select[0].value]/ rates[select[1].value]).toFixed(2)} ${select[1].value}`
    });
    select[1].addEventListener('change', ()=>{
      input[0].value = (input[1].value * rates[select[0].value]/ rates[select[1].value]).toFixed(2);
      licznik.textContent = `1  ${select[0].value} = ${(rates[select[0].value]/ rates[select[1].value]).toFixed(2)} ${select[1].value}`
    });

    // licznik.textContent = select[1].textContent;



  };

  currency();
  


