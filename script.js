$('#section-1 a, #section-2 a, #section-3 a, #section-4 a, .btn').on('click', function (e) {
    if (this.hash !== '') {
       e.preventDefault();
 
       const hash = this.hash;
 
       $('html, body').animate(
       {
          scrollTop: $(hash).offset().top - 0,
       },
       800
       );
    }
 });