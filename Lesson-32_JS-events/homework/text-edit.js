document.body.addEventListener("keydown", (event) => {
    const resizer = document.createElement("div");
    console.log(event);
    if ((event.code === "KeyE" || event.code === "KeyS") && event.ctrlKey) {

        event.returnValue = false; //не передає дію за комбінацією клавіш до браузера
        let elem = document.querySelector(".content__textarea");
        if (event.code === "KeyE" && elem.nodeName === "DIV") {
            let newEl = document.createElement("textarea");
            newEl.setAttribute("cols", 50);
            newEl.setAttribute("rows", 20);
            newEl.className = "content__textarea";
            newEl.textContent = elem.textContent;
            elem.replaceWith(newEl);
        } else if (event.code === "KeyS" && elem.nodeName === "TEXTAREA") {
            let newEl = document.createElement("div");
            newEl.className = "content__textarea";
            newEl.textContent = elem.value;
            resizer.className = "content__textarea--resizer";

            //task 3
            const initResize = e => {
                e.preventDefault;
                window.addEventListener("mousemove", startResize);
                window.addEventListener("mouseup", stopResize);
            };

            const startResize = e => {
                newEl.style.width = (e.clientX - newEl.offsetLeft) + "px";
            };
            const stopResize = () => {
                window.removeEventListener('mousemove', startResize);
                window.removeEventListener('mouseup', stopResize);
            };

            resizer.addEventListener("mousedown", initResize);
            newEl.append(resizer);
            elem.replaceWith(newEl);
        }
    }

});