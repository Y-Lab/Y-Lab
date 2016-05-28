// set-footer.js

function getCurrentYear() {
    var currentDate = new Date();
    return currentDate.getFullYear();
};

$.getJson("data/footer-data", function(data) {var footer_data = data;});
$('#footer-info').append($('<p>').append($('<a>').attr('href', footer_data.site.link).html(footer_data.site.name)).append(' (' + footer_data.site.version + ')'));
$('#footer-info').append($('<p>').attr('id', 'powered-by').html('Powered by '));
for (var i in footer_data.powered_by) {
    powered_by = footer_data.powered_by[i]
    if (i < 1) {
        $('#powered-by').append($('<a>').attr('href', powered_by.link).attr('target', '_blank').html(powered_by.name)).append(' ' + powered_by.version);
    }
    else {
        $('#powered-by').append(' &middot; ').append($('<a>').attr('href', powered_by.link).attr('target', '_blank').html(powered_by.name)).append(' ' + powered_by.version);
    }
}
$('#footer-info').append($('<p>').html('&copy; ' + getCurrentYear() + ' ')
    .append(footer_data.copyright.organization.prefix)
    .append($('<a>').attr('href', footer_data.copyright.organization.link).attr('target', '_blank').html(footer_data.copyright.organization.name))
    .append(footer_data.copyright.organization.suffix)
);
$('#footer-info').append($('<p>').attr('id', 'contact').append($('<i>').attr('aria-hidden', 'true').addClass('fa fa-paper-plane-o')).append(' Contact: ').append($('<a>').attr('href', 'mailto:' + footer_data.site.support + '?subject=Mail From Y-Lab Website').html(footer_data.site.support)));