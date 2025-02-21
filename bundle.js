const navBar = document.querySelector("nav");
const sideBarToggler = navBar.querySelector("button#sidebar-toggler");

const sideBar = document.querySelector("aside");
const topView = document.querySelector("#titre");

const navBarHeight = navBar.offsetHeight;

//Change the visibility of ToUp button
let lastKnownScrollPosition = window.scrollY;
let scrollingDown;

document.addEventListener("DOMContentLoaded", function() {
  
topView.style.marginTop = `${navBarHeight}px`;
  let mainSectionElement = document.querySelector("main");

  //To  to button
  let toTopElement = document.createElement("button");
  toTopElement.classList.add("to-top")
  toTopElement.innerHTML = "^";
   

  mainSectionElement.appendChild(toTopElement);

  //Add SVG graphic to document
  
  //SideBar
 function createSideBar() {
    sideBar.style.top = `${navBarHeight}px`;
   
    const sectionArr = document.querySelectorAll
    ("section");
    
    sectionArr.forEach(section => {
    let sectionId = section.getAttribute("id");
    let link = document.createElement("a");
    link.innerHTML = sectionId.toUpperCase();
    link.setAttribute("href", "#" + sectionId);
    link.setAttribute("class", "internal-link");
    link.setAttribute("role", "button");
   link.addEventListener("click", handleInternalLinkClick);
    sideBar.appendChild(link);
    });
    sideBarToggler.addEventListener("click" , toggleSideBar);
    sideBarToggler.style.display = "unset";
    
    // //Track click outside the Sidebar when it pops up 
  let bodyOverlayingDiv = document.createElement("div");
  
  bodyOverlayingDiv.setAttribute("class", "overlay");
  bodyOverlayingDiv.addEventListener("click", () => {hideSideBar()});
document.body.appendChild(bodyOverlayingDiv);
    }

  createSideBar()
 
  function showSideBar() {
        sideBarToggler.innerHTML = "X close"
sideBar.style.display = "block";
    let bodyOverlayingDiv = document.querySelector(".overlay");
bodyOverlayingDiv.style.display = "block";
  }
  
function hideSideBar() {
  
sideBarToggler.innerHTML = "Sections"
sideBar.style.display = "none";

let bodyOverlayingDiv = document.querySelector(".overlay");
bodyOverlayingDiv.style.display = "none";
}

function toggleSideBar() {
  let toggleBase = true;
  
  // Based on html hidden attributes
  if (toggleBase) {
    showSideBar();
  } else {
    hideSideBar();
  }
  toggleBase = !toggleBase;
}

 function handleInternalLinkClick(e) {
   e.preventDefault();
let linkElement = e.target;

visualClick(linkElement, 250);
 let targetSelector = linkElement.getAttribute("href");
 
 const targetElement = document.querySelector(targetSelector);
 
const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navBarHeight;
window.scrollTo({ top: targetPosition, behavior: 'smooth' });
 }
  function hideNavBar() {
  navBar.style.display = "none";
}

//ContactLink
document.querySelectorAll(".contact-info a").forEach(linkElement => {
  linkElement.addEventListener("click", ()=> {
    visualClick(linkElement);
  })
});
  
  document.addEventListener("scroll", () => {
hideSideBar();
    scrollingDown = lastKnownScrollPosition < window.scrollY;

    if (topView?.getBoundingClientRect().bottom > 0 || scrollingDown) {
      toTopElement.style.display = "none";
          } else {
      if (!scrollingDown) {
        toTopElement.style.display = "flex";
      }
    }

    //Update lastKnownScrollPosition to the current scrollY position 
    lastKnownScrollPosition = window.scrollY;
  });

  toTopElement.addEventListener("click", scrollToTop);

  function scrollToTop(e) {
    
    visualClick(e.target);
    
    // scroll to top at goTop click
  let targetPosition = topView.getBoundingClientRect().top + window.scrollY - navBarHeight;
window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
});

// Show click
function visualClick(linkElement, delay=250) {
  linkElement.classList.add("clicked");
  setTimeout(() => {
    linkElement.classList.remove("clicked", "hover");
  }, delay);
}