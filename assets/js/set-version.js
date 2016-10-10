// set-version.js

$.getJSON('../json/site-info.json', function(data) {
    $('#site-version').append($('<i>').addClass('fa fa-globe').attr('aria-hidden', 'true')).append(' ' + data.site.version);
});

var lastCommitTime = '2016-05-31T00:00:00';
var version = moment(lastCommitTime, 'YYYY-MM-DDTh:mm:ss').utcOffset(8).fromNow();

$('#dev-log-version').append($('<i>').addClass('fa fa-refresh fa-spin fa-fw color-dark-gray').attr('aria-hidden', 'true')).append(' Updated ' + version);