let maximumGrade = document.querySelector('#maxGrade')
let minPassingGrade = document.querySelector('#minPassingGrade')
let yourGrade = document.querySelector('#yourGrade')
let button = document.querySelector('#calculate')
let resultGrade = document.querySelector('#yourGermanGrade')
let description = document.querySelector('.alert')

//

button.addEventListener('click', (e) => {
    e.preventDefault();
    let values = [
        parseFloat(maximumGrade.value.replace(',', '.')),
        parseFloat(minPassingGrade.value.replace(',', '.')),
        parseFloat(yourGrade.value.replace(',', '.'))
    ]
    let result = (((values[0] - values[2]))/(values[0] - values[1])*3 + 1)
    result = (Math.round(result * 100) / 100).toFixed(2);
    // values[0] = maximum grade
    // values[1] = minimum grade
    // values[2] = your grade
    if(result >= 0 && values[0]>values[1]) {
        resultGrade.innerHTML = result
    } else{
        description.className = "alert alert-danger"
        description.innerHTML =  "Error, Check Again"
    }
    if(result >=1 && result <=1.5){
        description.className=""
        description.className = "alert alert-success"
        description.innerHTML =  `"sehr gut" (very good: an outstanding achievement)`
    } else if(result >=1.6 && result <=2.5){
        description.className = "alert alert-primary"
        description.innerHTML =  `"gut" (good: an achievement substantially above average requirements)`
    } else if(result >=2.6 && result <=3.5){
        description.className = "alert alert-info"
        description.innerHTML =  `"befriedigend" (satisfactory: an achievement which corresponds to average requirements)`
    } else if(result >=3.6 && result <=4){
        description.className = "alert alert-warning"
        description.innerHTML =  `""ausreichend" (sufficient: an achievement which barely meets the requirements)`
    } else if(result >=4){
        description.className = "alert alert-danger"
        description.innerHTML =  `"mangelhaft" / "ungenügend" / "nicht bestanden" (insufficient / failed: an achievement which does not meet the requirements)`
    }

})
