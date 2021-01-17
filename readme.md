## Smooth Scroll - jQuery

A solution for scrolling to same page links smoothly.
This is a simple illustration website to explain how `smooth scrolling` works and looks like.
Paste this script tag in html page to use:

<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>

jQuery link to other versions: [Here](https://code.jquery.com/)

`jQuery block of code:`

```
{
// Smooth Scrolling
   $('#navbar a, .btn').on('click', function (e) {
      if (this.hash !== '') {
         e.preventDefault();

         const hash = this.hash;

         $('html, body').animate(
         {
            scrollTop: $(hash).offset().top - 100,
         },
         800
         );
      }
   });
}
```