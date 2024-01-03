// Jasmine Pawliw
// NSID: sob127
// Student #: 11309010
// Dr. Madison Klarkowski
// CMPT 281
// Assignment 3

// Services Page Mouseover
function changeContent(header, id_hd, txt, id_txt) {
    console.log(header);
    console.log(txt);
    document.getElementById(id_hd).innerHTML = header;
    document.getElementById(id_txt).innerHTML = txt;
}


// Today's date for appointment request
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("appt_date").setAttribute("min", today);

console.log(today)
