$(function() {
    if (screen.width > 991) {
        $('.fix-height').each(function (i, el) {
            var height = $(this).parents('.row').height() - 55;
            $(this).height(height);
        });
    }
});
$(function () { $("[data-toggle='popover']").popover(); });