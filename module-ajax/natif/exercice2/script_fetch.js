window.addEventListener('DOMContentLoaded', function() {
  const selectedAddress = window.document.getElementById('selectedAddress');
  const HTMLSelectElements = window.document.getElementsByTagName('select');
  HTMLSelectElements[0].addEventListener('change', function() {
    const selectedValue = this.options[this.options.selectedIndex].value;
    if (!isNaN(selectedValue)) {
      const promise = fetch(
        `http://localhost:8082/addresses/id=${selectedValue}`,
        {
          method: 'GET',
        }
      );

      promise.then(function(response) {
        const newPromise = response.json();
        newPromise.then(function(address) {
          console.log(address);
          selectedAddress.innerHTML = `<p>${address.street} ${address.city} ${address.country}</p>`;
        });
      });
    } else {
      selectedAddress.innerHTML = '';
    }
  });

  const HTMLFormElement = window.document.getElementsByTagName('form');
  HTMLFormElement[0].addEventListener('submit', function(submitEvent) {
    submitEvent.preventDefault();
    const HTMLInputElements = window.document.getElementsByTagName('input');
    const street = HTMLInputElements[0].value;
    const city = HTMLInputElements[1].value;
    const zipCode = HTMLInputElements[2].value;
    const country = HTMLInputElements[3].value;

    const myHeader = new Headers({
      'Content-Type': 'application/json',
    });
    const myInit = {
      method: 'POST',
      headers: myHeader,
      body: JSON.stringify({
        street: street,
        city: city,
        zipCode: zipCode,
        country: country,
      }),
    };
    const promise = fetch(`http://localhost:8082/addresses`, myInit);

    promise.then(function(response) {
      console.log(response);
      const newPromise = response.text();
      newPromise.then(function(result) {
        if ('OK' === result.status) {
          console.log(body);
        }
      });
    });
  });
});
