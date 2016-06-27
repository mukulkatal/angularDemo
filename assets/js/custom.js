$(document).ready(function() {

    /* slimscroll js */
    $('.side-scroll').slimScroll({
        height: '94vh'
    });
    $('.panel-scroll').slimScroll({
        height: '82vh'
    });
    /* switch js */
    $.fn.bootstrapSwitch.defaults.onColor = 'blue';
    $.fn.bootstrapSwitch.defaults.offColor = 'orange';
    $("[name='properties-checkbox']").bootstrapSwitch({

    });

    /* file upload js */
    $(function() {

        // We can attach the `fileselect` event to all file inputs on the page
        $(document).on('change', ':file', function() {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        // We can watch for our custom `fileselect` event like this
        $(document).ready(function() {
            $(':file').on('fileselect', function(event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if (input.length) {
                    input.val(log);
                } else {
                    if (log) alert(log);
                }

            });
        });

    });

    /* wysiwyg editor */


    /* wysiwyg editor */




});

/* tabs js */
$('ul.nav.nav-tabs  a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});

(function($) {
    // Test for making sure event are maintained
    $('.js-alert-test').click(function() {
        alert('Button Clicked: Event was maintained');
    });
    fakewaffle.responsiveTabs(['xs', 'sm']);
})(jQuery);

/* tabs js end */

/* On click outside the div hide sidebar container */
$(document).mouseup(function(e) {
    var container = $("#sidebar");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
/* End of funtion */