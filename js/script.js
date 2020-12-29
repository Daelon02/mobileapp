document.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let features = document.querySelector('.features'),
        video = document.querySelector('.video'),
        team = document.querySelector('.team'),
        contacts = document.querySelector('.contacts');
    
    
        features.addEventListener('click', function() {
            window.scrollTo({
                top : 860,
                behavior : 'smooth'
        });
    })

        video.addEventListener('click', function() {
             window.scrollTo({
                top : 1773,
                behavior : 'smooth'
        });
    })

        team.addEventListener('click', function() {
            window.scrollTo({
                top : 2400,
                behavior : 'smooth'
        });
    })

        contacts.addEventListener('click', function() {
            window.scrollTo({
                top : 3901,
                behavior : 'smooth'
        });
})
})