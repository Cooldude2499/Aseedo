// const { default: axios } = require("axios");

const states = [
    { state: "Andaman and Nicobar Islands", abbr: 'AN' },
    { state: "Andhra Pradesh", abbr: 'AP' },
    { state: "Arunachal Pradesh", abbr: 'AR' },
    { state: "Assam", abbr: 'AS' },
    { state: "Bihar", abbr: 'BR' },
    { state: "Chandigarh", abbr: 'CH' },
    { state: "Chhattisgarh", abbr: 'CG' },
    { state: "Dadra and Nagar Haveli and Daman and Diu", abbr: 'DH' },
    { state: "Delhi", abbr: 'DL' },
    { state: "Goa", abbr: 'GA' },
    { state: "Gujarat", abbr: 'GJ' },
    { state: "Haryana", abbr: 'HR' },
    { state: "Himachal Pradesh", abbr: 'HP' },
    { state: "Jammu and Kashmir", abbr: 'JK' },
    { state: "Jharkhand", abbr: 'JH' },
    { state: "Karnataka", abbr: 'KA' },
    { state: "Kerala", abbr: 'KL' },
    { state: "Ladakh", abbr: 'LA' },
    { state: "Lakshadweep", abbr: 'LD' },
    { state: "Madhya Pradesh", abbr: 'MP' },
    { state: "Maharashtra", abbr: 'MH' },
    { state: "Manipur", abbr: 'MN' },
    { state: "Meghalaya", abbr: 'ML' },
    { state: "Mizoram", abbr: 'MZ' },
    { state: "Nagaland", abbr: 'NL' },
    { state: "Odisha", abbr: 'OR' },
    { state: "Puducherry", abbr: 'PY' },
    { state: "Punjab", abbr: 'PB' },
    { state: "Rajasthan", abbr: 'RJ' },
    { state: "Sikkim", abbr: 'SK' },
    { state: "Tamil Nadu", abbr: 'TN' },
    { state: "Telangana", abbr: 'TG' },
    { state: "Tripura", abbr: 'TR' },
    { state: "Uttar Pradesh", abbr: 'UP' },
    { state: "Uttarakhand", abbr: 'UK' },
    { state: "West Bengal", abbr: 'WB' },
]

states.map((state) => {
    $(".states ul").append(`<li>${state.state}</li>`)
})
$(".states-dropdown").on("click", (e) => {
    $(".states .datalist").toggleClass("d-none");
    $(".states-dropdown i").toggleClass("rotate-arrow");
})

$(".states .datalist li").on("click", async (e) => {
    var selectedState = e.target.innerText;
    $(".state").val(selectedState);
    $(".states p").text(selectedState).css({ color: "black" });
    var stateAbbr = states.find(state => state.state === selectedState);
    // fetch api for cities
    var config = {
        method: 'get',
        url: `https://api.countrystatecity.in/v1/countries/IN/cities/${stateAbbr.abbr}/cities`,
        headers: {
            'X-CSCAPI-KEY': 'SmU5bnJXS3BIaHdrWWdvWGJBTFdwdXhtcWd2dUlxU055N2MwdE5OUw=='
        }
    };
    const res = await axios.get(`https://api.countrystatecity.in/v1/countries/IN/cities/${stateAbbr.abbr}/cities`, {
        headers: {
            'X-CSCAPI-KEY': 'SmU5bnJXS3BIaHdrWWdvWGJBTFdwdXhtcWd2dUlxU055N2MwdE5OUw=='
        }
    })
        .then((response) => {
                response.map((city) => {
                    $(".cities ul").append(`<li>${city}</li>`);
                })
            console.log(res);
        })
        .catch((error) => { console.log(error) })
})

