function showCar(name, desc, price) {
    document.getElementById("car-name").innerText = name;
    document.getElementById("car-desc").innerText = desc;
    document.getElementById("car-price").innerText = "Prix : " + price;

    document.getElementById("car-details").style.display = "block";
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("message").innerText =
        "Merci pour votre message, nous vous contacterons rapidement ";
    this.reset();
});

