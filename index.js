const getTheLinkBtn = document.getElementsByClassName("get-the-link");
const modalContainer = document.getElementsByClassName("modal-container");
const linkToMeeting = document.querySelector(".link-to-meeting");
const linkIsUnavailable = document.querySelector(".link-is-unavailable");
const confirmingMeetingWithVd = document.querySelector(".confirming-meeting-with-vd")
const askingToCompleteGuidance = document.querySelector(".asking-to-complete-guidance");
const askingTheReasonNotTo = document.querySelector(".asking-the-reason-not-to");
const summaryOfDiagnosis = document.querySelector(".summary-of-diagnosis");
const diagnosisInformationForDietRecommendations = document.querySelector(".diagnosis-information-for-diet-recommendations");
const askingToInformHealthCoach = document.querySelector(".asking-to-inform-healthcoach");
const markAsDone = document.getElementsByClassName("mark-as-done");
const confirmMeetBtnCon = document.querySelector(".btn-container");
const modal = document.getElementsByClassName("modal");
const holder = document.getElementsByClassName("holder");
const schedCons = document.querySelector(".sche-cons");
const pendCons = document.querySelector(".pen-cons");
const compCons = document.querySelector(".comp-cons");
const scheduledConsultation = document.querySelector(".scheduled-consultation");
const pendingConsultation = document.querySelector(".pending-consultation");
const completedConsultation = document.querySelector(".completed-consultations");
const dropdownContainer = document.getElementsByClassName("dropdown-container");
const dietRecommendations = document.querySelector(".diet-recommendations");
const getTheStartConsBtn = document.getElementsByClassName("start-consultation");
const submitReasonBtn = document.querySelector(".submit-reason");
const startCons = document.querySelector(".strt-cons");
const updateConsultation = document.getElementById("update-consultation");
const backBtn = document.getElementById("back");
const editupdateConsultation = document.getElementById("edit");
const confirmDiagnosis = document.getElementById("confirm-diagnosis");
const diagnosisInformationBtn = document.querySelector(".diagnosis-information-btn");
const backToDiagnosisInformationBtn = document.querySelector(".back-to-edit-diagnosis-information");
const backToStartCons = document.getElementById("back-to-strt-cons");
const favorableItemSelect = document.querySelector(".favorable");
const unFavorableItemSelect = document.querySelector(".unfavorable");
const selectedDietItem = document.getElementsByClassName("selected");
const consultationOperation = document.getElementsByClassName("cons-operations");
const movToUnFavorable = document.querySelector(".move-to-unfavorable");
const movToFavorable = document.querySelector(".move-to-favorable");
const haveMore = document.querySelector(".have-more");
let unFavorableElements;
let favorableElements;


// dummy data
const vegetables = [
    {
        name: "Ash gourd",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Brinjal",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Baby Corn",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Beetroot",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Bitter gourd",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Bottle gourd",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Garlic",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Spring Onion",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Okra",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Raw Plaintain",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Pumpkin",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Hyacinth",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Peas",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Corn",
        sushrutReco: "favorable",
        expertReco: "favorable"
    },
    {
        name: "Coconut",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Potato",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Cucumber",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Carrot",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Sweet Potato",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Sweet Potato",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Ridge gourd",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Elephant yam",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Red Chilli",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
    {
        name: "Ivy gourd",
        sushrutReco: "unfavorable",
        expertReco: "unfavorable"
    },
]

console.log(completedConsultation);

vegetables.forEach((element) => {
    let node = document.createElement("span");
    let textnode = document.createTextNode(element.name);
    node.appendChild(textnode);
    node.classList.add("grid-element");
    if(element.sushrutReco === "favorable") {
        node.classList.add("favorable-element")
        favorableItemSelect.appendChild(node);
    } else {
        node.classList.add("unfavorable-element")
        unFavorableItemSelect.appendChild(node);
    }
})

getTheLinkBtn[0].addEventListener("click", () => {
    linkToMeeting.style.display = "block";
})

getTheLinkBtn[1].addEventListener("click", () => {
    linkIsUnavailable.style.display = "block";
})

markAsDone[0].addEventListener("click", () => {
    confirmingMeetingWithVd.style.display = "block";
})

confirmMeetBtnCon.addEventListener("click", (e) => {
    if(e.target.classList.contains("yes")) {
        askingToCompleteGuidance.style.display = "block";
    } else {
        askingTheReasonNotTo.style.display = "block";
    }
})

document.addEventListener("click", (e) => {
    if(e.target.matches(".placement")) {
        e.target.parentNode.style.display = "none";
    }
})

document.addEventListener("mouseover", (e) => {
    if(e.target.matches(".placement")) {
        diagnosisInformationForDietRecommendations.style.display = "none";
    }
})


for(let i = 0; i < holder.length; i++) {
    holder[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active")
        current[0].classList.remove("active");
        holder[i].classList.add("active");
        if(holder[i].classList.contains("sche-cons")) {
            scheduledConsultation.classList.add("visible");
            pendingConsultation.classList.remove("visible");
            completedConsultation.classList.remove("visible");
            dietRecommendations.style.display = "none";
        } else if(holder[i].classList.contains("pen-cons")) {
            scheduledConsultation.classList.remove("visible");
            pendingConsultation.classList.add("visible");
            completedConsultation.classList.remove("visible");
        } else {
            scheduledConsultation.classList.remove("visible");
            pendingConsultation.classList.remove("visible");
            completedConsultation.classList.add("visible");
            dietRecommendations.style.display = "none";
        }
    })
}


for(let i = 0; i < dropdownContainer.length; i++) {
    dropdownContainer[i].addEventListener("click", () => {
        if(dropdownContainer[i].classList.contains("marked")) {
            dropdownContainer[i].classList.remove("marked");
            let consultationList = dropdownContainer[i].children[1];
            if(consultationList) {
                consultationList.style.display = "none";
            }

        } else {
            let current = document.getElementsByClassName("marked");
            if(current.length > 0) {
                if(current[0].children.length > 1) {
                    current[0].children[1].style.display = "none"; /* To hide the opened list when clicked on another item*/
            }
            current[0].classList.remove("marked");
        }
            dropdownContainer[i].classList.add("marked");
            let consultationList = dropdownContainer[i].children[1];
            if(consultationList) {
                consultationList.style.display = "block";
        }
        }
    })
}


getTheStartConsBtn[0].addEventListener("click", () => {
    startCons.style.display = "block";
})


submitReasonBtn.addEventListener("click", (e) => {
    e.preventDefault();
    askingToInformHealthCoach.style.display = "block";
})


updateConsultation.addEventListener("click", (e) => {
    e.preventDefault();
    startCons.style.display = "none";
    summaryOfDiagnosis.style.display = "block";
})

backBtn.addEventListener("click", () => {
    startCons.style.display = "none";
})


editupdateConsultation.addEventListener("click", () => {
    summaryOfDiagnosis.style.display = "none";
}) 


confirmDiagnosis.addEventListener("click", () => {
    summaryOfDiagnosis.style.display = "none";
    startCons.style.display = "none"
    dietRecommendations.style.display = "block";
})


diagnosisInformationBtn.addEventListener("mouseover", () => {
    diagnosisInformationForDietRecommendations.style.display = "block";
})


backToDiagnosisInformationBtn.addEventListener("click", () => {
    diagnosisInformationForDietRecommendations.style.display = "none";
    dietRecommendations.style.display = "none";
    startCons.style.display = "block";
})

backToStartCons.addEventListener("click", () => {
    dietRecommendations.style.display = "none";
    startCons.style.display = "block";
})

favorableItemSelect.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
    favorableCtaHandle();
})

const favorableCtaHandle = () => {

    favorableElements = Array.from(selectedDietItem).filter((element) => {
        return element.classList.contains("favorable-element");
    })

    if(favorableElements.length > 0) {
        movToUnFavorable.classList.add("valid");
        haveMore.classList.add("valid");
    } else if(favorableElements.length <= 0) {
        movToUnFavorable.classList.remove("valid");
        haveMore.classList.remove("valid");
    }
}


const unFavorableCtaHandle = () => {
    unFavorableElements = Array.from(selectedDietItem).filter((element) => {
        console.log(element.classList);
        return element.classList.contains("unfavorable-element");
    })

    console.log(unFavorableElements);

    if(unFavorableElements.length > 0) {
        movToFavorable.classList.add("valid");
    } else if(unFavorableElements.length <= 0) {
        movToFavorable.classList.remove("valid");
    }
}


unFavorableItemSelect.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
    unFavorableCtaHandle();
})


movToUnFavorable.addEventListener("click", () => {
    if(movToUnFavorable.classList.contains("valid")) {
        favorableElements = Array.from(selectedDietItem).filter((element) => {
            return element.classList.contains("favorable-element");
        })
        Array.from(favorableElements).forEach((element) => {
            vegetables.map((vegetable) => {
                if(vegetable.name === element.innerHTML) {
                    vegetable.expertReco = "unfavorable";
                }
            })
        });
        favorableElements.map((element) => {
            element.classList.remove("selected", "favorable-element");
            let node = document.createElement("span");
            let textnode = document.createTextNode(element.innerHTML);
            node.appendChild(textnode);
            node.style.borderColor = "#FEB804";
            node.classList.add("unfavorable-element");
            unFavorableItemSelect.appendChild(node);
            element.remove();
        })
        favorableCtaHandle();
    }
})
movToFavorable.addEventListener("click", () => {
    if(movToFavorable.classList.contains("valid")) {
        unFavorableElements = Array.from(selectedDietItem).filter((element) => {
            return element.classList.contains("unfavorable-element");
        })
        Array.from(unFavorableElements).forEach((element) => {
            vegetables.map((vegetable) => {
                if(vegetable.name === element.innerHTML) {
                    vegetable.expertReco = "favorable";
                }
            })
        });
        unFavorableElements.map((element) => {
            element.classList.remove("selected", "unfavorable-element");
            let node = document.createElement("span");
            let textnode = document.createTextNode(element.innerHTML);
            node.appendChild(textnode);
            node.classList.add("favorable-element");
            favorableItemSelect.appendChild(node);
            element.remove();
        })
        unFavorableCtaHandle();
    }
})

haveMore.addEventListener("click", () => {
    if(haveMore.classList.contains("valid")) {
        favorableElements = Array.from(selectedDietItem).filter((element) => {
            return element.classList.contains("favorable-element");
        })
        Array.from(favorableElements).forEach((element) => {
            vegetables.map((vegetable) => {
                if(vegetable.name === element.innerHTML) {
                    vegetable.expertReco = "have-more";
                }
            })
        });
        favorableElements.forEach((element) => {
            element.classList.remove("selected");
            console.log(element.classList);
            element.classList.add("rec-to-have-more");
        })
        favorableCtaHandle();
    }
})