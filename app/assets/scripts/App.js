import $ from 'jquery';
import slick from 'slick-carousel';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import HeroSlider from './modules/HeroSlider';
import Responsive from './modules/Responsive';
import Modal from './modules/Modal';
import Modalm from './modules/Modalm';
import SlideOnScroll from './modules/SlideOnScroll';
import SlideOnScrollLeft from './modules/SlideOnScrollLeft';

var mobileMenu = new MobileMenu();
var heroSlider = new HeroSlider(); 
var responsive = new Responsive(); 
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyheader = new StickyHeader();
var modal = new Modal();
var modalm = new Modalm();
new SlideOnScroll($(".slideIn"), "75%"); 
new SlideOnScrollLeft($(".slideInLeft"), "75%");