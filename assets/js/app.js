
// const startBtn = document.getElementById("start")
// const captureBtn = document.getElementById("capture")
// const closeBtn = document.getElementById("close")
// const player = document.getElementById("player")
// const switchBtn = document.getElementById("switchCamera")
// const canvas = document.getElementById("canvas")
// const restartBtn = document.getElementById("restart")

import{
startBtn,
captureBtn,
closeBtn,
player,
switchBtn,
canvas,
restartBtn,
mode,
} from "./constants.js"

import{openCamera, closeCamera} from "./camera.js"



switchBtn.addEventListener("click", () => {
    mode = mode === "environment" ? "user" : "environment"
    player.classList.add("d-none")
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }

    openCamera()

})

startBtn.addEventListener("click",  () => {
    openCamera()
    switchBtn.classList.remove("d-none")
    restartBtn.classList.add("d-none")


})//-------------------------------------------------------------------------------------
captureBtn.addEventListener("click", () => {

    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0, 0, canvas.height, canvas.width)
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    restartBtn.classList.remove("d-none")



})
closeBtn.addEventListener("click", () => {
    closeCamera()
})
restartBtn.addEventListener("click",()=>{
    closeBtn()
    openCamera()
})

