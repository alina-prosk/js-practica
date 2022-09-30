// document.addEventListener('DOMContentLoaded', () => {
//     const mediaFile = document.querySelectorAll('img, video');
//     let i = 0
    

//     Array.from(mediaFile).forEach((file, i) => {
//         file.onload = () => {
//             i += 1
            
//              percents.innerHTML = ((i * 100) / mediaFile.length).toFixed()

//             if (i === mediaFile.length) {
//                 preloader.classList.add('preloader_hide')
//                 percents.innerHTML = 100
//             }
//         }
//     })
// })



export default document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('preloader--hide');
    setTimeout(() => {
        preloader.remove();
    }, 1000);
});

