Expandable portfolio gallery
===

## Getting started

This example uses the Masonry library for better presentation.

Included the latest jQuery library together with `expandable-portfolio-gallery.js` and `expandable-portfolio-gallery.css` into your document's `<head>`:

````html
<link rel="stylesheet" href="../expandable-portfolio-gallery.css" />

<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/masonry/3.2.3/masonry.pkgd.min.js"></script>

<script src="../expandable-portfolio-gallery.js"></script>

<script>
$(document).ready(function () {
    var masonry = new Masonry( $('.example-portfolio__list')[0]);
    expandablePortfolioGallery();
});
</script>
````

Included HTML markup:

````html
<div data-expandablePortfolioGallery="">
    <div data-expandablePortfolioGallery-list="" data-masonry-options='{ "columnWidth": 0, "itemSelector": ".example-portfolio__item" }'>
        <div data-expandablePortfolioGallery-item="itemId">
            ...
        </div>
    </div>
</div>
<div data-expandablePortfolioGallery-contentList="">
    <div data-expandablePortfolioGallery-content="itemId">
        <a data-expandablePortfolioGallery-close="">&times;</a>
        ...
    </div>
</div>
````
