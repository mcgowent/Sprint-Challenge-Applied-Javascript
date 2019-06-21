class Carousel {
    constructor(caroElement) {
        this.caroElement = caroElement
        //My left and right button references 
        this.left = this.caroElement.querySelector('.left-button')
        this.right = this.caroElement.querySelector('.right-button')

        //Grabbing the images so I can test turning on display.
        this.img = this.caroElement.querySelectorAll('.carousel img')
        //Now that I have the image I need to be able to set just of them and turn off display:none with toggle perhaps? 
        this.currentIndex = img[0];


        this.caroElement.addEventListener('click', () => this.adjust())


        //----------List of Things I need to do.-------------------//
        //Grab a reference to the Left and Right Buttons
        //Set up methods that will move it right or left depending on which one if clicked, an if statement perhaps
        //and Make a way for the images to be saved in a node list that can be moved around. Perhaps have a "Current Images class" that could hold array spot 0 and be seen 
    }
    //methods
    adjust() {

    }
}

let carousel = document.querySelector('.carousel');


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/