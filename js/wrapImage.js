$(document).ready(function() {
    wrapImageWithFancyBox();
});

setInterval(function () {
    wrapImageWithFancyBox();
}, 2000);

/**
 * Wrap images with fancybox support.
 */

function wrapImageWithFancyBox() {
    $('img').not('.sidebar-image img').not('#author-avatar img').not(".mdl-menuimg").not(".something-else-logo img").not('.avatar').not('.share-body img').each(function() {
        var $image = $(this);
        var alt = $image.attr('alt');
        var src = $image.attr('src');
        $imageWrapLink = $image.wrap('<a data-fancybox=images data-caption="'+ alt +'" href="' + src + '"></a>');
    });

    $('.qrcode').attr('data-fancybox', 'images');

    $().fancybox({
        selector: '[data-fancybox="images"]',
        thumbs: false,
        hash: true,
        loop: false,
        fullScreen: false,
        overlayOpacity: 0,
        slideShow: false,
        protect: true,
    });
}
