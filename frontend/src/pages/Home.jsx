import React, { useEffect, useState } from "react";
import Header from "../components/site/Header";
import HeroCarousel from "../components/site/HeroCarousel";
import TrustStrip from "../components/site/TrustStrip";
import AboutSection from "../components/site/AboutSection";
import WhatWeMake from "../components/site/WhatWeMake";
import ProductRange from "../components/site/ProductRange";
import WhatSetsApart from "../components/site/WhatSetsApart";
import QualityProcess from "../components/site/QualityProcess";
import NutraceuticalsSection from "../components/site/NutraceuticalsSection";
import FounderStory from "../components/site/FounderStory";
import PartnersSection from "../components/site/PartnersSection";
import GhanaNetwork from "../components/site/GhanaNetwork";
import GlobalCountries from "../components/site/GlobalCountries";
import Testimonials from "../components/site/Testimonials";
import ContactSection from "../components/site/ContactSection";
import Footer from "../components/site/Footer";
import { api } from "../lib/api";

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    api
      .get("/content/homepage")
      .then((r) => setContent(r.data))
      .catch(() => setContent(null));
  }, []);

  return (
    <div data-testid="home-page" className="bg-white">
      <Header />
      <HeroCarousel slides={content?.hero_slides || []} />
      <TrustStrip items={content?.trust_strip || []} />
      <AboutSection />
      <WhatWeMake />
      <ProductRange />
      <WhatSetsApart />
      <QualityProcess />
      <NutraceuticalsSection />
      <FounderStory />
      <PartnersSection />
      <GhanaNetwork />
      <GlobalCountries />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
