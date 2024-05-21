document.addEventListener("DOMContentLoaded", function() {
    var wheel = document.getElementById('wof');
    var spinButton = document.getElementById('spinButton');
    
    // Add event listener to the button
    spinButton.addEventListener('click', function() {
        // Calculate a random degree for the wheel to land on
        var randomDegree = Math.floor(Math.random() * 360);
        // Store the random degree as a CSS variable
        wheel.style.setProperty('--rotation', randomDegree + 'deg');
        
        // Start the animation by adding a class
        wheel.classList.add('spin-animation');
        
        // Determine which page to redirect based on the degree the wheel landed on
        setTimeout(function() {
            var pageToRedirect = determinePage(randomDegree);
            window.location.href = pageToRedirect;
        }, 2000); // Adjust the delay to match the animation duration
        
    });
    
    function determinePage(degree) {
        // Calculate the section based on the degree
        var section = Math.floor(degree / 45); // 360 degrees divided by 8 sections
        
        // Determine which page to redirect based on the section
        switch (section) {
            case 0:
                return "./frenzy.html";
            case 1:
                return "page2.html";
            case 2:
                return "page3.html";
            case 3:
                return "page4.html";
            case 4:
                return "page5.html";
            case 5:
                return "page6.html";
            case 6:
                return "page7.html";
            case 7:
                return "page8.html";
            default:
                return "index.html"; // Default return
        }
    }
});
