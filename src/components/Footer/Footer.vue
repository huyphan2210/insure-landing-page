<script setup lang="ts">
const footerNavData = [
    { title: 'Our Company', navigations: ['How we work', 'Why insure?', 'View plans', 'Reviews']},
    { title: 'Help Me', navigations: ['FAQ', 'Terms of use', 'Privacy Policy', 'Cookies']},
    { title: 'Contact', navigations: ['Sales', 'Support', 'Live chat']},
    { title: 'Others', navigations: ['Careers', 'Press', 'Licenses']}
]
</script>

<template>
    <div class="logos">
        <img src="../../assets/images/logo.svg" alt="Logo" loading="lazy">
        <address>
            <img src="../../assets/images/icon-facebook.svg" alt="Facebook" loading="lazy">
            <img src="../../assets/images/icon-twitter.svg" alt="Twitter" loading="lazy">
            <img src="../../assets/images/icon-pinterest.svg" alt="Pinterest" loading="lazy">
            <img src="../../assets/images/icon-instagram.svg" alt="Instagram" loading="lazy">
        </address>
    </div>
    <div class="footer-nav">
        <div class="navigation" v-for="data in footerNavData">
            <h2>{{ data.title }}</h2>
            <p v-for="nav in data.navigations">
                {{ nav }}
            </p>
        </div>
    </div>
    <div id="challenger">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/huyphan2210" target="_blank">Huy Phan</a>.
    </div>
</template>

<style scoped>
.logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block-end: 3rem;
    border-block-end: var(--dark-grayish-violet) 0.1rem solid;
    margin-block-end: 3rem;
}
    .logos address {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .logos address img {
        margin-left: 1rem;
    }
        .logos address img:hover {
            cursor: pointer;
            filter: brightness(0.5);
        }
.footer-nav {
    display: grid;
    grid-template-columns: auto auto auto auto;
    text-transform: uppercase;
    font-weight: 700;
}
    .footer-nav h2 {
        color: var(--dark-grayish-violet);
        margin-block-start: 0;
    }
    .footer-nav p {
        color: var(--dark-violet);
    }
        .footer-nav p:hover {
            cursor: pointer;
            text-decoration: underline;
        }
#challenger {
    width: 100%;
    position: absolute;
    text-align: center;
    left: 50%;
    bottom: 1vh;
    transform: translate(-50%);
}

@media screen and (max-aspect-ratio: 1) {
    .logos {
        flex-direction: column;
    }
        .logos address {
            margin-block-start: 2rem;
        }
        .logos address img {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    .footer-nav {
        grid-template-columns: auto;
        text-align: center;
    }
        .navigation {
            margin-block-end: 1rem;
        }
            .navigation h2 {
                margin-block-end: 2rem;
                font-size: 1rem;
            }
}
</style>
