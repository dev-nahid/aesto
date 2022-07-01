<script>
// Kg Gallery
var images = document.querySelectorAll('.kg-gallery-image img');
images.forEach(function(image) {
    var container = image.closest('.kg-gallery-image');
    var width = image.attributes.width.value;
    var height = image.attributes.height.value;
    var ratio = width / height;
    container.style.flex = ratio + ' 1 0%';
});

// Fit vids
$(document).ready(function() {
    var $postContent = $(".it-content");
    $postContent.fitVids();
});
</script>


<script>
//Mobile menu
$(document).ready(function() {
    // Mobile Menu Trigger
    $('.it-burger').click(function() {
        $('body').toggleClass('it-head-open');
    });

    //Images Zoom

    $('.kg-image-card img').attr('data-action', 'zoom');
    // If the image is inside a link, remove zoom
    $('.kg-image-card a img').removeAttr('data-action');

});


//Lazy Load
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    use_native: true
});
lazyLoadInstance.update();

// Dark/Light Mode

var html = document.querySelector('html'),
    darkLight = document.querySelector('.it-dark-light')
darkLight.addEventListener('click', function() {
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark')
        localStorage.setItem('selected-theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light')
        localStorage.setItem('selected-theme', 'light');
    }
    console.log(html.hasAttribute('data-theme'))
})
</script>