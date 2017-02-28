// set-dev-version.js

var pushedAt = 'loading';
$.getJSON('https://api.github.com/repos/Y-Lab/Y-Lab.github.io', function(data) {
    pushedAt = data.pushed_at;
});
function updateVersion(timestamp) {
    if (timestamp !== 'loading') {
        $('#dev-log-version').html('<i class="fa fa-refresh fa-spin fa-fw color-dark-gray" aria-hidden="true"></i>Updated ' + moment(timestamp).fromNow());
    };
};
updateVersion(pushedAt);
setInterval(function() {
    updateVersion(pushedAt)
}, 15000);