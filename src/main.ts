import { createApp } from 'vue';
import './global.css';
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';
import Footer from './components/Footer/Footer.vue';

createApp(Header).mount('header');
createApp(Main).mount('main');
createApp(Footer).mount('footer');
