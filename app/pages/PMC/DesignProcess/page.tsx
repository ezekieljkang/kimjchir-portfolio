import Footer from "@/components/Footer";
import FooterNavBar from "@/components/FooterNavBar";
import CSHero from "@/components/CSHero";
import CSContent2 from "@/components/CSContent2";

export default function Page() {
  return (
    <main className="max-w-screen-[1620px] mx-auto">
      <div className="md:border border-black md:m-3">
        <CSHero
          company='/PMCcolor.svg'
          heading='Design Process'
          content='I refined the design process at PMC, and led five redesigns (Indiewire, Stylecaster, TVLine, Artforum, TheFlowSpace, and more!)'
          timeline='EACH DESIGN PROCESS TOOK ABOUT 1-2MONTHS'
          role='PRODUCT DESIGNER'
          tools='ADOBE XD'
        />
        <CSContent2
          problemText="Previously at PMC, the design process focused solely on internal development, neglecting to fully integrate the brand editors&apos; feedback into the design phases. This resulted in websites that didn't fully align with brand needs and content strategies, leading to dissatisfaction upon launch. Recognizing the importance of stakeholder collaboration, we've implemented a new process (incorporating the NOVA design system) that actively seeks brand staff input to ensure long-term satisfaction and website success."
          solutionText={`I spearheaded the streamlining of PMC's design process, fostering seamless communication and securing cross-departmental approvals between brand stakeholders (editors), advertising, sales, marketing, engineering, and project management teams.\n\n
          To empower brand editors and foster informed decision-making, I transformed the design process into manageable steps. This breakdown ensured clear communication and instilled confidence in the editors' contributions to the redesign.`}
        />
        <Footer />
        <FooterNavBar />
      </div>
    </main>
  );
}
