const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0 0 -50px 0'
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

    const sections = Array.from(document.getElementsByClassName('section'));

    for(let section of sections) {
        observer.observe(section);
    }
});


/* Storing user's device details in a variable*/
let details = navigator.userAgent; 
  
/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i; 
  
/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details); 
  
if (isMobileDevice) { 
    console.log("You are using a Mobile Device"); 
} else { 
    console.log("You are using Desktop"); 
}
