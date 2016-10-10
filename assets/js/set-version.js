// set-version.js

$.getJSON('../json/site-info.json', function(data) {
    $('#site-version').append($('<i>').addClass('fa fa-globe').attr('aria-hidden', 'true')).append(' ' + data.site.version);
});

$('#dev-log-version').append($('<i>').addClass('fa fa-spinner fa-pulse color-dark-gray').attr('aria-hidden', 'true')).append(' Last Update: ' + 'May 31, 2016');