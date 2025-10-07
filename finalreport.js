// Conversion functions
function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}
    
// Celsius to Fahrenheit
document.getElementById('toF').addEventListener('click', () => {
    let input = prompt("Enter temperature in Celsius:");
    let temp = parseFloat(input);
        
    if (isNaN(temp)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }
        
    let result = celsiusToFahrenheit(temp);
    document.getElementById('result').textContent = `${temp}°C is ${result}°F`;
    updateThermometer(temp);
});
    
// Fahrenheit to Celsius
document.getElementById('toC').addEventListener('click', () => {
    let input = prompt("Enter temperature in Fahrenheit:");
    let temp = parseFloat(input);
        
    if (isNaN(temp)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }
        
    let celsius = fahrenheitToCelsius(temp);
    document.getElementById('result').textContent = `${temp}°F is ${celsius}°C`;
    updateThermometer(celsius);
});
    
// Thermometer
function updateThermometer(celsius) {
    const mercury = document.getElementById('mercury');
    let height = Math.min(Math.max(celsius, 0), 100) * 3; // scale to max 300px
    let color;
    
    if (celsius <= 10) {
        color = 'blue';
    } else if (celsius <= 25) {
        color = 'orange';
    } else {
        color = 'red';
    }
    
    mercury.style.height = height + 'px';
    mercury.style.backgroundColor = color;
}
    
// Table
document.getElementById('generateTable').addEventListener('click', () => {
    let tableHTML = `
        <table>
          <thead>
            <tr><th>Celsius (&degC)</th><th>Fahrenheit (&degF)</th></tr>
          </thead>
          <tbody>
          `;

      for (let c = 0; c <= 100; c += 10) {
        let f = celsiusToFahrenheit(c).toFixed(2);
        tableHTML += `<tr><td>${c}</td><td>${f}</td></tr>`;
      }

      tableHTML += "</tbody></table>";
      document.getElementById('tableContainer').innerHTML = tableHTML;
    });