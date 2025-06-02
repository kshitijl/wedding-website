---
layout: default-layout.njk
---
# **Meghna x Kshitij  1.0**


<span class="heart-hover-image">![](./IMG_3.jpeg)</span>
## Wedding Details For Friends

Hello\! Here is some info for our upcoming NUPTIALS. This document will continue to be updated.

The "formal events" are  on 7/3 & 7/4, with additional casual hangs all weekend. See schedule below.

## Events
We'll be hanging around all weekend and dream of spontaneous hangs and get-togethers. We're dreaming of a saturday (7/5) picnic with whoever is still around. Maybe a trip to a brewery, who knows\! We imagine a world where folks are proposing and arranging their own events or explorations. The Bay 🌁 has so much to offer 💜.

### High level Calendar

| When                       | What           | Where |
| :---- | :---- | :---- |
| **7/3/2025** 4pm - 10pm | 👰🏾‍♀️🤵🏾‍♂️ Wedding   | [Temescal Beach House](https://www.ebparks.org/reservations/event-venues/beach-house), Oakland CA  |
| **7/4/2025** 6pm - 10pm | 🎭 Sangeet aka A Friend Talent Show |  [Live Oak Community Center](https://g.co/kgs/BzkusMH), Berkeley CA |
| **7/5/2025** 11am - 3pm | 🧺☀️🍷 Picnic\! (unofficial)  | Cragmont Park, Berkeley, CA |

![](./IMG_1791.jpeg)

### 👰🏾‍♀️🤵🏾‍♂️<br/>Wedding
###### **7/3/2025**
###### _4:00pm – 10:00pm_
###### [Temescal Beach House](https://www.ebparks.org/reservations/event-venues/beach-house), Oakland CA

<br/>

The wedding will run from mid-afternoon into the evening, with dinner and cake
provided. It will be potentially quite HOT, so lighter dress \+ a jacket is
recommended. The temperatures in the Bay can drop dramatically in the evening.
Indoor & outdoor venue.

##### Vibe
Summery, floral, cocktail  party vibes.

##### Dress suggestion

|   |   |
| :----: | :---- |
| <span style="font-size: 2em;">🇮🇳</span> | - Indian kurta pajama <br/> - Salwar Kameez <br/> - Lehenga |
| <span style="font-size: 2em;">🇺🇸</span> | - A suit <br/> - Collared shirt & pants <br/> - Dress |

### 🎭<br/>Sangeet
###### _aka A Friend Talent Show_
###### **7/4/2025**
###### _6:00 pm \- 10:00 pm_
###### [Live Oak Community Center](https://g.co/kgs/BzkusMH), Berkeley CA

##### Vibe
Dressy casual.

##### Dress suggestion

|   |   |
| :----: | :---- |
| <span style="font-size: 2em;">🇮🇳</span> | - Indian kurta pajama <br/> - Salwar Kameez |
| <span style="font-size: 2em;">🇺🇸</span> | - Shirt & jeans <br/> - Collared shirt & pants <br/> - Dress |

### 🧺☀️🍷<br/>Picnic (Unofficial)
###### **7/5/2025**
###### 11:00 am \- 3:00 pm
###### Cragmont Park, Berkeley, CA

##### Vibe
Casual.

##### Dress suggestion

Literally anything.



## Travel & Accommodations

##### Flying
The closest airports are SFO and OAK. You can take the BART to Berkeley from either.

##### Lodging
We recommend you get an AirBnb. If you're worried about finding a place to stay, hit us up and we'll find a way to house you\!

## Color Palette

If u wanna be on brand on brand.

![](./image1.png)

## Books As Gifts 📖

Everyone does love gifts. Here is what we'd *love* from you.

Pick 1 book that has either:

* Taught you something about being a good person, or
* Taught you something about leading a good life.

Include notes on why you picked what you did.

Bring TWO copies.

One will find a new home on K\&M's wedding book shelf and the other will go into
a swap pile at our Sangeet. You'll get to go home with a book 💜.

## FAQs

Text us and we'll add to this section.

#### Do I have to come to every event?

No. But tell us if you're coming to the wedding so we have your headcount for the caterer.  

#### What about the India wedding?

There will be one! Probably in Jan or Feb 2026. We're figuring out the details and will reach out soon.

#### Who will sing at Sangeet? Who is the talent?

You. You are the talent. You will hear from us soon.

#### What if I want to give you guys a non-book gift, do you have a registry?

Thank you, you dreamy person. We have no registry. If you are so moved, you could donate to one of these two organizations in our names:

| Charity | Why we picked it |
| :---- | :---- |
| [Malaria Consortium (click to donate)](https://www.malariaconsortium.org/support-us/donate.htm) | They are [GiveWell's top charity](https://www.givewell.org/charities/top-charities) because they are cost-effective and give rigorous evidence that the programs they run actually work. |
| [World Central Kitchen (click to donate)](https://wck.org/donate) | [Charity Navigator awards them four stars](https://www.charitynavigator.org/ein/273521132) for their work providing food to people struck by disaster, in places including Gaza, Ukraine and Southern California. |

![](./IMG_1391.jpeg)

<style>
.heart-hover-image:hover {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><text x='0' y='20' style='font-size: 20px;'>💖</text></svg>"), auto;
}

.particle {
    position: absolute;
    pointer-events: none; /* So they don't interfere with clicks */
    font-size: 18px; /* Size of the sparkle emoji */
    user-select: none; /* Prevent text selection */
    z-index: 9999; /* Ensure particles are on top */
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.heart-hover-image');
    if (!imageContainer) {
        console.log('Heart hover image container not found');
        return;
    }

    const particleChar = '✨'; // Moved char here for broader access
    let isMouseDown = false;
    let particleInterval = null;
    let mouseX = 0;
    let mouseY = 0;

    imageContainer.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        mouseX = event.pageX;
        mouseY = event.pageY;

        // Initial small burst on mousedown
        for (let i = 0; i < 5; i++) { 
            createParticle(mouseX, mouseY, particleChar);
        }

        if (particleInterval) clearInterval(particleInterval);
        particleInterval = setInterval(() => {
            if (isMouseDown) {
                for (let i = 0; i < 2; i++) { // Continuously spawn a few particles
                    createParticle(mouseX, mouseY, particleChar);
                }
            }
        }, 75); // Adjust interval for desired density/performance

        document.addEventListener('mousemove', onMouseMoveWhileDown);
    });

    function onMouseMoveWhileDown(event) {
        if (isMouseDown) {
            mouseX = event.pageX;
            mouseY = event.pageY;
        }
    }

    document.addEventListener('mouseup', () => {
        if (isMouseDown) {
            isMouseDown = false;
            if (particleInterval) {
                clearInterval(particleInterval);
                particleInterval = null;
            }
            document.removeEventListener('mousemove', onMouseMoveWhileDown);
        }
    });

    function createParticle(startX, startY, char) {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        particle.textContent = char;
        document.body.appendChild(particle);

        // Initial position at cursor, adjusted for scroll
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';

        // Randomize explosion effect
        const angle = Math.random() * Math.PI * 2; // Random angle for spread
        const initialExplosionStrength = Math.random() * 15 + 8; // Keep strength, but animation will be slower
        
        let currentX = 0; // Relative to initial particle position for transform
        let currentY = 0; // Relative to initial particle position for transform

        // Initial burst velocities (short-lived)
        let burstVx = Math.cos(angle) * initialExplosionStrength;
        let burstVy = Math.sin(angle) * initialExplosionStrength;

        // Gravity and falling properties
        let fallVy = Math.random() * 1 + 0.5; // Decreased initial fall velocity (was Math.random() * 2 + 1)
        const gravity = 0.03; // Decreased gravity (was 0.1)
        const airResistance = 0.99; // Slows down horizontal movement over time
        
        let opacity = 1;
        const fadeSpeed = 0.007; // Decreased fade speed (was 0.015)

        let burstFrames = 20; // Increased burst frames (was 10)

        function animateParticle() {
            if (burstFrames > 0) {
                currentX += burstVx;
                currentY += burstVy;
                burstFrames--;
                burstVx *= 0.92; // Slightly less dampening (was 0.8)
                burstVy *= 0.92; // Slightly less dampening (was 0.8)
            } else {
                // Apply gravity and falling logic
                fallVy += gravity;
                currentY += fallVy;
                // Horizontal movement (can add randomness or air resistance)
                // currentX *= airResistance; // If you want horizontal drift to slow
            }
            
            opacity -= fadeSpeed;

            particle.style.transform = `translate(${currentX}px, ${currentY}px)`;
            particle.style.opacity = Math.max(0, opacity);

            // Remove particle if faded or too far down
            if (opacity <= 0 || (startY + currentY) > (window.innerHeight + window.scrollY + 100)) {
                particle.remove();
            } else {
                requestAnimationFrame(animateParticle);
            }
        }
        requestAnimationFrame(animateParticle);
    }
});
</script>
