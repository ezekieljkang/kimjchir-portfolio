import Footer from "@/components/Footer";
import FooterNavBar from "@/components/FooterNavBar";
import CSHero from "@/components/CSHero";
import CSContent from "@/components/CSContent";

export default function Page() {
  return (
    <main className="max-w-screen-[1620px] mx-auto">
      <div className="md:border border-black md:m-3">
        <CSHero
          company='/PMCcolor.svg'
          heading='NOVA DESIGN SYSTEM'
          content='I created a scalable design system for PMC, enabling a 40% decrease in redesign cycle time.'
          timeline='JANURARY 2024 – APRIL 2024'
          role='PRODUCT DESIGNER'
          tools='ADOBE XD, BUGHERD, WORDPRESS (GUTENBERG)'
        />
        <CSContent
          problemText="PMC faced the challenge of rapidly redesigning and unifying over 30 diverse brands. The existing design system was outdated and hindered efficiency. Consequently, the QA process was prolonged due to numerous recurring design errors across multiple brands, totaling over 700 identified issues. These factors adversely affected project timelines. With only two designers and a heavy reliance on software engineer contractors, resources were stretched thin."
          solutionText={`A new design system, called NOVA, was created to centralize both design assets and their corresponding codebase. This unified platform aimed to accelerate both design and development workflows.\n\nWithin a month, a comprehensive inventory of design building blocks, components, modules, and templates was compiled. To validate and refine the system, NOVA was concurrently implemented across four redesign projects over a four-month period. This practical application facilitated the system's evolution and adaptation to real-world design challenges.`}
          resultText="Whereas previous redesigns typically spanned four to five months, the NOVA system enabled completion within two to three months. This efficiency is anticipated to increase as the design system library expands with each subsequent project. Additionally, the NOVA system contributed to a reduction in QA bug counts, with a post-redesign average of 200 issues. Furthermore, stakeholders expressed satisfaction with the accelerated delivery of live sites."
        />
        <Footer />
        <FooterNavBar />
      </div>
    </main>
  );
}
