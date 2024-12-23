function sendMail(event){

    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    const message = document.getElementById('message').value;

 
    const subject = `Message de ${firstname}_${lastname}`; 
    const dest = 'ingenieurbanconle@gmail.com'; 

    const body = `Nom : ${firstname}_${lastname}\n\nMessage :\n${message}`;

      const mailtoLink = `mailto:ingenieurbanconle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
}