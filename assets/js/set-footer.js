// set-footer.js

// function getCurrentYear() {
//     var currentDate = new Date();
//     return currentDate.getFullYear();
// };

$.getJSON('./json/footer-data.json', function(data) {
    $('#footer-info').append($('<p>').append($('<a>').attr('href', data.site.link).html(data.site.name)).append(' (' + data.site.version + ')'));
    $('#footer-info').append($('<p>').attr('id', 'powered-by').html('Powered by '));
    for (var i in data.powered_by) {
        powered_by = data.powered_by[i]
        if (i < 1) {
            $('#powered-by').append($('<a>').attr('href', powered_by.link).attr('target', '_blank').html(powered_by.name)).append(' ' + powered_by.version);
        }
        else {
            $('#powered-by').append(' &middot; ').append($('<a>').attr('href', powered_by.link).attr('target', '_blank').html(powered_by.name)).append(' ' + powered_by.version);
        }
    }
    $('#footer-info').append($('<p>').html(function(){var currentDate = new Date(); return '&copy; ' +  currentDate.getFullYear() + ' ';})
        .append(data.organization.prefix)
        .append($('<a>').attr('href', data.organization.link).attr('target', '_blank').html(data.organization.name))
        .append(data.organization.suffix)
    );
    $('#footer-info').append($('<p>').attr('id', 'contact').append($('<i>').attr('aria-hidden', 'true').addClass('fa fa-paper-plane-o')).append(' Contact: ').append($('<a>').attr('href', 'mailto:' + data.site.support + '?subject=Mail From Y-Lab Website').html(data.site.support)));
});
