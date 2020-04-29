window.addEventListener('DOMContentLoaded', function() {
  const selectedAddress = window.document.getElementById('selectedAddress');
  const HTMLSelectElements = window.document.getElementsByTagName('select');
  HTMLSelectElements[0].addEventListener('change', function() {
    const selectedValue = this.options[this.options.selectedIndex].value;
    console.log(selectedValue);
    if (!isNaN(selectedValue)) {
      const xhr = new XMLHttpRequest();
      const url = `http://localhost:8082/addresses/${selectedValue}`;
      xhr.open('GET', url);
      xhr.addEventListener('load', function() {
        if (200 === xhr.status) {
          const address = JSON.parse(xhr.responseText);
          console.log(address);
          selectedAddress.innerHTML = `<p>${address.street} ${address.city} ${address.country}</p>`;
        } else {
          console.log('error');
          selectedAddress.innerHTML = '';
        }
      });
      xhr.send();
  }});

  const HTMLFormElement = window.document.getElementsByTagName('form');
  console.log(HTMLFormElement);
  HTMLFormElement[0].addEventListener('submit', function(submitEvent) {
    submitEvent.preventDefault();
    const HTMLInputElements = window.document.getElementsByTagName('input');
    console.log(HTMLInputElements);
    const street = HTMLInputElements[0].value;
    const city = HTMLInputElements[1].value;
    const zipCode = HTMLInputElements[2].value;
    const country = HTMLInputElements[3].value;

    const url = 'http://localhost:8082/addresses';
    const body = {
      street: street,
      city: city,
      zipCode: zipCode,
      country: country,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
      console.log(body);
    };
    xhr.send(JSON.stringify(body));
  });
});
