import { useEffect } from "react";

import { Helmet } from "react-helmet"

import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { Footer } from "../components/Footer";

export const Home = () => {

  useEffect(() => {

  });

  return (
    <>
      <Helmet>
        <title> Inicio | Finance App</title>
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
};
