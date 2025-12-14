let boxList = document.getElementById("boxList")

function createColor(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let values = Object.fromEntries(formData.entries())

    if (values.select === `hex`) {
        console.log(`hex selected`);

    }
    if (values.select === `rgb`) {
        console.log(`rgb selected`);

        let codes = values.code.split(",")
        console.log(codes)

        //parse 2.54 56 65 to 2.54, 56, 65
        if (codes.length === 1) {

            for (const el of codes) {
                
            }

            let codes = codes.split(" ");
        }


        let temp = [];
        for (let i = 0; i < codes.length; i++) {
            let c = codes[i];

            c = parseInt(c)
            console.log(typeof c)
            temp[i] = c
        }

        for (const c of temp) {
            if (!(c < 256 && c >= 0)) {
                alert(`${c} is wrong input!`)
            }
            else console.log(`${c} is GOOD`)
        }

        let r = temp[0];
        let g = temp[1];
        let b = temp[2];


        boxList.innerHTML += `<div class="box" style="background-color: green;">
                        <div class="text-center innerBox" style="background-color: rgb(${r},${g},${b});">
                            <p>${values.color}</p>
                            <p>${values.select}</p>
                            <p>${values.code}</p>
                        </div>
                </div>`
    }

    console.log(values);
    // console.log(values.select);    

    // boxList.innerHTML += `<div class="box">
    //                     <div class="text-center innerBox" ">
    //                         <p>${values.color}</p>
    //                         <p>${values.select}</p>
    //                         <p>${values.code}</p>
    //                     </div>
    //             </div>`


}
function setCookie() {
    document.cookie = "color=gray;path:/;expires"
}