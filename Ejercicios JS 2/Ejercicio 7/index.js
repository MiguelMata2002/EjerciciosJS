var personArr=[
    {
        "personId":123,
        "name":"Jhon",
        "city":"Melbourne",
        "phoneNo":"1234567890"
    },
    {
        "personId":123,
        "name":"Amelia",
        "city":"Sydney",
        "phoneNo":"1234567890"
    },
    {
        "personId":123,
        "name":"Abraham",
        "city":"Perth",
        "phoneNo":"1234567890"
    }
]
const tableBody=document.querySelector(`#personTable tbody`);
personArr.forEach(function(person){
    let row=document.createElement('tr');
    row.innerHTML=`
        <td>${person.personId}</td>
        <td>${person.name}</td>
        <td>${person.city}</td>
        <td>${person.phoneNo}</td>
    `;
    tableBody.appendChild(row)
})