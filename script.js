
//API query for teams

var queryURL = "https://statsapi.web.nhl.com/api/v1/teams";

$.ajax(
    {url: queryURL, method: 'GET'}
).then(function (response) {
    console.log(response)
    var team = response.teams[2].name;
    var location = response.teams[2].locationName;
    var conference = response.teams[2].conference.name;
    var venue = response.teams[2].venue.name;

    $(".teamName").append(team);
    $(".location").append(location);
    $(".conference").append(conference + ' Conference');
    $(".venue").append(venue);


    //API query for specific team roster
    $.ajax(
      {url: "https://statsapi.web.nhl.com/api/v1/teams/3/roster", method: "GET"}  
    ).then(function(response) {
        console.log(response)
        var name = response.roster[18].person.fullName;
        var number = response.roster[18].jerseyNumber;
        var position = response.roster[18].position.name;

        $(".name").append(name);
        $(".number").append(number);
        $(".position").append(position);

        //API query for selecting specific player
        $.ajax(
            {url: "https://statsapi.web.nhl.com/api/v1/people/8478550", method: "GET"}
        ).then(function(response) {
            console.log(response)

            $.ajax(
                {url: "https://statsapi.web.nhl.com/api/v1/people/8478550/stats?stats=statsSingleSeason&season=20182019", method: "GET"}  
              ).then(function(response) {
                  console.log(response)
        });
    });
    
});


});




//API endpoint for pulling one specific players stats
//https://statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20182019