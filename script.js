$(document).ready(function() {
    $('#time').click(function() {
        $.get('/api/time', function(data) {
            $('#timeResult').html(data.timeNow);
        });
    });
    // $('#List').click(function() {
    //     $.ajax({
    //         url: "/api/v1/listlibrary",
    //         type: "GET",
    //         contentType: "application/json",
    //         success: function (libr) {
    //             var rows = "";
    //             $.each(libr, function (index, lib) {
    //                 // добавляем полученные элементы в таблицу
    //                 rows += lib;
    //             });
    //             $("#result").append(rows);
    //         }
    //     });
    // });
});