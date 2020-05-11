import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const loadingDoc = fromEvent(document, "DOMContentLoaded");

loadingDoc.subscribe(() => {
    const formAddress = document.getElementById("formAddress")
    const formPerson = document.getElementById("formPerson")
    const addressesSelection = window.document.createElement("select");
    const defaultOption = document.createElement("option");
    defaultOption.text = "Select";
    const submitInput = document.createElement("input");
    submitInput.type = "submit";
    submitInput.value = "Enregistrer";

    ajax({
        url: "http://localhost:8082/addresses",
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
            // console.log(addresses);
            // addresses.map(x => console.log(x.id));
            addressesSelection.add(defaultOption);
            for (let i = 0; i < addresses.length; i++){
                addressesSelection.innerHTML = addressesSelection.innerHTML +
                '<option value="' + addresses[i]['id'] + '">' + addresses[i]['street'] + " " + addresses[i]['city'] + " " + addresses[i]['zipCode'] + " " + addresses[i]['country'] +
                '</option><br />';
            }
            formPerson.appendChild(addressesSelection);
            formPerson.appendChild(submitInput);
        }
    })

    const submitAddressEvent = fromEvent(formAddress, "submit");
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

    const submitPersonEvent = fromEvent(formPerson, "submit");
    
    submitPersonEvent.subscribe((event) => {
        event.preventDefault();
        const HTMLInputElements = document.getElementsByTagName("input");
        const firstname = HTMLInputElements[5].value;
        const lastname = HTMLInputElements[6].value;
        const birthDate = HTMLInputElements[7].value;
        const addressId = parseInt(addressesSelection.options[addressesSelection.selectedIndex].value);
        console.log(addressId);
        ajax({
            url: "http://localhost:8082/persons",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: {
                firstName: firstname,
                lastName: lastname,
                birthDate: birthDate,
                addressId: addressId,
            }
        }).subscribe((data) => {
            console.log(data.request);
            console.log(data.response);
        })
    })
})
