var input = document.getElementById('etiquetas');
var text = document.getElementById('container__etiquetas');
const icons = [...document.querySelectorAll("i")];


input.addEventListener('keydown', (e) => {
    
    let keyName = e.key;
    if(e.key === "Enter") {
        e.preventDefault();
        let span = document.createElement('span');
        span.textContent = input.value;
            
        text.insertAdjacentHTML("beforeend", `<span>${span.textContent}<i class="fas fa-times"></i></span>`);
        
        let newIcon = text.lastElementChild.querySelector('i');
        newIcon.addEventListener('click', function() {
            newIcon.closest("span").remove()
        });
        
        
    }
    
        
});

icons.forEach((icon) =>
  icon.addEventListener("click", function () {
    icon.closest("span").remove();
  })
);

console.log(icons)





