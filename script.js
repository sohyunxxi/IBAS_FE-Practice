function changeImage() {
    var image = document.getElementById("profile-image");
    if (image.src.includes("Sohyunxxi_profile_Portugal.jpg")) {
        image.src = "Sohyunxxi_profile_Tyoko.jpg";  
    } else {
        image.src = "Sohyunxxi_profile_Portugal.jpg"; 
    }
}
