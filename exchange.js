// api access key and url'

const apiUrl = 'http://data.fixer.io/api/latest';

const apiParams = {
                    access_key : 'bf0a9073f48563839589649a30c8bbde'
                 };

$.get('http://data.fixer.io/api/latest', apiParams).then((result) => {

    let ratesObj = response.rates

    let rateKeys = Object.keys(ratesObj);

    $( "#from" ).autocomplete({

        source: rateKeys,

        autoFocus: true,

    });

    $( "#to" ).autocomplete({

        source: rateKeys,

        autoFocus: true,

    });


}).catch((err) => {

    console.error(err.statusText+' Something went wrong');

});

// (response,status, jqXHR) => {

//     console.log(status);

//     console.log(jqXHR.fail());

//     // if(!jqXHR.fail()){
//     //     alert('LALL')
//     // }

//     let ratesObj = response.rates

//     let rateKeys = Object.keys(ratesObj);

//     $( "#from" ).autocomplete({

//         source: rateKeys,

//         autoFocus: true,

//     });

//     $( "#to" ).autocomplete({

//         source: rateKeys,

//         autoFocus: true,

//     });

// },'json');



// fetch(fetch_url)

//     .then( response => response.json() )

//     .then( data => {
//                         rates = data.rates;

//                         //console.log(rates);

//                         let currencies = new Array();

//                         for (const rateLabel in rates) {

//                             let li = document.createElement('li');

//                             currencies.push(rateLabel)

//                             //console.log(`${rate}: ${rates[rate]}`);

//                         }

//                        // console.log(currencies);

//                         $( "#from" ).autocomplete({

//                             source: currencies,

//                             autoFocus: true,

//                             minLength: 2
//                         });

//                         $( "#to" ).autocomplete({

//                             source: currencies,

//                             autoFocus: true,

//                             minLength: 2

//                         });


//                     //});

