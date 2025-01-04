import AboutHeaderSection from "@/components/sections/AboutHeaderSection";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function AboutCompanyPage() {
    return (
        <>
            <AboutHeaderSection />
            <StatsSection />
            <div className="bg-gray-600/10">
                <CTASection />
            </div>
            <TestimonialSection />
        </>
    )
}