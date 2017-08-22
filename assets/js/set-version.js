// set-version.js

function updateVersion(timestamp) {
    $('#dev-log-version').html('<i class="fa fa-refresh fa-spin fa-fw color-dark-gray" aria-hidden="true"></i>Updated ' + moment(timestamp).fromNow());
};
var updateAt = $('#dev-log-version').attr('data-update-at');
updateVersion(updateAt);
setInterval(function () {
    updateVersion(updateAt)
}, 15000);