


const summit = ()=> {

    let contactName = document.getElementById("contactName").value.trim();
let contactPhone = document.getElementById("contactPhone").value.trim();
let numTravelers = document.getElementById("numTravelers").value;
let joinLand = document.getElementById("joinLand").checked;
    console.log("summit")
    if(contactName ===""){
        alert("Please enter the contact name");
        return;

    }

    if(contactPhone ===""){
        alert("Please enter the contact phone number");
        return;

    }
    numTravelers = parseInt(numTravelers);
    if(numTravelers<1 || numTravelers>15){
        alert("Please enter the number between 1-15");
        return;
    }

    if(joinLand){
        let confirmation = confirm("Do you really want to buy your own ticket?");
        if(confirmation){
            alert("You choose to buy your own ticket.");
        }
    }
}
