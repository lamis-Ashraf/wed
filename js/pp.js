const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   const serviceID = 'default_service';
   const templateID = 'template_oqhsv9o';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'اشترك الأن';
    }, (err) => {
      btn.value = 'اشترك الأن';
      alert(JSON.stringify(err));
    });
dbip.autoSelectCountry("#my-form-country");
});