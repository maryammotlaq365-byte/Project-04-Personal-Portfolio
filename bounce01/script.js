const profilePhoto = document.getElementById("profilePhoto");
const switchButton = document.getElementById("switchButton");

const photos = {
    casual: { src: "assets/casual.jpg", alt: "Casual profile photo" },
    professional: { src: "assets/professional.jpg", alt: "Professional profile photo" }
};

// preload للصور عشان ما يصير تأخير
Object.values(photos).forEach(function (photo) {
    new Image().src = photo.src;
});

let isProfessional = false;

switchButton.addEventListener("click", function () {
    // 1) اخفي الصورة تدريجياً
    profilePhoto.classList.add("fade-out");

    // 2) بعد ما تختفي، بدّل src و alt وارجع اظهرها
    setTimeout(function () {
        const next = isProfessional ? photos.casual : photos.professional;
        profilePhoto.src = next.src;
        profilePhoto.alt = next.alt;
        isProfessional = !isProfessional;

        profilePhoto.classList.remove("fade-out");
    }, 300);
});
