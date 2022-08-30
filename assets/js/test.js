let prcount = 0;
let fcount = 0;
let pcount = 0; //set count cho slider

// override container's width when screen size >= 1200px
(function checkWidth() {
    const arr = [];
    function addImportant() {
        const container = document.getElementsByClassName("container-lg");
        for (let i = 0; i < container.length; i++) {
            let temp = container[i].classList;
            arr.push(temp);
        }
        if (window.innerWidth >= 1200) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].add("important");
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                arr[i].remove("important");
            }
        }
    }
    addImportant();
    window.addEventListener("resize", addImportant);
})();

// add navnar's background color when scrolling down
(function handleNavColor() {
    const isSticky = () => {
        const nav = document.querySelector(".navbar-wrapper");
        const scrollTop = window.scrollY;
        if (scrollTop >= 120) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    };
    window.addEventListener("scroll", isSticky);
})();

// display web overlay when mobile's nav is toggled
function handleOverlay() {
    document.querySelector(".navbar-mobile-overlay").style.display = "block";
    document.querySelector(".navbar-mobile-overlay").style.opacity = "0.5";
    const menu = document.querySelector(".navbar-mobile-list");
    menu.style.transform = "translateY(0)";
}

//display login form when login button is clicked
function handleLoginForm() {
    document.querySelector(".navbar-mobile-overlay").style.display = "block";
    document.querySelector(".navbar-mobile-overlay").style.opacity = "0.5";
    document.querySelector(".navbar-mobile-list").style.transform = "translateY(-100%)";
    if (window.innerWidth >= 577) {
        document.querySelector(".login-wrapper").style.transform = "translateY(20%)";
    } else {
        document.querySelector(".login-wrapper").style.transform = "translateY(10%)";
    }
}

//display signup form when signup button is clicked
function handleSignUpForm() {
    document.querySelector(".login-container").style.transform = `translateX(-100%)`;
    document.querySelector(".signup-container").style.transform = `translateX(-100%)`;
    setTimeout(handleLoginForm, 400);
}

//switch between login and signup form
function handleSwitch(sign) {
    document.querySelector(".login-container").style.transform = `translateX(${sign}%)`;
    document.querySelector(".signup-container").style.transform = `translateX(${sign}%)`;
}

//disable login/signup form and overlay
function exitMenu() {
    document.querySelector(".navbar-mobile-overlay").style.display = "0";
    document.querySelector(".navbar-mobile-overlay").style.display = "none";
    document.querySelector(".login-wrapper").style.transform = "translateY(-100%)";
    const menu = document.querySelector(".navbar-mobile-list");
    menu.style.transform = "translateY(-100%)";
    setTimeout(() => {
        document.querySelector(".login-container").style.transform = `translateX(0%)`;
        document.querySelector(".signup-container").style.transform = `translateX(0%)`;
    }, 500);
}

(function setWidth() {
    const imageWidth = document.querySelector(".feature-image").offsetWidth;
    const nameList = document.getElementsByClassName("feature-name");
    const descriptionList = document.getElementsByClassName("feature-description");
    for (let i = 0; i < nameList.length; i++) {
        nameList[i].style.width = imageWidth + "px";
        descriptionList[i].style.width = imageWidth + "px";
    }
    setTimeout(setWidth, 500);
    window.addEventListener("resize", setWidth);
})();

//change button's color when its clicked
function handlePlans(event) {
    const buttons = document.getElementsByClassName("plans-button");
    if (event.target.classList.contains("button-monthly")) {
        buttons[0].classList.add("monthly-active");
        if (buttons[1].classList.contains("yearly-active")) {
            buttons[1].classList.remove("yearly-active");
        }
    } else {
        buttons[1].classList.add("yearly-active");
        if (buttons[0].classList.contains("monthly-active")) {
            buttons[0].classList.remove("monthly-active");
        }
    }
}

let plans = document.querySelectorAll(".plans-item");
let freePlan = document.querySelector(".plans-item#free");
let proPlan = document.querySelector(".plans-item#pro");
let businessPlan = document.querySelector(".plans-item#business");
function handlePlan(event, plan) {
    if (event.type === "mouseenter") {
        plan.classList.add("hovering");
        for (let i = 1; i < plan.childNodes.length; i += 2) {
            plan.childNodes[i].classList.add("hovering");
            if (plan.childNodes[i].classList.contains("plan-details-list-wrapper")) {
                plan.childNodes[i].childNodes[1].classList.add("hovering");
                for (let j = 1; j < plan.childNodes[i].childNodes[1].childNodes.length; j += 2) {
                    plan.childNodes[i].childNodes[1].childNodes[j].classList.add("hovering");
                    for (let k = 1; k < plan.childNodes[i].childNodes[1].childNodes[j].childNodes.length; k += 2) {
                        plan.childNodes[i].childNodes[1].childNodes[j].childNodes[k].classList.add("hovering");
                    }
                }
            }
        }
        const tempPlans = Array.prototype.slice.call(plans).filter((tempPlan) => {
            return tempPlan != plan;
        });
        for (let i = 0; i < tempPlans.length; i++) {
            for (let j = 1; j < tempPlans[i].childNodes.length; j += 2) {
                tempPlans[i].childNodes[j].classList.add("shrinking");
                if (tempPlans[i].id == "pro" && tempPlans[i].childNodes[j].classList.contains("plan-introduction")) {
                    tempPlans[i].childNodes[j].style.width = "200px";
                }
                if (tempPlans[i].childNodes[j].classList.contains("plan-details-list-wrapper")) {
                    tempPlans[i].childNodes[j].childNodes[1].classList.add("shrinking");
                    for (let k = 1; k < tempPlans[i].childNodes[j].childNodes[1].childNodes.length; k += 2) {
                        tempPlans[i].childNodes[j].childNodes[1].childNodes[k].classList.add("shrinking");
                        for (
                            let l = 1;
                            l < tempPlans[i].childNodes[j].childNodes[1].childNodes[k].childNodes.length;
                            l += 2
                        ) {
                            tempPlans[i].childNodes[j].childNodes[1].childNodes[k].childNodes[l].classList.add(
                                "shrinking"
                            );
                        }
                    }
                }
            }
        }
    } else {
        plan.classList.remove("hovering");
        for (let i = 0; i < plans.length; i++) {
            for (let j = 1; j < plans[i].childNodes.length; j += 2) {
                plans[i].childNodes[j].classList.remove("hovering");
                plans[i].childNodes[j].classList.remove("shrinking");
                if (plans[i].id == "pro" && plans[i].childNodes[j].classList.contains("plan-introduction")) {
                    plans[i].childNodes[j].removeAttribute("style");
                    plans[i].childNodes[j].classList.remove("shrinking");
                }
                if (plans[i].childNodes[j].classList.contains("plan-details-list-wrapper")) {
                    plans[i].childNodes[j].childNodes[1].classList.remove("hovering");
                    plans[i].childNodes[j].childNodes[1].classList.remove("shrinking");
                    for (let k = 1; k < plans[i].childNodes[j].childNodes[1].childNodes.length; k += 2) {
                        plans[i].childNodes[j].childNodes[1].childNodes[k].classList.remove("hovering");
                        plans[i].childNodes[j].childNodes[1].childNodes[k].classList.remove("shrinking");
                        for (
                            let l = 1;
                            l < plans[i].childNodes[j].childNodes[1].childNodes[k].childNodes.length;
                            l += 2
                        ) {
                            plans[i].childNodes[j].childNodes[1].childNodes[k].childNodes[l].classList.remove(
                                "hovering"
                            );
                            plans[i].childNodes[j].childNodes[1].childNodes[k].childNodes[l].classList.remove(
                                "shrinking"
                            );
                        }
                    }
                }
            }
        }
    }
}

(function changePlans() {
    function plansStyle() {
        let prslides = document.querySelectorAll(".prove-item");
        let fslides = document.querySelectorAll(".feature");
        let slides = document.getElementsByClassName("plans-item");
        let arrows = document.querySelectorAll(".arrow");
        if (window.innerWidth < 576) {
            pcount = 0;
            arrows[0].setAttribute("onclick", "movePlans('plans-item', 200, -1, 'pcount')");
            arrows[1].setAttribute("onclick", "movePlans('plans-item', 200, 1, 'pcount')");
            for (let i = 0; i < arrows.length; i++) {
                arrows[i].style.display = "block";
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].removeAttribute("onmouseenter");
                slides[i].removeAttribute("onmouseleave");
            }
            for (let fslide of fslides) {
                fslide.removeAttribute("style");
                fcount = 0;
                prcount = 0;
            }
            for (let prslide of prslides) {
                prslide.removeAttribute("style");
                fcount = 0;
                prcount = 0;
            }
        } else if (window.innerWidth < 992 && window.innerWidth >= 576) {
            arrows[0].setAttribute("onclick", "changePlans(event)");
            arrows[1].setAttribute("onclick", "changePlans(event)");
            for (let i = 0; i < arrows.length; i++) {
                arrows[i].style.display = "block";
            }
            for (let i = 0; i < slides.length; i++) {
                pcount = 0;
                slides[i].removeAttribute("onmouseenter");
                slides[i].removeAttribute("onmouseleave");
                slides[i].removeAttribute("style");
            }
            for (let fslide of fslides) {
                fslide.removeAttribute("style");
                fcount = 0;
                prcount = 0;
            }
            for (let prslide of prslides) {
                prslide.removeAttribute("style");
                fcount = 0;
                prcount = 0;
            }
        } else {
            for (let i = 0; i < slides.length; i++) {
                slides[i].removeAttribute("style");
                slides[i].setAttribute("onmouseenter", `handlePlan(event, ${slides[i].id})`);
                slides[i].setAttribute("onmouseleave", `handlePlan(event, ${slides[i].id})`);
            }
            for (i = 0; i < arrows.length; i++) {
                arrows[i].style.display = "none";
            }
        }
    }
    plansStyle();
    window.addEventListener("resize", plansStyle);
})();

function movePlans(className, xValue, calc, tOfCount) {
    let temp;
    switch (tOfCount) {
        case "prcount":
            prcount += calc;
            temp = prcount;
            break;
        case "fcount":
            fcount += calc;
            temp = fcount;
            break;
        case "pcount":
            pcount += calc;
            temp = pcount;
            break;
    }
    const plans = document.querySelectorAll(`.${className}`);
    let prarrows = document.querySelectorAll(".p-arrow");
    let farrows = document.querySelectorAll("f-arrow");
    const arrows = document.querySelectorAll(".arrow");
    const numberPattern = /-?\d+\.?\d+|\d+/g;
    for (const arrow of prarrows) {
        arrow.style.pointerEvents = "none";
    }
    for (const arrow of farrows) {
        arrow.style.pointerEvents = "none";
    }
    for (const arrow of arrows) {
        arrow.style.pointerEvents = "none";
    }
    setTimeout(() => {
        for (const arrow of prarrows) {
            arrow.style.pointerEvents = null;
        }
        for (const arrow of farrows) {
            arrow.style.pointerEvents = null;
        }
        for (const arrow of arrows) {
            arrow.style.pointerEvents = null;
        }
    }, 1000);
    for (const plan of plans) {
        const trans = window.getComputedStyle(plan).getPropertyValue("transform");
        const value = trans.match(numberPattern);
        const computedTransX = value[4];
        const transXPer = Math.round(computedTransX / plan.offsetWidth) * 100;
        let newValue = calc * xValue + transXPer;
        plan.style.transform = `translateX(${newValue}%)`;
    }
    if (temp < -(plans.length - 1) || temp > 0) {
        setTimeout(() => {
            for (const plan of plans) {
                plan.classList.add("reset");
                const transXValue = plan.style.transform;
                let newValue;
                switch (calc) {
                    case -1:
                        if (transXValue.length > 16) {
                            newValue = (plans.length * 2 + 1.5) * 100 + parseInt(transXValue.substr(11, 5));
                        } else {
                            newValue = (plans.length * 2 + 1.5) * 100 + parseInt(transXValue.substr(11, 4));
                        }
                        break;
                    case 1:
                        newValue = -(plans.length * 2 + 1.5) * 100 + parseInt(transXValue.substr(11, 3));
                        break;
                }
                plan.style.transform = `translateX(${newValue}%)`;
            }
            setTimeout(() => {
                for (const plan of plans) {
                    plan.classList.replace("reset", "reset2");
                    const transXValue = plan.style.transform;
                    const newValue = calc * 150 + parseInt(transXValue.substr(11, 4));
                    plan.style.transform = `translateX(${newValue}%)`;
                    setTimeout(() => {
                        plan.classList.remove("reset2");
                    }, 200);
                }
            }, 100);
            if (calc == -1) {
                switch (tOfCount) {
                    case "prcount":
                        prcount = 0;
                        temp = prcount;
                        break;
                    case "fcount":
                        fcount = 0;
                        temp = fcount;
                        break;
                    case "pcount":
                        pcount = 0;
                        temp = pcount;
                        break;
                }
            } else {
                switch (tOfCount) {
                    case "prcount":
                        prcount = -(plans.length - 1);
                        temp = prcount;
                        break;
                    case "fcount":
                        fcount = -(plans.length - 1);
                        temp = fcount;
                        break;
                    case "pcount":
                        pcount = -(plans.length - 1);
                        temp = pcount;
                        break;
                }
            }
        }, 200);
    }
}

function changePlans(event) {
    const allSlides = document.querySelectorAll(".plans-item");
    const previous = "1";
    const current = "2";
    const next = "3";
    for (const slide of allSlides) {
        const order = slide.getAttribute("data-order");
        switch (event.target.classList[0]) {
            case "prev":
                switch (order) {
                    case current:
                        slide.setAttribute("data-order", previous);
                        break;
                    case next:
                        slide.setAttribute("data-order", current);
                        break;
                    case previous:
                        slide.setAttribute("data-order", next);
                        break;
                }
                break;
            case "next":
                switch (order) {
                    case current:
                        slide.setAttribute("data-order", next);
                        break;
                    case next:
                        slide.setAttribute("data-order", previous);
                        break;
                    case previous:
                        slide.setAttribute("data-order", current);
                        break;
                }
                break;
        }
    }
}

function changeBorder() {
    const border = document.querySelector(".email-2nd-input-wrapper");
    border.style.borderColor = "#54BD95";
}

function removeBorder() {
    const border = document.querySelector(".email-2nd-input-wrapper");
    border.removeAttribute("style");
}
