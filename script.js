document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
    });

    // Handle Click for Service Links
    window.handleClick = function (event, serviceName) {
        event.preventDefault();
        alert(`You clicked on ${serviceName}. This link is currently not active.`);
    };

    // Handle Click for Explore Our Services Button
    window.handleExploreClick = function (event) {
        event.preventDefault();
        alert('You clicked on Explore Our Services. Redirecting to the services section...');
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    };
});
