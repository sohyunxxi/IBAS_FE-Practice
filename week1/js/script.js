function changeImage() {
    var image = document.getElementById("profile-image");
    if (image.src.includes("image/Sohyunxxi_profile_Portugal.jpg")) {
        image.src = "image/Sohyunxxi_profile_Tyoko.jpg";  
    } else {
        image.src = "image/Sohyunxxi_profile_Portugal.jpg"; 
    }
}