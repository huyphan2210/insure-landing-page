<script setup lang="ts">
window.addEventListener('resize', () => {
    const closeIcon = document.getElementById('close-icon');
    const menuIcon = document.getElementById('hamburger');
    const navBar = document.getElementsByClassName('navigation-bar')[0] as HTMLElement;
    if (menuIcon && closeIcon && (window.innerWidth / window.innerHeight >= 1)) {
        menuIcon.style.display = '';
        closeIcon.style.display = '';
        navBar.style.left = '';
        navBar.style.opacity = '';
    }
})

function openMenu(e: MouseEvent) {
    const navBar = document.getElementsByClassName('navigation-bar')[0] as HTMLElement;
    const closeIcon = document.getElementById('close-icon');
    if (closeIcon) {
        const menuIcon = e.currentTarget as HTMLElement;
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    }
    
    navBar.style.left = '0';
    navBar.style.opacity = '1';
}

function closeMenu(e:MouseEvent) {
    const navBar = document.getElementsByClassName('navigation-bar')[0] as HTMLElement;
    const menuIcon = document.getElementById('hamburger');
    if (menuIcon) {
        const closeIcon = e.currentTarget as HTMLElement;
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
    
    navBar.style.left = '';
    navBar.style.opacity = '';
}
</script>

<template>
    <img src="../../assets/images/logo.svg" alt="Logo">
    <img id="hamburger" src="../../assets/images/icon-hamburger.svg" alt="Hamburger" @click="openMenu">
    <img id="close-icon" src="../../assets/images/icon-close.svg" alt="Close" @click="closeMenu">
    <nav class="navigation-bar">
        <div class="nav">How we work</div>
        <div class="nav">Blog</div>
        <div class="nav">Account</div>
        <div class="nav">View Plans</div>
    </nav>
</template>

<style scoped>
#hamburger, #close-icon {
    display: none;
}

.navigation-bar {
    display: flex;
    align-items: center;
}
    .nav {
        margin-right: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--dark-grayish-violet);
    }
        .nav:hover {
            cursor: pointer;
            color: var(--dark-violet);
        }
        
        .nav:last-child {
            margin: 0;
            border: 0.2rem var(--dark-violet) solid;
            padding: 1rem 2rem;
        }
            .nav:last-child:hover {
                color: var(--very-light-gray);
                background-color: var(--very-dark-violet);
            }

@media screen and (max-aspect-ratio: 1) {
    #hamburger {
        display: inline;
    }
    .navigation-bar {
        display: block;
        position: absolute;
        width: calc(100vw - 4rem);
        height: calc(100vh - 100% - 2rem);
        top: 100%;
        left: 100%;
        transition: 1s ease-in-out;
        opacity: 0;
        background: var(--very-dark-violet) url(../../assets/images/bg-pattern-mobile-nav.svg) no-repeat;
        background-size: contain;
        background-position: 0 100%;
        padding: 1rem 2rem;
        z-index: 1;
    }
        .nav {
            margin: 0;
            margin-block: 2rem;
            text-align: center;
            color: var(--very-light-gray);
        }
            .nav:last-child {
                border-color: var(--very-light-gray);
            }
}
</style>
