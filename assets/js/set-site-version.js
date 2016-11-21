// set-site-version.js

$.getJSON('http://lab.y-english.org/json/site-info.json', function(data) {
    $('#site-version').append($('<i>').addClass('fa fa-globe').attr('aria-hidden', 'true')).append(' ' + data.site.version);
});