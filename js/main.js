// CONSTANTS 
const lNonEssential = [
    "GoogleAnalytics",
    "GoogleAnalytics2",
];

// INITIALIZE 
document.addEventListener("DOMContentLoaded", function() {
    let cookieContainer = document.getElementsByClassName('cookie-container')[0];
    let AcceptButton = document.getElementById('cookies-all');
    let RejectButton = document.getElementById('cookies-essential');
    
    // Display cookie banner if not selected already
    setTimeout( () => {
        if (!localStorage.getItem('cookieBannerDisplayed')) {
            cookieContainer.classList.add('active');
        }
    }, 2000);
    // Remove Scripts if cookies already rejected
    removeScripts();
    // Add Event listeners for buttons
    AcceptButton.addEventListener('click', ()=> {
        removeBanner();
        localStorage.setItem('onlyEssentials','false');
    });
    
    RejectButton.addEventListener('click', ()=> {
        removeBanner();
        localStorage.setItem('onlyEssentials','true');
        removeScripts()
    });    


});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// FUNCTIONS

function removeScripts() {
    let lScripts = document.scripts;
    if (localStorage.getItem('onlyEssentials')) {
        for (let i=lScripts.length-1;i>=0; i+=-1) {
            if (lNonEssential.includes(lScripts[i].id)) {
                console.log(`Script ${lScripts[i].id} removed`);
                lScripts[i].parentElement.removeChild(lScripts[i]);
            };
        };
    };
};

function removeBanner() {
    let cookieContainer = document.getElementsByClassName('cookie-container')[0];
    cookieContainer.classList.remove('active');
    localStorage.setItem('cookieBannerDisplayed','true');
}


function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
