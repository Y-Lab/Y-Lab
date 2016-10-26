// set-version.js

$.getJSON('http://lab.y-english.org/json/site-info.json', function(data) {
    $('#site-version').append($('<i>').addClass('fa fa-globe').attr('aria-hidden', 'true')).append(' ' + data.site.version);
});

$.getJSON('https://api.github.com/repos/Y-Lab/Y-Lab.github.io', function(data) {
    $('#dev-log-version').append($('<i>').addClass('fa fa-refresh fa-spin fa-fw color-dark-gray').attr('aria-hidden', 'true')).append(' Updated ' + moment(data.pushed_at, 'YYYY-MM-DDTh:mm:ssZ').fromNow());
});