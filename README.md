# Marquee-Scrolling-Effect-Using-GSAP
A smooth, infinite scrolling marquee effect powered by GSAP. The animation switches directions based on the user's scroll, creating a seamless, looping experience. Easily customizable and perfect for web projects.

# Marquee Animation with GSAP

This project implements an infinite scrolling marquee effect using GSAP (GreenSock Animation Platform) for smooth and performant animations. The marquee scrolls left and right based on the user's scroll direction.

## Features

- Infinite scrolling for a smooth, continuous marquee effect.
- Scroll direction detection: scroll up or down to switch animation direction.
- CSS properties are dynamically controlled by GSAP, with animations triggered by user scroll.
- Customizable speed and behavior for the marquee.

## Demo

You can view the demo of the marquee animation by opening the `index.html` file in a browser. 

## Installation

To get started with this project, clone the repository to your local machine:

## Prerequisites
Make sure you have the following installed:

A modern browser (for viewing the demo).
(Optional) A local web server to serve the index.html file.
Dependencies
This project uses GSAP, a popular JavaScript library for high-performance animations.

You can include GSAP in your project using a CDN:

html
Copy code
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.x/gsap.min.js"></script>
Usage
Download or clone the repository.
Open the index.html file in your browser.
Use your mouse wheel or touchpad to scroll up and down and watch the animation in action.
How It Works
The marquee elements are initially positioned with xPercent, based on their index.
The animation changes the xPercent property to move the elements in the X-axis.
The scrolling behavior is controlled by the wheel event. Scrolling up or down switches the direction of the animation.
The animation is made infinite using gsap.utils.wrap to keep the marquee elements within a looping range.

## Contributing
Feel free to fork this repository, make changes, and submit a pull request. If you encounter any issues or have suggestions, please open an issue in the GitHub repository.
