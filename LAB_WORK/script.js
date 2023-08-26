function predictPrice() {
  const area = document.getElementById('area').value;
  const intSqft = document.getElementById('int_sqft').value;
  const distMainroad = document.getElementById('dist_mainroad').value;
  const utilityAvail = document.getElementById('utility_avail').value;
  const street = document.getElementById('street').value;
  const mzZone = document.getElementById('mzzone').value;

  const data = {
    int_sqft: intSqft,
    dist_mainroad: distMainroad,
    area: area,
    utility_avail: utilityAvail,
    street: street,
    mzzone: mzZone,
  };

  // Send the data to the backend for prediction
  fetch('/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('prediction').innerText = `Predicted Price: ${data.predicted_price}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}



    
  
