const upBtn = document.querySelector(".up-button")
const downBtn = document.querySelector(".down-button")

const sidebar = document.querySelector(".sidebar")

const container = document.querySelector(".container")
const mainSlide = document.querySelector(".main-slide")
const slidesCount = mainSlide.querySelectorAll("div").length


let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1)*100}vh`

upBtn.addEventListener("click", () => {
    
    changeSlide("up")
})

downBtn.addEventListener("click", () => {
    
    changeSlide("down")
})

function changeSlide(direction) {
    const height = container.clientHeight
    if(direction === "up") {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } if(direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    mainSlide.style.transform = `translateY(-${height * activeSlideIndex}px)`
    sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`
    
}