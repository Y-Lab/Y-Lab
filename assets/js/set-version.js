// set-version.js

dayjs.extend(dayjs_plugin_relativeTime);
function updateVersion(timestamp) {
    $('#dev-log-version').html(`<i class="fas fa-sync-alt fa-spin fa-fw color-dark-gray" aria-hidden="true"></i>Updated ${dayjs(timestamp).fromNow()}`);
};
var updateAt = $('meta[name=updated_at]').attr('content');
updateVersion(updateAt);
setInterval(function () {
    updateVersion(updateAt)
}, 15000);