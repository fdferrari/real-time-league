$(function () {

    var socket = io.connect();

    //When update a match
    socket.on('goal', function (message) {
        var match = message.match;
        //replace in the table the row of the updated match
        $('#' + match.id).replaceWith('<td id="' + match.id + '">' + match.goal_home + ' - ' + match.goal_away + '</td>');
        //a message apear for notifying the event       
        var notification_html = null;
        notification_html = '<div class="activity-item"> <i class="fa fa-futbol-o text-success"></i> <div class="activity"> Goal of ' + teamData(message.team) + '!</div> </div>';
        generate('success', notification_html);
    });



    function generate(type, text) {
        var n = noty({
            text: text
            , type: type
            , dismissQueue: true
            , layout: 'topLeft'
            , closeWith: ['click']
            , theme: 'relax'
            , maxVisible: 10
            , animation: {
                open: 'animated bounceInLeft'
                , close: 'animated bounceOutLeft'
                , easing: 'swing'
                , speed: 500
            }
        });
    }

    function teamData(equipo) {
        var name = null;
        if (equipo === 'VEL') {
            name = 'VELEZ';
        }
        if (equipo === 'FER') {
            name = 'FERRO';
        }
        if (equipo === 'RIV') {
            name = 'RIVER';
        }
        if (equipo === 'BOC') {
            name = 'BOCA';
        }
        if (equipo === 'RAC') {
            name = 'RACING';
        }
        if (equipo === 'IND') {
            name = 'INDEPENDIENTE';
        }
        if (equipo === 'HUR') {
            name = 'HURACAN';
        }
        if (equipo === 'SLA') {
            name = 'SAN LORENZO';
        }
        return name;
    }


});