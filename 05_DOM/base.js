
let addFishBtn = document.getElementById("add-Fish")
let addAppleBtn = document.getElementById("add-Apple")
let addEggBtn = document.getElementById("add-Eggs")
let navPanel = document.getElementById("nav-panel")

addFishBtn.onclick = () => {
    navPanel.innerHTML += `<li><a href="https://www.youtube.com/watch?v=rWRwx_cIoOM">
                    <img src="./icons_hw_module_3/Food_C205-128.png" alt="Fish">
                    <div>Fish</div> 
                    </a>
                </li>
    `;
}
addEggBtn.onclick = () => {
    navPanel.innerHTML += `<li><a href="https://www.youtube.com/watch?v=50Yr-jL4o00">
                    <img src="./icons_hw_module_3/Food_C203-128.png" alt="Eggs">
                    <div>Eggs</div> 
                    </a>
                </li>
    `;
}
addAppleBtn.onclick = () => {
    navPanel.innerHTML += `<li><a href="https://www.youtube.com/watch?v=YcCMi4tX1YQ">
                    <img src="./icons_hw_module_3/Food_C240-128.png" alt="Apple">
                    <div>Apple</div> 
                    </a>
                </li>
    `;
}

