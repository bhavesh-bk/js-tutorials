const form = document.querySelector('form');
form.addEventListener('submit', function (e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const category = document.querySelector('#category');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please provide valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please provide valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
    if ( results.innerHTML < 18.6) {
        category.innerHTML = `Underweight`
    }
    else if( results.innerHTML > 18.6 && results.innerHTML < 24.9){
        category.innerHTML = `Normal`

    }else if(results.innerHTML > 24.9){
        category.innerHTML = `Overweight`

    }
})