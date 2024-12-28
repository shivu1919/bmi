function CalculateBMI(){
    let feet = document.getElementById('feet').value 
    let inch = document.getElementById('inch').value
    let weight= document.getElementById('kg').value

    feet = parseInt(feet)
    inch = parseInt(inch)
    weight = parseInt(weight)

    let height = (feet*12 + inch ) / 39.37007874;
    
    let bmi = weight / (height*height)
    let status;

    if(bmi<16.5){
        status="severly underweight"
    }

    if(bmi>=16.5 && bmi<18.5){
        status="underweight"
    }

    if(bmi>=18.5 && bmi<25.5){
        status="Normal"
    }
    
    if(bmi>=25.5 && bmi<30.5){
        status="OverWeight"
    }

    if(bmi>=30.5 && bmi<35.5){
        status="Obese"
    }

    if(bmi>=35.5){
        status="Severly Obese"
    }
    document.getElementById('result').innerHTML="Your BMI is: "+bmi +" "+ "You are: "+ status
}