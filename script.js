document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("click");
    let accCollapse = item.nextElementSibling;
    
    if(!item.classList.contains("collapsing")) {
      // Open accordion
      if(!item.classList.contains("open")){
        console.log("toggle accordion");

        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;
        console.log(accHeight);

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        // Remove collapse, add collapsing
        accCollapse.classList = "accordion__collapse collapsing";

        // After x amount of time, remove collapsing and add collapse open
        setTimeout(() => {
          console.log("open accordion content");
          accCollapse.classList = "accordion__collapse open";
        }, 200);
      }
      
      // Close accordion
      else {
        console.log("toggle accordion");
        // Remove collapse open and add collapsing
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        //After x amount of time, remove collapsing and add collapse
        setTimeout(() => {
          console.log("close accordion content");
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = "";
        }, 200);
      }
    }
    
    item.classList.toggle("open");
  });
});