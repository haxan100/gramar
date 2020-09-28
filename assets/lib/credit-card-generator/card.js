function generateaddress() {
    var a = $("#hiddenCard").val();
    if ("" == a) return alert("Please Select Card Type"), !1;
	showOverlay();
	
    $(".overlay").fadeIn(), setTimeout(function() {
		hideOverlay();
        $(".overlay").fadeOut(), "visa" == a ? visa() : "master" == a ? master() : "amex" == a ? american() : "discover" == a ? discover() : "jcb" == a && jcb()
    }, 2000)
}
$(document).ready(function() {
    // $("#flipCard").on("click", function() {
    //     $("#jp-card").hasClass("jp-card-flipped") ? $("#jp-card").removeClass("jp-card-flipped") : $("#jp-card").addClass("jp-card-flipped")
    // })
});
var nameList = ["James", "Christopher", "Jackson", "Jayden", "Etha", "Tyler", "Aiden", "Joseph", "Noah", "Matthew", "Jose", "Jes", "William", "Landon", "Hunter", "David", "Andrew", "Jos", "Gabriel", "Joshua", "Daniel", "Anthony", "Elijah", "Michael", "Ryan", "Ava", "Anna", "Hannah", "Alyssa", "Addison", "Brooklyn", "Natalie", "Samantha", "Julia", "Grace", "Alexis", "Ashley", "Chloe", "Katherine", "Elizabeth", "Isabella", "Sophia", "Emily", "Emma", "Madison", "Olivia", "Abigail", "Mia", "Brianna"],
    secondNameList = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins"],
    addressList = ["Cedar Lane", "Franklin Court", "Andover Court", "Country Club Road", "Highland Drive", "Crescent Street", "Linden Avenue", "King Street", "Ann Street", "Jefferson Avenue", "Maiden Lane", "Forest Street", "Arlington Avenue", "Franklin Avenue", "Laurel Lane", "Rose Street", "White Street", "Warren Avenue", "Briarwood Drive", "Madison Avenue", "Hanover Court", "Windsor Drive", "Summit Avenue", "Charles Street", "Cedar Avenue", "John Street", "River Street", "Grand Avenue", "Route 1", "Devon Court", "Monroe Street", "Woodland Drive", "Garfield Avenue", "Main Street", "Essex Court", "Front Street North", "Williams Street", "Orchard Avenue", "Willow Avenue", "Laurel Drive", "Pleasant Street", "Atlantic Avenue", "Fairway Drive", "Clay Street", "Olive Street", "Route 30", "Cottage Street", "Broad Street", "Court Street", "Heather Lane"],
    countryList = ["Afghanistan", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Aruba", "Australia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Brazil", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China", "Christmas Island", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Ecuador", "Egypt", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "France", "France", "France", "France", "France", "France", "France", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Monaco", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Paraguay", "Peru", "Philippines", "Philippines", "Philippines", "Philippines", "Philippines", "Philippines", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Singapore", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "St. Helena", "Sudan", "Suriname", "Swaziland", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Sweden", "Switzerland", "Tajikistan", "Thailand", "Togo", "Tokelau", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Kingdom", "United Kingdom", "United Kingdom", "United Kingdom", "United Kingdom", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Western Sahara", "Yemen", "Serbia", "Zambia", "Zimbabwe"],
    nameRandomed = [],
    secondNameRandomed = [],
    addressRandomed = [],
    coutryRandomed = [],
    year = (new Date).getFullYear(),
    month = (new Date).getMonth() + 1,
    yearRandomed = 0,
    monthRandomed = 0;

function randomsANameAndAddress() {
    nameRandomed = [], secondNameRandomed = [], addressRandomed = [], coutryRandomed = [];
    var a = nameList[Math.floor(Math.random() * nameList.length)],
        e = secondNameList[Math.floor(Math.random() * secondNameList.length)];
    nameRandomed.push(a), secondNameRandomed.push(e);
    var r = addressList[Math.floor(Math.random() * addressList.length)];
    addressRandomed.push(r);
    var i = countryList[Math.floor(Math.random() * countryList.length)];
    if (coutryRandomed.push(i), yearRandomed = Math.floor(6 * Math.random()) + year, monthRandomed = Math.floor(12 * Math.random() + 1), yearRandomed == year) {
        var n = 12 - month;
        monthRandomed = Math.floor(Math.random() * n + 1) + month
    }
    yearRandomed == year + 5 && (monthRandomed = Math.floor(Math.random() * (month - 1) + 1))
}

function randomsOneVisaNumber() {
    visaDigits = [4], visaDigSum = 8;
    for (var a = 0; a < 14; a++) {
        var e = Math.floor(10 * Math.random());
        visaDigits.push(e), a % 2 == 1 && (e *= 2) > 9 && (e -= 9), visaDigSum += e
    }
    var r = 10 - visaDigSum % 10;
    visaDigSum % 10 == 0 && (r = 0), visaDigits.push(r)
}
var jcbDigits = [3, 5],
    jcbDigSum = 11;

function randomsOneJcbCardNumber() {
    jcbDigits = [3, 5], jcbDigSum = 11;
    var a = Math.floor(7 * Math.random() + 2);
    jcbDigits.push(a), (a *= 2) > 9 && (a -= 9), jcbDigSum += a, a = Math.floor(2 * Math.random() + 8), jcbDigits.push(a), jcbDigSum += a;
    for (var e = 0; e < 11; e++) a = Math.floor(10 * Math.random()), jcbDigits.push(a), e % 2 == 0 && (a *= 2) > 9 && (a -= 9), jcbDigSum += a;
    var r = 10 - jcbDigSum % 10;
    jcbDigSum % 10 == 0 && (r = 0), jcbDigits.push(r)
}
var discoverDigits = [6, 0, 1, 1],
    discoverDigSum = 6;

function randomsOneDiscoverCardNumber() {
    discoverDigits = [6, 0, 1, 1], discoverDigSum = 6;
    for (var a = 0; a < 11; a++) {
        var e = Math.floor(10 * Math.random());
        discoverDigits.push(e), a % 2 == 0 && (e *= 2) > 9 && (e -= 9), discoverDigSum += e
    }
    var r = 10 - discoverDigSum % 10;
    discoverDigSum % 10 == 0 && (r = 0), discoverDigits.push(r)
}
var americanExpressDigits = [3],
    americanExpressDigSum = 3;

function randomsOneAmericanExpressCardNumber() {
    americanExpressDigits = [3], americanExpressDigSum = 3;
    var a = Math.floor(2 * Math.random());
    0 == a && (a = 4), 1 == a && (a = 7), americanExpressDigits.push(a), (a *= 2) > 9 && (a -= 9), americanExpressDigSum += a;
    for (var e = 0; e < 12; e++) a = Math.floor(10 * Math.random()), americanExpressDigits.push(a), e % 2 == 1 && (a *= 2) > 9 && (a -= 9), americanExpressDigSum += a;
    var r = 10 - americanExpressDigSum % 10;
    americanExpressDigSum % 10 == 0 && (r = 0), americanExpressDigits.push(r)
}
var masterCardDigits = [5],
    masterCardDigSum = 1;

function randomsOneMasterCardNumber() {
    masterCardDigits = [5], masterCardDigSum = 1;
    var a = Math.floor(5 * Math.random() + 1);
    masterCardDigits.push(a), masterCardDigSum += a;
    for (var e = 0; e < 13; e++) a = Math.floor(10 * Math.random()), masterCardDigits.push(a), e % 2 == 0 && (a *= 2) > 9 && (a -= 9), masterCardDigSum += a;
    var r = 10 - masterCardDigSum % 10;
    masterCardDigSum % 10 == 0 && (r = 0), masterCardDigits.push(r)
}

function visa() {
    randomsOneVisaNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), visaDigits = "" + visaDigits, $(".jp-card-number").html(visaDigits.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")), $(".jp-card-name").html(nameRandomed + " " + secondNameRandomed), $(".jp-card-cvc").html(Math.floor(900 * Math.random() + 100)), $(".jp-card-expiry").html(a)
}

function american() {
    randomsOneAmericanExpressCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), americanExpressDigits = "" + americanExpressDigits, $(".jp-card-number").html(americanExpressDigits.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")), $(".jp-card-name").html(nameRandomed + " " + secondNameRandomed), $(".jp-card-cvc").html(Math.floor(900 * Math.random() + 100)), $(".jp-card-expiry").html(a)
}

function discover() {
    randomsOneDiscoverCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), discoverDigits = "" + discoverDigits, $(".jp-card-number").html(discoverDigits.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")), $(".jp-card-name").html(nameRandomed + " " + secondNameRandomed), $(".jp-card-cvc").html(Math.floor(900 * Math.random() + 100)), $(".jp-card-expiry").html(a)
}

function jcb() {
    randomsOneJcbCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), jcbDigits = "" + jcbDigits, $(".jp-card-number").html(jcbDigits.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")), $(".jp-card-name").html(nameRandomed + " " + secondNameRandomed), $(".jp-card-cvc").html(Math.floor(900 * Math.random() + 100)), $(".jp-card-expiry").html(a)
}

function master() {
    randomsOneMasterCardNumber(), randomsANameAndAddress();
    var a = [];
    monthRandomed < 10 && a.push("0"), a.push(monthRandomed + "/" + yearRandomed.toString()), masterCardDigits = "" + masterCardDigits, $(".jp-card-number").html(masterCardDigits.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")), $(".jp-card-name").html(nameRandomed + " " + secondNameRandomed), $(".jp-card-cvc").html(Math.floor(900 * Math.random() + 100)), $(".jp-card-expiry").html(a)
}

function cardChange(a) {
	var preloader = document.getElementById("preloader").disabled;
	if (preloader == true) {
       return;
    }
    var e = $(a).attr("data-cardtitle");
    if ($("#cardsLeft span.card").addClass("cdisabled fade-in"), $(".jp-card-cvc").html("•••"), $(".jp-card-number").html("•••• •••• •••• ••••"), $(".jp-card-name").html("NAME"), $(".jp-card-expiry").html("••/••"), "visa" == e) $("#jp-card").removeClass(), $("#jp-card").addClass("jp-card jp-card-visa jp-card-identified"), r = "#" + (r = $(a).attr("id")) + " .card.visa", $(r).removeClass("cdisabled fade-in"), $("#hiddenCard").val("visa");
    else if ("master" == e) {
        $("#jp-card").removeClass(), $("#jp-card").addClass("jp-card jp-card-identified jp-card-mastercard"), r = "#" + (r = $(a).attr("id")) + " .card.master", $(r).removeClass("cdisabled fade-in"), $("#hiddenCard").val("master")
    } else if ("ames" == e) {
        $("#jp-card").removeClass(), $("#jp-card").addClass("jp-card jp-card-identified jp-card-amex"), r = "#" + (r = $(a).attr("id")) + " .card.amex", $(r).removeClass("cdisabled fade-in"), $("#hiddenCard").val("amex")
    } else if ("discover" == e) {
        $("#jp-card").removeClass(), $("#jp-card").addClass("jp-card jp-card-identified jp-card-discover"), r = "#" + (r = $(a).attr("id")) + " .card.discover", $(r).removeClass("cdisabled fade-in"), $("#hiddenCard").val("discover")
    } else if ("jcb" == e) {
        $("#jp-card").removeClass(), $("#jp-card").addClass("jp-card jp-card-identified jp-card-jcb"), r = "#" + (r = $(a).attr("id")) + " .card.jcb", $(r).removeClass("cdisabled fade-in"), $("#hiddenCard").val("jcb")
    } else if ("dclub" == e) {
        var r;
        $("#jp-card").removeClass(), $("#jp-card").addClass("jp-card jp-card-identified jp-card-Dclub"), r = "#" + (r = $(a).attr("id")) + " .card.diners_club", $(r).removeClass("cdisabled fade-in"), $("#hiddenCard").val("diners_club")
    }
}

function randomNumber(a, e) {
    return Math.round(Math.random() * (e - a) + a)
}