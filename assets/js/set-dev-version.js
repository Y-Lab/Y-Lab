// set-dev-version.js

function updateVersion() {
    $.getJSON('https://api.github.com/repos/Y-Lab/Y-Lab.github.io', function(data) {
        $('#dev-log-version').html('<i class="fa fa-refresh fa-spin fa-fw color-dark-gray" aria-hidden="true"></i> Updated ' + moment(data.pushed_at).fromNow());
    });
};
updateVersion();
setInterval(updateVersion(), 15000);