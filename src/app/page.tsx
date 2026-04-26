"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Experience",
          id: "#experience",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Siphon Coffee"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Precision-Brewed. Comfortably Yours."
      description="Experience small-batch coffee crafted with care and served with soul."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "The best siphon brew I've had in years. Truly crafted with soul.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-working-elegant-cozy-office-space_23-2149548679.jpg",
        },
        {
          name: "Mark D.",
          handle: "@markd",
          testimonial: "Comforting atmosphere and precise flavor profiles.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-cup-coffee-while-using-smart-phone-cafe_637285-8102.jpg",
        },
        {
          name: "Elena R.",
          handle: "@elena_r",
          testimonial: "The attention to detail in every cup is absolutely unmatched.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-sunglasses-drinks-morning-coffee-cafe_613910-12122.jpg",
        },
        {
          name: "James K.",
          handle: "@jamesk",
          testimonial: "A perfect sanctuary for coffee lovers and remote workers alike.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-female-sunglasses-drinks-coffee-cafe-street_613910-1400.jpg",
        },
        {
          name: "Maria L.",
          handle: "@maria_l",
          testimonial: "Simply the highest quality beans I've encountered in the city.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-urban-cafe_158595-686.jpg",
        },
      ]}
      buttons={[
        {
          text: "Order Online",
          href: "#order",
        },
        {
          text: "Visit Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/arrangement-with-gas-tank-tea-pot_23-2148456519.jpg"
      imageAlt="Artisanal coffee brewing"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-enjoying-coffee_23-2148756317.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-happy-woman-with-cup-coffee_23-2147925425.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-women-having-coffee-meeting_23-2148817110.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sweet-shot-happy-beautiful-caucasian-redhead-woman-holding-hands-with-her-stylish-african-american-girlfriend_273609-9460.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-portrait-girl-holding-takeaway-coffee-cup_23-2147906477.jpg",
          alt: "Customer portrait",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Small Batch",
        },
        {
          type: "text",
          text: "Artisanal Roasts",
        },
        {
          type: "text",
          text: "Siphon Brewed",
        },
        {
          type: "text",
          text: "Ethically Sourced",
        },
        {
          type: "text",
          text: "Precision Crafted",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="The Siphon Experience"
      description={[
        "At Siphon Coffee, every cup begins with intention — beans sourced from small farms, water balanced to the degree, and served in a space that feels like home.",
        "We believe that artisan coffee should be precise yet approachable.",
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Vanilla Iced Latte",
          price: "$6.50",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-trendy-delicious-fresh-dalgona-coffee-with-milk-white-wood-table_181624-23944.jpg",
        },
        {
          id: "p2",
          name: "Signature Siphon Brew",
          price: "$8.00",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-dining-table-arrangement_23-2150312216.jpg",
        },
        {
          id: "p3",
          name: "Espresso Flight",
          price: "$12.00",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-black-background-with-powder_114579-16635.jpg",
        },
        {
          id: "p4",
          name: "Cranberry Muffin",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/croissants-with-muffins-coffee_23-2147693696.jpg",
        },
        {
          id: "p5",
          name: "Avocado Toast",
          price: "$9.00",
          imageSrc: "http://img.b2bpic.net/free-photo/slices-smoked-salmon-served-with-radishes-lettuce-greens_140725-8161.jpg",
        },
        {
          id: "p6",
          name: "Seasonal Pastry",
          price: "$5.00",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-rustic-blueberry-pie-wooden-table-generated-by-ai_188544-22569.jpg",
        },
      ]}
      title="Signature Menu"
      description="Curated selection of our best drinks and pairings."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Crafted Coffee Co",
        "Local Roasters",
        "Siphon Society",
        "Daily Grind",
        "Bean Boutique",
        "Artisan Brews",
        "Community Cafe",
      ]}
      title="Join the Brew Circle"
      description="Sign up for exclusive tastings and early access to our seasonal roasts."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Great Vibe",
          quote: "The coffee was smooth—barista’s choice was spot on.",
          name: "Elena R.",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/person-drinking-coffee-spacious-cafeteria_23-2150424050.jpg",
        },
        {
          id: "t2",
          title: "Excellent Service",
          quote: "Great selection of drinks and food, service is wonderful.",
          name: "James K.",
          role: "Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-girl-sitting-cafe_176420-5900.jpg",
        },
        {
          id: "t3",
          title: "Authentic",
          quote: "It gets busy—a sign people love it here.",
          name: "Maria L.",
          role: "Editor",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190928.jpg",
        },
        {
          id: "t4",
          title: "My Daily Stop",
          quote: "The perfect start to my morning. Every single day.",
          name: "David W.",
          role: "Dev",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-with-coffee-smiling-laptop_23-2148322059.jpg",
        },
        {
          id: "t5",
          title: "Incredible Beans",
          quote: "You can taste the craft in every sip.",
          name: "Sophia B.",
          role: "Creative",
          imageSrc: "http://img.b2bpic.net/free-photo/spectacular-woman-with-dark-long-hair-smiling-coffee-break_291650-641.jpg",
        },
      ]}
      title="Brewing Joy"
      description="What our community says about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "What is the siphon method?",
          content: "The siphon method uses vacuum pressure to extract pure, delicate flavors.",
        },
        {
          id: "f2",
          title: "Do you offer vegan options?",
          content: "Yes, we have a variety of plant-based milks and vegan food pairings.",
        },
        {
          id: "f3",
          title: "Can I reserve a table?",
          content: "Yes, reservations are available via our website for larger groups.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cones-hot-chocolate-near-scarf-window_23-2147936834.jpg"
      title="Frequently Asked"
      description="Questions about our coffee and methods."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Visit or Reach Out"
      description="We are located at the heart of the city. Join us for a cup anytime."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-manager-girl-changing-sign-from-closed-open-sign-door-cafe-looking-outside-waiting-clients-after-lockdown_7861-3174.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Siphon"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "© 2024 Siphon Coffee",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
