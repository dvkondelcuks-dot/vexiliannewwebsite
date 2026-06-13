import { FinalAuditSection } from "@/components/sections/FinalAuditSection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeakagePathSection } from "@/components/sections/LeakagePathSection";
import { OffSeasonSection } from "@/components/sections/OffSeasonSection";
import { OwnerControlSection } from "@/components/sections/OwnerControlSection";
import { PlatformReframeSection } from "@/components/sections/PlatformReframeSection";
import { PricingSelectivitySection } from "@/components/sections/PricingSelectivitySection";
import { RequestIsNotReservationSection } from "@/components/sections/RequestIsNotReservationSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { VexilianMethodSection } from "@/components/sections/VexilianMethodSection";

export default function Page() {
  return (
    <div className="vx-page-shell">
      <Header />
      <main>
        <HeroSection />
        <RequestIsNotReservationSection />
        <LeakagePathSection />
        <OffSeasonSection />
        <PlatformReframeSection />
        <VexilianMethodSection />
        <OwnerControlSection />
        <UseCasesSection />
        <PricingSelectivitySection />
        <FinalAuditSection />
      </main>
      <Footer />
    </div>
  );
}
