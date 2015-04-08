/*!
 * @preserve moduleStub - description
 * website.com
 * (c) author date | License
 */
'use strict';

(function (name, context, definition) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        context[name] = definition(context.$);
    }
})('expandablePortfolioGallery', this, function($) {
    var gallery = 'data-expandablePortfolioGallery',
        galleryList = 'data-expandablePortfolioGallery-list',
        galleryItem = 'data-expandablePortfolioGallery-item',
        galleryClose = 'data-expandablePortfolioGallery-close',
        galleryContentList = 'data-expandablePortfolioGallery-contentList',
        galleryContent = 'data-expandablePortfolioGallery-content',

        $gallery,
        $galleryList,
        $galleryItem,
        $galleryClose,
        $galleryContentList,
        $galleryContent,

        $body,

        expandableIn,
        expandableOut;

    function module() {
        $(document).ready(function () {
            $body = $('body');
            $gallery = $('[' + gallery + ']');
            $galleryList = $('[' + galleryList + ']');
            $galleryItem = $('[' + galleryItem + ']');
            $galleryClose = $('[' + galleryClose + ']');
            $galleryContentList = $('[' + galleryContentList + ']');

            $body.on('click', '[' + galleryItem + ']', expandableIn);
            $body.on('click', '[' + galleryClose + ']', expandableOut);
        });
    }

    expandableIn = function (event) {
        var galleyContentId = $(event.currentTarget).attr(galleryItem),
            transformOriginLeft = ($(event.currentTarget).position().left + $(event.currentTarget).width() / 2) / $galleryList.width() * 100,
            transformOriginTop = ($(event.currentTarget).position().top + $(event.currentTarget).height() / 2) / $galleryList.height() * 100;

        $galleryContent = $('[' + galleryContent + ' = "' + galleyContentId +'"]');

        $galleryList.css('transform-origin', transformOriginLeft + '% ' + transformOriginTop + '% 0');
        $galleryList.addClass('zoom-in');

        $(this).addClass('slide-out');

        $galleryContentList.css('visibility', 'visible');
        $galleryContent.css('transform-origin', transformOriginLeft + '% ' + transformOriginTop + '% 0');
        $galleryContent.addClass('show-in');

        setTimeout(function () {
            $galleryContentList.addClass('visible');
            $body.css('overflow', 'hidden');
        }, 2000);
    };

    expandableOut = function (event) {
        $galleryContent = $('[' + galleryContent + ']');
        $galleryContent.removeClass('show-in');

        $galleryContentList.removeClass('visible');
        $galleryList.removeClass('zoom-in');
        $galleryItem.removeClass('slide-out');

        setTimeout(function() {
            $galleryContentList.css('visibility', '');
            $body.css('overflow', '');
        }, 2000);
    };

    return module;
});
