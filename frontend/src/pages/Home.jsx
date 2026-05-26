import React, { useEffect, useState } from "react";
import Header from "../components/site/Header";
import HeroCarousel from "../components/site/HeroCarousel";
import TrustStrip from "../components/site/TrustStrip";
import WhatWeDo from "../components/site/WhatWeDo";
import WhyShobha from "../components/site/WhyShobha";
import GlobalPresence from "../components/site/GlobalPresence";
import GhanaStats from "../components/site/GhanaStats";
import FounderMessage from "../components/site/FounderMessage";
import Partners from "../components/site/Partners";
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
      <WhatWeDo />
      <WhyShobha />
      <GlobalPresence />
      <GhanaStats items={content?.ghana_stats || []} />
      <FounderMessage
        quote={content?.founder_quote || ""}
        name={content?.founder_name || ""}
        title={content?.founder_title || ""}
      />
      <Partners />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
