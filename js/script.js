// Load your images on page-load
function preloader() {
    const imagesPaths = [
        "./img/head-ph.jpg",
        "./img/head-ph.jpg",
        "./img/head-ph.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

(function () {
    const content = [
        {
            headingContent: "Hydropower",
            imgUrl: "./img/hydroenergy.jpg",
            imgAlt: "Hydropower illustration",
            bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        
        {
            headingContent: "Wind power",
            imgUrl: "./img/wind-power.jpg",
            imgAlt: "Wind power illustration",
            bodyText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
        },

        {
            headingContent: "Solar power",
            imgUrl: "./img/solar-power.jpg",
            imgAlt: "Solar power illustration",
            bodyText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
        },
    ];
    const buttons = document.querySelectorAll('.slider .buttons button');
    const sliderContent = document.querySelectorAll('.slider .slider-content')[0];

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            buttons.forEach(function (button) {
                button.classList.remove("active");
            })
            button.classList.add("active");
            sliderContent.innerHTML = `<h3>${content[index].headingContent}</h3>` +
                `<img src="${content[index].imgUrl}" alt="${content[index].imgAlt}">` +
                `<p>${content[index].bodyText}</p>`;
            
        })
    });
})()