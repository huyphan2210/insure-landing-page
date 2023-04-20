<script setup lang="ts">
import ReasonCard from './ReasonCard/ReasonCard.vue';

import snappyImg from '../../assets/images/icon-snappy-process.svg';
import affordableImg from '../../assets/images/icon-affordable-prices.svg';
import peopleImg from '../../assets/images/icon-people-first.svg';
const reasonData = [
    {
        imgURL: snappyImg,
        title: "Snappy Process",
        content: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
    },
    {
        imgURL: affordableImg,
        title: "Affordable Prices",
        content: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
    },
    {
        imgURL: peopleImg,
        title: "People First",
        content: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
    }
]
</script>

<template>
    <section id="intro">
        <div class="intro-article">
            <h1>Humanzing your insurance.</h1>
            <p>
                Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that’s right for you. Ensure you 
                and your loved ones are protected.
            </p>
            <button type="button">View Plans</button>
            <img id="pattern-left-mobile" loading="lazy" src="../../assets/images/bg-pattern-intro-left-mobile.svg" alt="Pattern Left">
            <img id="pattern-right-mobile" loading="lazy" src="../../assets/images/bg-pattern-intro-right-mobile.svg" alt="Pattern Right">
        </div>
        <div class="intro-imgs">
            <img loading="lazy" src="../../assets/images/image-intro-desktop.jpg" alt="Intro">
            <img loading="lazy" src="../../assets/images/image-intro-mobile.jpg" alt="Intro">
        </div>
        <img id="pattern-left" loading="lazy" src="../../assets/images/bg-pattern-intro-left-desktop.svg" alt="Pattern Left">
        <img id="pattern-right" loading="lazy" src="../../assets/images/bg-pattern-intro-right-desktop.svg" alt="Pattern Right">
    </section>
    <section id="reason">
        <h1>We’re different</h1>
        <div class="reasons">
            <ReasonCard v-for="reason in reasonData" :img-u-r-l="reason.imgURL" :title="reason.title" :content="reason.content" ></ReasonCard>
        </div>
    </section>
    <section id="how-we-work">
        <h1>Find out more about how we work</h1>
        <button type="button">How we work</button>
    </section>
</template>

<style scoped>
#intro {
    position: relative;
    background-color: var(--dark-violet);
    display: grid;
    grid-template-columns: 48% 48%;
    column-gap: 4%;
}
    .intro-article {
        position: relative;
        min-height: 50vh;
        color: var(--very-light-gray);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: self-start;
    }
        .intro-article::before {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 10rem;
            height: 0.2rem;
            background-color: var(--very-light-gray);
        }
        .intro-article h1 {
            font-family: 'DM Serif Display', sans-serif;
            margin-block-start: 0;
            margin-block-end: 2rem;
            font-size: clamp(2rem, 5vw, 5rem);
            letter-spacing: 0.2rem;
            line-height: 1em;
        }

        .intro-article p {
            margin-block-start: 0;
            margin-block-end: 2rem;
            line-height: 2rem;
        }

        .intro-article button {
            text-transform: uppercase;
            font-size: 2rem;
            background-color: var(--dark-violet);
            color: var(--very-light-gray);
            border: var(--very-light-gray) solid 0.2rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.2rem;
        }
            .intro-article button:hover {
                cursor: pointer;
                background-color: var(--very-light-gray);
                color: var(--dark-violet);
            }

    .intro-imgs {
        position: relative;
    }

    .intro-imgs img {
        width: 100%;
        position: absolute;
    }
        .intro-imgs img:last-child {
            display: none;
        }

    #pattern-left {
        position: absolute;
        height: 80%;
        top: 100%;
        left: 0;
        transform: translate(0, -30%);
    }
    #pattern-right {
        position: absolute;
        height: 80%;
        top: 0;
        right: 0;
    }
    #pattern-left-mobile, #pattern-right-mobile {
        display: none;
    }

#reason {
    position: relative;
    margin-block-start: 20%;
}
    #reason::before {
        position: absolute;
        content: '';
        top: 0;
        left: 10%;
        background-color: var(--dark-violet);
        width: 10rem;
        height: 0.2rem;
    }

    #reason h1 {
        font-family: 'DM Serif Display', sans-serif;
        margin-block-start: 0;
        margin-block-end: 2rem;
        font-size: clamp(2rem, 5vw, 5rem);
        letter-spacing: 0.2rem;
        line-height: 1em;
        color: var(--dark-violet)
    }

    .reasons {
        margin-block-start: 10%;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        column-gap: calc(10% / 3);
    }

#how-we-work {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--dark-violet) url(../../assets/images/bg-pattern-how-we-work-desktop.svg) no-repeat;
    background-size: auto 100%;
    background-position: 100% 0;
    margin-left: 10%;
    margin-right: 10%;
    padding: 5%;
}

    #how-we-work h1 {
        font-family: 'DM Serif Display', sans-serif;
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: clamp(2rem, 3vw, 3rem);
        letter-spacing: 0.2rem;
        line-height: 1em;
        width: 50%;
        color: var(--very-light-gray);
    }
    #how-we-work button {
        text-transform: uppercase;
        font-size: 2rem;
        background-color: transparent;
        color: var(--very-light-gray);
        border: var(--very-light-gray) solid 0.2rem;
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
    }
        #how-we-work button:hover {
            cursor: pointer;
            background-color: var(--very-light-gray);
            color: var(--dark-violet);
        }
@media screen and (max-aspect-ratio: 1) {
    #intro {
        display: flex;
        flex-direction: column-reverse;
    }
    .intro-article {
        display: block;
        padding: 2rem;
        text-align: center;
        min-height: unset;
    }
        .intro-article::before {
            display: none;
        }
        .intro-article h1, .intro-article button {
            position: relative;
            z-index: 1;
        }
        

    .intro-imgs img {
        display: none;
        position: static;
    }
        .intro-imgs img:last-child {
            display: block;
        }

    #pattern-left, #pattern-right {
        display: none;
    }

    #pattern-left-mobile, #pattern-right-mobile {
        display: inline;
        position: absolute;
        z-index: 0;
    }
    #pattern-left-mobile {
        height: 40%;
        left: 0;
        top: 0;
    }
    #pattern-right-mobile {
        height: 60%;
        top: 100%;
        right: 0;
        transform: translate(0, -40%);
    }

    #reason {
        margin-block-start: 5rem;
        text-align: center;
        padding: 2rem;
    }
        #reason::before {
            display: none;
        }

        .reasons {
            grid-template-columns: auto;
            row-gap: 2rem;
        }

    #how-we-work {
        flex-direction: column;
        padding: 4rem 2rem;
        text-align: center;
        background: var(--dark-violet) url(../../assets/images/bg-pattern-how-we-work-mobile.svg) no-repeat;
        background-position: 100%;
        margin-left: 2rem;
        margin-right: 2rem;
    }
        #how-we-work h1 {
            width: unset;
            margin-block-end: 2rem;
        }
    @media screen and (max-width: 767px) {
        

    }
}
</style>
