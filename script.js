$(document).ready(function() {
    $('#time').click(function() {
        $.get('/api/time', function(data) {
            $('#timeResult').html(data.timeNow);
        })
    });
    $('#lib').click(function () {
        $.get('/api/lib', function (data) {
            $('#libResult').html(data.li)
        })
    })
});