import {
    fromEvent
} from 'rxjs';
import {
    ajax
} from 'rxjs/ajax';

const loadingDoc = fromEvent(document, "DOMContentLoaded");

const formPerson = document.getElementById("formPerson");
const addressInput = document.getElementById("addressInput");
const addressesContainer = window.document.createElement("div");
const addressesList = window.document.createElement("ul");
const submitAddressEvent = fromEvent(formAddress, "submit");

loadingDoc.subscribe(() => {
    submitAddressEvent.subscribe((event) => {
        event.preventDefault();
        const HTMLInputElements = document.getElementsByTagName("input");
        const street = HTMLInputElements[0].value;
        const city = HTMLInputElements[1].value;
        const zipCode = HTMLInputElements[2].value;
        const country = HTMLInputElements[3].value;
        ajax({
            url: "http://localhost:8082/addresses",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                street: street,
                city: city,
                zipCode: zipCode,
                country: country
            }
        }).subscribe((data) => {
            console.log(data.request);
            console.log(data.response);
        })
    })

})
fromEvent(addressInput, "keyup").subscribe((event) => {
    let city = event.target.value;
    if (city && typeof city === "string") {
        city = city.charAt(0).toUpperCase() + city.slice(1);
    }
    console.log(city);
    ajax({
        url: `http://localhost:8082/addresses/searchByCity/${city}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            // TODO
        }
    }).subscribe((data) => {
        if (data.status === 200) {
            let addresses = data.response;
            console.log(addresses);
            // addresses.map(x => console.log(x.id));
            for (let i = 0; i < addresses.length; i++) {
                addressesList.innerHTML = addressesList.innerHTML + "<li>" + addresses[i]['street'] + " " + addresses[i]['city'] + " " + addresses[i]['zipCode'] + " " + addresses[i]['country'] + "</li><br>"
            }
        }
    })
})
formPerson.appendChild(addressesContainer);
addressesContainer.appendChild(addressesList);