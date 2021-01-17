## Smooth Scroll - jQuery

### This is a simple illustration website to explain how smooth scrolling works and looks like.


Copy this script tag in html page to use:

<<<<<<< HEAD
*<script src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
crossorigin="anonymous"></script>*

##### [jQuery link to other versions](https://code.jquery.com/)
=======
{
   <script
   src="https://code.jquery.com/jquery-3.5.1.min.js"
   integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
   crossorigin="anonymous">
   </script>
}

##### [jQuery link to other versions:](https://code.jquery.com/)
>>>>>>> 018b7d5a201a668fe2f73905da287e5b2ad27fb3

### jQuery block of code:

```javascript
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
