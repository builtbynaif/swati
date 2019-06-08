import $ from 'jquery';
import slick from 'slick-carousel';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Responsive from './modules/Responsive';
import Modal from './modules/Modal';
import SlideOnScroll from './modules/SlideOnScroll';
import SlideOnScrollLeft from './modules/SlideOnScrollLeft';

var mobileMenu = new MobileMenu();
var responsive = new Responsive(); 
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyheader = new StickyHeader();
var modal = new Modal();
new SlideOnScroll($(".slideIn"), "75%"); 
new SlideOnScrollLeft($(".slideInLeft"), "75%");