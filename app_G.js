function expandImage(img) {
    const gallery = document.getElementById("gallery");
    const thumbnails = document.querySelectorAll(".thumbnail");
    
    if (img.classList.contains("expanded")) {
        img.classList.remove("expanded");
        thumbnails.forEach(thumbnail => thumbnail.classList.remove("hidden"));
    } else {
        thumbnails.forEach(thumbnail => {
            if (thumbnail !== img) thumbnail.classList.add("hidden");
        });
        img.classList.add("expanded");
    }
}