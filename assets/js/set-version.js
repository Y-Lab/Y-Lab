// set-version.js

function updateVersion(timestamp) {
    $('#dev-log-version').html('<i class="fa fa-refresh fa-spin fa-fw color-dark-gray" aria-hidden="true"></i>Updated ' + moment(timestamp).fromNow());
};
var updateAt = $('meta[name=updated_at]').attr('content');
updateVersion(updateAt);
setInterval(function () {
    updateVersion(updateAt)
}, 15000);