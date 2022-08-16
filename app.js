const story = `Sam and Tom were identical twins. They were so identical that even their mother found it difficult to distinguish one from the other, at least during their initial days on earth.However, they were very different from each other when it came to everything other than their appearance. Sam had no friends, while Tom was a great friendship maker. Sam loved sweets, but Tom loved spicy food and detested sweets. Sam was mommy’s pet and Tom was daddy’s pet. While Sam was generous and selfless, Tom was greedy and selfish!
As Sam and Tom grew up, their father wanted to share his fortune equally amongst them. However, Tom did not agree and he argued that whoever proved to be more intelligent and strong would have to get a bigger share of the wealth.Sam agreed. Their father decided to organize a competition between the two. He asked the two sons to walk as long as they could, and return home before sunset. The wealth would be divided in proportion to the distance covered. As a rule of the competition, they were not permitted to carry a watch to keep track of the time.The following day, Sam and Tom set out to walk. It was a rather sunny day. Sam walked slowly and steadily, while Tom broke into a sprint as he was bent on winning the race and also winning a greater portion of his father’s wealth.Sam knew that it would be ideal to walk as far as possible till noon and start for home at noon as it would take the same amount of time to walk back home. Knowing this, Sam decided to turn back for home at noon so as reach home on time.However, Tom, with his greed to earn more wealth, did not attempt to return home even after mid-noon. He walked twice as long as Sam, and thought he would still be able to return home before sunset. He hurried back when he saw the sun turn orange. Unfortunately, he could not even make it half way home as the sun started to set. Slowly darkness engulfed his path and he had to drag his tired feet back home.
He had lost the race. Only because of his greed.Greed leads to loss.`
const storyArray = story.split('. ')
console.log(storyArray)
// console.log(storyArray);
const section1 = document.querySelector(".section1")
const section2 = document.querySelector(".section2")
const apiText = document.querySelector(".api__text")
const textdefult = document.querySelector(".defulttext")
const praentOption = document.querySelector(".nav__options")
const userInput = document.querySelector(".username");
const optionNodelist = document.querySelectorAll(".option")
const userTextground = document.querySelector(".userplayground")
const showUserName = document.querySelector(".result__block-1")
const optionArray = [...optionNodelist]
let randomSentance, checkclickedtiming, showTimerin, timeduration, selectedplace, selectedtimer, timer, timerstate, checkwritingstate;
let apitextArray, Span;
let apiarrayIndex = 0;


praentOption.addEventListener("click", (e) => {
        // console.log(userInput.value)
        const btn = e.target.dataset.js;
        const isUserNameCheck = (userInput.value!="")?true:false;
        if(!isUserNameCheck) alert("Enter your name first!!!")
        if (btn == "btn4") {
                apiarrayIndex = 0;
                timerstate = false;
                // alert("kljfdj")
                checkclickedtiming = false;
                apitextArray = [];
                clearInterval(timer)
                userTextground.addEventListener("keydown", checkwrite)
                userTextground.value = "";
                apiText.innerText = "";
                for (let j = 0; j < optionArray.length - 1; j++) {
                        optionArray[j].innerHTML = optionArray[j].dataset.defult;
                        optionArray[j].classList.remove("puse")
                        optionArray[j].classList.remove("selected")
                        userTextground.classList.add("puse")

                }

        }
        if (!timerstate && isUserNameCheck) {
                if (btn != "btn4" && e.target.tagName == "LI") {
                        userTextground.focus();
                        // console.log(sentance);
                        randomSentance = storyArray[Math.floor(Math.random() * storyArray.length)];
                        // apiText.innerText = randomSentance;
                        doUnderline(randomSentance);


                        showTimerin = e.target;
                        timeduration = e.target.dataset.time;
                        showTimerin.classList.add("selected")
                        textdefult.classList.add("clsg")
                        checkclickedtiming = true;
                        timerstate = true;
                        userTextground.addEventListener("keydown", checkwrite)
                        userTextground.classList.remove("puse")
                }

        }


})


// function for writing

function doUnderline(sentance) {
        const singleAlphabet = sentance.split("")
        const addSpan = singleAlphabet.forEach(ele => {
                
                Span = document.createElement("SPAN")
                Span.innerText = ele;
                apiText.appendChild(Span)
        })

}


function checkwrite() {
        // alert("b")
        if (checkclickedtiming) {
                // alert("a")
                Timerstart(timeduration, showTimerin)
        }
        userTextground.removeEventListener("keydown", checkwrite);

}
const keywords = [ "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
        "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
        "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "Backspace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=",","]
// function for contiune writing
function nextlineshow(e) {
        if (keywords.includes(e.key)) {
                console.log(e.key);
                apitextArray = [...apiText.textContent]
                if (apitextArray.length - 1 === apiarrayIndex) {
                        apiarrayIndex = 0;
                        apiText.textContent = '';
                        randomSentance = storyArray[Math.floor(Math.random() * storyArray.length)];
                        doUnderline(randomSentance)
                } else if (e.keyCode === 8) {

                        if (userTextground.value != "" && (apiarrayIndex !== 0)) {
                                apiarrayIndex--;
                                const addnow = apiText.children[apiarrayIndex];
                                addnow.classList.remove("underlineGreen")
                                addnow.classList.remove("underlineRed")

                        }

                } else {
                        const addnow = apiText.children[apiarrayIndex];
                        // console.log(apiText.children)
                        // console.log(addnow)
                        const check = (apitextArray[apiarrayIndex] == e.key);
                        (check)?addnow.classList.add("underlineGreen"):addnow.classList.add("underlineRed");
                        apiarrayIndex++;
                }
                // console.log(apitextArray[apiarrayIndex - 1]);
                // console.log(apiarrayIndex);
                // console.log(check);
        };
}

userTextground.addEventListener("keydown", nextlineshow)


// ====== Timer Fuction =====
function Timerstart(time, place) {
        timerstate = true;
        let i = 0;
        timer = setInterval(() => {
                i++;
                place.innerHTML = `${(time - i)}s`;
                // console.log(i)
                if (time < i) {
                        clearInterval(timer);
                        userTextground.removeEventListener("change", nextlineshow(apiText.innerText))
                        section1.classList.add("puse")
                        userTextground.value = "";
                        userTextground.blur();
                        section2.classList.remove("clsg")
                        place.classList.remove("selected")
                        timerstate = false;
                        place.innerHTML = place.dataset.defult;


                };
        }, 1000);
        for (let j = 0; j < optionArray.length - 1; j++) {
                // we can't add puse class to reset btn so optionArray.length-1
                if (timerstate) {
                        if (optionArray[j] != place) {
                                optionArray[j].classList.add("puse")
                                optionArray[j].classList.remove("selected")
                                showUserName.innerHTML = `User : ${userInput.value}`;
                        }

                }
        }

}




// function King(name){
//         this.name = name;
//         this.draw = ()=> `Hello ${this.name}`
// }
// const KingVinith = new King("VINITH")
// const KingVinith1 = new King("VINITH1")
// // console.log(KingVinith.draw());
// // console.log(KingVinith1.draw());

// function order(food){
//         return {
//                 saysomething:()=> `do you like to eat ${food}`
//         }
// }

// const samosa = order("samosa" )
// const pizza = order("pizza" )
// console.log(samosa.saysomething());
// console.log(pizza.saysomething());
