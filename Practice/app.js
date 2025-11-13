//  Write JS in script.js
//  1) Select all filter buttons using document.querySelectorAll(".filter-btn")
//  2) Select all cards using document.querySelectorAll(".card")
//  3) Add click event on each button:
//    - Read button.getAttribute("data-filter")
//    - Remove "active" from all buttons, then add to clicked one
//    - Loop all cards:
//      * If filter === "all" → show card
//      * Else → compare card.getAttribute("data-category") with selected filter
//        If match → show
//        Else 
// → hide (style.display = "none")

// let buttons = document.querySelectorAll(".filter-btn");
// let cards = document.querySelectorAll(".card");

// buttons.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         buttons.forEach((btn)=>{
//             btn.classList.remove("active");
//             btn.classList.add("active");
//         })
//     })
// })






const filterButtons = document.querySelectorAll(".filter-btn");


const cards = document.querySelectorAll(".card");


filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    
    button.classList.add("active");

   
    const filterValue = button.getAttribute("data-filter");

   
    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");

      if (filterValue === "all" || filterValue === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});






