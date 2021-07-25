// api url'

const apiUrl = 'https://api.exchangerate.host/';

const endpoints = {
                    rates: 'latest',
                    convert: 'convert'
                };

//params for the call

const apiParams = {
                    access_key : 'bf0a9073f48563839589649a30c8bbde'
                 };



//using jQuery get to make api call

$.get(apiUrl.concat(endpoints.rates)).then((response) => {

    //returns a success response

    let ratesObj = response.rates

    let rateKeys = Object.keys(ratesObj);

    //setting dynamic autocomplete for primary currency

    $( "#from" ).autocomplete({

        source: rateKeys,

        autoFocus: true,

    });

   //setting dynamic autocomplete for secondary currency

    $( "#to" ).autocomplete({

        source: rateKeys,

        autoFocus: true,

    });

    }).catch((err) => {

    // returns a error response

    console.error(err.statusText+' Something went wrong');

});

// onclick convert button event
$('#convert').click(function (e) {

    e.preventDefault();

    //setup different params for conversions

    let convertParams = {
                            from   :   $('#from').val(),
                            to     :   $('#to').val(),
                            amount :   $('#amount').val(),

                         };


    //console.log(convertParams);

    $.get(apiUrl.concat(endpoints.convert), convertParams).then((response) => {

        //returns a success response
        console.log(response);

        let amount = response.result.toLocaleString('en-US', { style: 'currency', currency: convertParams.to});

        let text = convertParams.amount +' '+convertParams.from +' is '+ amount

        $("#result").text(text).delay(1000).fadeIn(2000);;

        $("#date").text("on "+response.date).fadeIn('slow');

        $("#donate").text(response.motd.url).fadeIn(2000);

    }).catch((err) => {

        // returns a error response

        console.error(err.statusText+' Something went wrong');

    });

});