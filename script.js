imgs = ["guy (1).jpg", "guy (1).PNG", "guy (2).jpg", "guy (2).PNG", "guy (3).jpg", 
        "guy (3).PNG", "guy (4).jpg", "guy (4).PNG","guy (5).jpg", "guy (5).PNG", 
        "guy (6).jpg", "guy (6).PNG", "guy (7).jpg", "guy (7).PNG", "guy (8).jpg", 
        "guy (8).PNG", "guy (9).jpg", "guy (9).PNG", "guy (10).jpg", "guy (11).jpg", 
        "guy (12).jpg", "guy (13).jpg", "guy (14).jpg", "guy (15).JPG", "guy (16).JPG", 
        "guy (16).JPG", "guy (17).JPG", "guy (18).jpg", "pic (5).PNG", "pic (10).PNG", 
        "guy new (1).JPG", "guy new (2).JPG", "guy new (3).JPG", "guy new (4).JPG", "guy new (5).JPG", 
       "guy new (6).JPG", "guy new (7).JPG", "guy new (8).JPG", "guy new (9).JPG", "guy new (10).JPG", 
       "guy new (11).JPG", "guy new (12).JPG", "guy new (13).JPG", "guy new (14).JPG", "guy new (15).JPG", 
       "guy new (16).JPG", "guy new (17).JPG", "guy new (18).JPG"]

msgs = ["u got this!!!", "i love u <33", "i always believe in u", "no giving up!!", 
        "work hard and u can have loki", "im very proud of u no matter what", 
        "i seen what u can do and i know u can do it again", "u are very capable", 
        "itll be ok u will be happy like the guy above !!", "let the guy give u motivation",
        "ill buy u bbt or some other food for working so hard :)", "dont worry, things will be ok!!", 
        "this guy rooting for u", "i know u can do great bc u are great"]

pic = document.getElementById("pic");
msg = document.getElementById("text");
button = document.getElementById("button");

button.addEventListener("click", function() {
    imgName = imgs[Math.floor(Math.random() * imgs.length)]
    pic.src = "images/animals/" + imgName
    msg.textContent = msgs[Math.floor(Math.random() * msgs.length)]
});
