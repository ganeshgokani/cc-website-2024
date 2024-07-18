document.addEventListener("DOMContentLoaded", function() {
    var loadedDiv = document.querySelector(".loader");
    
  
    
    // Hide the loaded div after 3 seconds
    setTimeout(function() {
      loadedDiv.style.display = "none";
    }, 3000);
  });
  

function showSidebar()
{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right='0px'
}

function hideBar(event) {
event.stopPropagation();
const sidebar = document.querySelector('.sidebar');
sidebar.style.right = '-250px';
}


// function hideBar()
// {
//     sidebar.style.display='none'
// }



// function showSidebar() {
// const sidebar = document.querySelector('.sidebar');
// sidebar.style.display = 'flex';
// }

// function hideBar() {
// const sidebar = document.querySelector('.sidebar');
// sidebar.style.display = 'none';
// }

//navigation bar menu bar



document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start", 
                    inline: "nearest"
                });
       hideBar()     }
        });
    });
});

//Navigate to respective section




