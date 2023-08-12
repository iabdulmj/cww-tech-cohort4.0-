const convertBtn = document.getElementById('convertBtn');
const temperatureInput = document.getElementById('temperatureInput');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const temperatureValue = parseFloat(temperatureInput.value);
    if (!isNaN(temperatureValue)) {
        const fromUnit = unitFrom.value;
        const toUnit = unitTo.value;
        
        if (fromUnit === toUnit) {
            resultElement.textContent = "Please select different units";
            return;
        }

        let resultValue;
        if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') {
                resultValue = (temperatureValue * 9/5) + 32;
            } else if (toUnit === 'kelvin') {
                resultValue = temperatureValue + 273.15;
            }
        } else if (fromUnit === 'fahrenheit') {
            if (toUnit === 'celsius') {
                resultValue = (temperatureValue - 32) * 5/9;
            } else if (toUnit === 'kelvin') {
                resultValue = (temperatureValue - 32) * 5/9 + 273.15;
            }
        } else if (fromUnit === 'kelvin') {
            if (toUnit === 'celsius') {
                resultValue = temperatureValue - 273.15;
            } else if (toUnit === 'fahrenheit') {
                resultValue = (temperatureValue - 273.15) * 9/5 + 32;
            }
        }

        resultElement.textContent = `${temperatureValue.toFixed(2)} ${fromUnit.toUpperCase()} is equal to ${resultValue.toFixed(2)} ${toUnit.toUpperCase()}`;
    } else {
        resultElement.textContent = 'Please enter a valid temperature';
    }
});
