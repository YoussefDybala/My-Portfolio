let span = document.querySelector(".up")
window.onscroll = function () {
    // console.log(scrollY)
    if (this.scrollY >= 1000) {
        span.classList.add("show")
    }else {
        span.classList.remove("show")
    }
}
span.onclick = function () {
    window.scrollTo({
    top:0,
    behavior:"smooth"
    })
}



/////////////////////////////////////////////////////////////// Landing
const landing = document.querySelectorAll(".landing .land-c");

// Keep track of the number of elements being observed

// IntersectionObserver options
const options = {
    root: null,
    threshold: 0,
    
};
// IntersectionObserver callback
const landingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            landingObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                landingObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
landing.forEach((element) => {
    landingObserver.observe(element);
});




var typed = new Typed(".auto-type" , {
    strings : [ "Youssef Ahmed" , "FrontEnd Developer" , "Designer"] ,
    typeSpeed : 80 ,
    backSpeed : 80 , 
    loop : true
})




/////////////////////////////////////////////////////////////// Landing


/////////////////////////////////////////////////////////////// Service


const servic = document.querySelectorAll(".box-service .serv-box");
const services = document.querySelector(".box-service")


// Keep track of the number of elements being observed
let observedCount = services.length;

// IntersectionObserver callback
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            serviceObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                serviceObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
servic.forEach((element) => {
    serviceObserver.observe(element);
});

/////////////////////////////////////////////////////////////// Service




/////////////////////////////////////////////////////////////// Skills

const skill = document.querySelectorAll(".skill-boxes .skill-box");
const skills = document.querySelector(".skill-boxes")
// Keep track of the number of elements being observed


// IntersectionObserver callback
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            skillObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                skillObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
skill.forEach((element) => {
    skillObserver.observe(element);
});


/////////////////////////////////////////////////////////////// Skills





/////////////////////////////////////////////////////////////// Projects

const project = document.querySelectorAll(".proj-boxes .proj-box");
const projects = document.querySelector(".skill-boxes")
// Keep track of the number of elements being observed


// IntersectionObserver callback
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            projectObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                projectObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
project.forEach((element) => {
    projectObserver.observe(element);
});


/////////////////////////////////////////////////////////////// Projects


/////////////////////////////////////////////////////////////// Contact

const contact = document.querySelectorAll(".con-cont .cont");

// Keep track of the number of elements being observed


// IntersectionObserver callback
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            contactObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                contactObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
contact.forEach((element) => {
    contactObserver .observe(element);
});

/////////////////////////////////////////////////////////////// Contact


/////////////////////////////////////////////////////////////// Footer

const footer = document.querySelectorAll(".footer .ft");

// Keep track of the number of elements being observed


// IntersectionObserver callback
const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            footerObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                footerObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
footer.forEach((element) => {
    footerObserver.observe(element);
});


/////////////////////////////////////////////////////////////// Footer