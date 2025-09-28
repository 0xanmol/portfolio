"use client";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".observe-section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;
          if (entry.isIntersecting) setActive(id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toc = [
    { id: "about", label: "About" },
    { id: "contributing", label: "Contributing To" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "writing", label: "Writing" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-2xl font-medium tracking-tight text-gray-900">Anmol Arora</h1>
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm">
          <a className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-blue-700 transition-colors duration-200" href="mailto:mr.anmolarora@gmail.com">email</a>
          <span className="text-gray-400 select-none">·</span>
          <a className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-blue-700 transition-colors duration-200" href="https://t.me/anmolaroraeth" target="_blank" rel="noopener noreferrer">telegram</a>
          <span className="text-gray-400 select-none">·</span>
          <a className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-blue-700 transition-colors duration-200" href="https://github.com/0xanmol" target="_blank" rel="noopener noreferrer">github</a>
          <span className="text-gray-400 select-none">·</span>
          <a className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-blue-700 transition-colors duration-200" href="https://x.com/0xanmol" target="_blank" rel="noopener noreferrer">twitter</a>
          <span className="text-gray-400 select-none">·</span>
          <a className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-blue-700 transition-colors duration-200" href="https://linkedin.com/in/0xanmol" target="_blank" rel="noopener noreferrer">linkedin</a>
          <span className="text-gray-400 select-none">·</span>
          <a className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-blue-700 transition-colors duration-200" href="https://drive.google.com/file/d/1WrvnlBoX76D50pjL7EpiTo9mmgAghdur/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>
        </nav>
        {/* Mobile TOC */}
        <nav className="mt-6 md:hidden flex gap-4 justify-center text-xs text-gray-600">
          {toc.map((t) => (
            <a key={t.id} href={`#${t.id}`} aria-current={active === t.id ? "location" : undefined} className={active === t.id ? "text-blue-700 font-medium" : "hover:text-gray-900 transition-colors duration-200"}>
              {t.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr] lg:grid-cols-[240px_1fr]">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-10">
            <ul className="text-sm space-y-3 text-gray-600">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} aria-current={active === t.id ? "location" : undefined} className={active === t.id ? "text-blue-700 font-medium" : "hover:text-gray-900 transition-colors duration-200"}>
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main>
      <section id="about" className="observe-section mb-16">
        <p className="text-gray-600 text-base leading-relaxed">Building fun things with friends on the internet.</p>
      </section>

      <section id="contributing" className="observe-section mb-16">
        <h2 className="text-xl font-medium text-gray-900 mb-6 tracking-tight">Contributing To</h2>
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
          <p className="text-gray-600 text-base mb-4 leading-relaxed">Currently helping out with a few side projects:</p>
          <ul className="text-gray-700 text-base space-y-2 leading-relaxed">
            <li><strong><a href="https://solanamobile.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Solana Labs</a></strong> — Working with the team on Solana Mobile documentation, SDK improvements and example apps</li>
            <li><strong><a href="https://rarecode.ai" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Rarecode.ai</a></strong> — Frontend engineering support</li>
            <li><strong><a href="https://rareskills.io" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">rareskills.io</a></strong> — Helping review Solana educational content</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="observe-section mb-16">
        <h2 className="text-xl font-medium text-gray-900 mb-6 tracking-tight">Experience</h2>
        <Accordion type="multiple" className="space-y-4">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">Eclipse Labs — Head of Developer Relations<span className="text-gray-500 font-normal"> · Aug 2024 — Sep 2025 · Remote · Full‑time</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Shipped revamped docs, launched incubation program (7+ teams), debugged integration problems and unblocked developer teams, coordinated ecosystem partnerships; built custom developer tooling.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="eclipse">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li><strong>Documentation Revamp:</strong> Revamped all documentation to improve developer experience and onboarding.
                        <ul className="list-disc ml-6 mt-2 space-y-1.5 leading-relaxed">
                          <li>Protocol Documentation: Collaborated with Research Engineering to write comprehensive protocol architecture docs for developers.</li>
                          <li>Developer Guides: Created and maintained developer guides, tutorials, and technical content.</li>
                          <li>Hackquest Learning Track: Designed and built the complete Eclipse developer learning track on Hackquest, including structured curriculum, hands-on coding exercises, and comprehensive course materials. <a href="https://www.hackquest.io/learning-track/Eclipse" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">→ View Course</a></li>
                        </ul>
                      </li>
                      <li><strong>Incubations Program</strong> — Founded and managed the program, onboarding 7+ leading teams across crypto verticals.</li>
                      <li><strong>Technical Support & Development:</strong> Provided comprehensive technical assistance and development support across the ecosystem.
                        <ul className="list-disc ml-6 mt-2 space-y-1.5 leading-relaxed">
                          <li>Technical Bridge: Acted as the bridge between technical and non-technical teams, helping translate complex technical concepts into clear, actionable insights for everyone involved.</li>
                          <li>Debugging & Integration: Provided hands-on debugging assistance and technical guidance to ecosystem teams to resolve integration and development challenges.</li>
                          <li>Fullstack Development: Helped ecosystem engineering team with fullstack development support, including frontend, backend, and smart contract development assistance.</li>
                          <li>Developer Tools: Built a custom tool to spin up unique archival RPC endpoints for ecosystem teams, improving their development and testing capabilities.</li>
                        </ul>
                      </li>
                      <li><strong>Ecosystem Management:</strong> Coordinated relationships and talent development across the entire ecosystem.
                        <ul className="list-disc ml-6 mt-2 space-y-1.5 leading-relaxed">
                          <li>Stakeholder Coordination: Served as the primary interface between external developer community, ecosystem founders, and internal product team to align priorities and streamline development processes.</li>
                          <li>Developer Mentoring: Mentored numerous indie developers and successfully placed them across teams throughout the ecosystem, helping grow the talent pipeline.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">Fleek Network — Contractor<span className="text-gray-500 font-normal"> · Jun 2024 — Jul 2024 · Remote</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Managed developer engagement at ETHCC; debugged complex integration issues and guided successful implementations; met all KPIs.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="fleek">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li>Planned and organised a 5‑day, 15‑person hacker house with sessions and office hours at ETHCC.</li>
                      <li>Achieved engineering and marketing KPIs; assisted developers in debugging and integrations.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">Stackr Labs — Founding DevRel & Ecosystem Lead<span className="text-gray-500 font-normal"> · Feb 2024 — Jul 2024 · Remote · Full‑time</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Built developer ecosystem from zero, created demo applications and technical tutorials, designed RFP framework for private beta launch, and drove technical partnerships at early-stage startup.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="stackr">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li><strong>Technical Leadership & Architecture</strong> — Drove technical strategy for developer onboarding; designed SDK documentation and integration patterns; architected developer education curriculum for micro-rollup development.</li>
                      <li><strong>Developer Ecosystem Engineering</strong> — Built developer onboarding pipeline from scratch; created technical RFP program evaluating 50+ applications; engineered GTM strategy for private beta launch; mentored 100+ developers through complex integrations.</li>
                      <li><strong>Technical Partnerships & Integration</strong> — Conducted technical discovery with modular infrastructure teams; evaluated protocol compatibility and integration complexity; facilitated technical discussions between engineering teams.</li>
                      <li><strong>Technical Community Building</strong> — Designed and delivered hands-on technical workshops; created demo applications showcasing advanced SDK usage; built community feedback loops into product development. <a href="https://0xanmol.notion.site/Anmol-Arora-848dbcb276b94ec0abae8665b5bb2be5" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">→ Demo Applications</a></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">Polygon Labs — DevRel Engineer<span className="text-gray-500 font-normal"> · Mar 2023 — Feb 2024 · Remote · Full‑time</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Led Polygon Learn and ChainWarp (5000+ engineers); supported 1000+ hackathon projects; authored technical content and workshops.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="polygon">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li><strong>Polygon Learn</strong> — DRI/acting TPM; designed GTM impacting partner onboarding.</li>
                      <li><strong>ChainWarp</strong> — Founder & DRI of 3-week fellowship program for 5000+ Flipkart engineers transitioning to Web3; created senior‑level curriculum and program structure; onboarded enterprise partners including Myntra, Cleartrip, Wipro, TechMahindra, HealthPlus. <a href="https://0xanmol.notion.site/Anmol-Arora-848dbcb276b94ec0abae8665b5bb2be5" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">→ Program Details</a></li>
                      <li><strong>ETHGlobal Hackathons & Polygon Connect</strong> — Onboarded devs, mitigated queries, judged 1000+ projects; onboarded 10+ partners for $80k sponsorships.</li>
                      <li><strong>Technical Content & Workshops</strong> — Authored technical blogs on Polygon ID and 2.0; led online/offline workshops. <a href="https://0xanmol.notion.site/Anmol-Arora-848dbcb276b94ec0abae8665b5bb2be5" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">→ Content Portfolio</a></li>
                    </ul>
                    <p className="mt-2 text-[14px]"><em>Flipkart–Polygon COE</em></p>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li><strong>Firedrops</strong> — Contributed to smart contract architecture and GTM for product launch.</li>
                      <li><strong>Builders Hub</strong> — Founder/DRI; designed program structure for the community‑facing initiative.</li>
                    </ul>
                    <p className="mt-2 text-[14px]"><em>ETHIndia: Organiser</em></p>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li>University‑level outbound marketing; workshops across India.</li>
                      <li>Referral Leaderboard Dashboard — Inter‑college campaign leaderboard for registrations.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">Devfolio — DevRel Engineer & Lead Programme Manager (University Relations)<span className="text-gray-500 font-normal"> · Sep 2022 — Jan 2023 · Bangalore · Full‑time</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Doubled hackathons on the platform; ran 70+ workshops; improved processes and platform.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="devfolio">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li>Growth of platform — Increased number of hackathons by 2x.</li>
                      <li>Technical Workshops & Mentorship — 70+ offline & online sessions, kickoffs, mentorship.</li>
                      <li>Process improvements — Implemented and improved workflows and documentation.</li>
                      <li>Platform improvements — Collaborated with Product and Engineering on enhancements.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">BlockTrain — Co‑Founder & Blockchain Developer<span className="text-gray-500 font-normal"> · Feb 2022 — Mar 2023 · Remote · Full‑time</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Built content and in‑house products; forged partnerships and grew the community.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="blocktrain">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li>Created instructor‑led courses via videos, podcasts, articles, newsletters in Hinglish.</li>
                      <li>Partnerships & Community growth — Brought partnerships and grew the developer community.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">Freelance & Consulting — Fullstack Blockchain Developer<span className="text-gray-500 font-normal"> · 2018 — Present · Part‑time/Contractual · Remote</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Delivered contracts, launched NFT collections, and shipped a no‑code blockchain website maker.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="freelance">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li>India&apos;s first NFT indie music collection with the <strong>Swaraj Projekt</strong> — Contracts, internal tools, deployed ERC‑721/1155; minted team NFTs on Ethereum & Polygon.</li>
                      <li>Deployed NFT collection grossing $60,000 in first 24 hours — Contracts and deployment to Polygon mainnet.</li>
                      <li>No‑code blockchain‑enabled website maker — Designed architecture, contracts, frontend; product management.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">Coding Sheep Technologies LLP — Fullstack Blockchain Developer<span className="text-gray-500 font-normal"> · Nov 2021 — Feb 2022 · Remote · Full‑time</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Built NFT marketplaces/collections and tokenomics; shipped to Ethereum L1/L2.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="coding-sheep">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li>Delivered client projects: NFT marketplaces, collections, tokenomics, node creation service.</li>
                      <li>Deployed on Ethereum Layer1 & Layer2 (Polygon, Pulse chain).</li>
                      <li>Learned production‑ready smart contracts and client collaboration.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="py-4">
              <CardTitle className="text-base font-medium text-gray-900 leading-relaxed">War Against COVID — Founder & Lead Software Engineer<span className="text-gray-500 font-normal"> · Apr 2021 — Jun 2021 · Remote · Full‑time</span></CardTitle>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Summary: Led 200+ team; scaled platform usage and improved search outcomes.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="wac">
                  <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Expand details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                      <li>Leadership — Led a team of 200+ personnel; developed/updated/maintained back‑end and front‑end.</li>
                      <li>Impact — Averaged 2000+ daily visitors; reduced null searches to 8% from 70% in 4 weeks.</li>
                      <li>Tools — TypeScript, Nuxt.js, Tailwind CSS, Bootstrap‑Vue, Node.js, Selenium for scraping.</li>
                      <li>Media — Featured in Forbes India, BBC World Radio, News18, &quot;WhyFi&quot; &amp; &quot;Ruk Jaana Nahi&quot; Spotify podcasts, &quot;HASHTAG OUR STORIES&quot; on Snapchat, and &quot;Sakshi&quot; Telugu Newspaper (2021).</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Accordion>
      </section>

      <section id="projects" className="observe-section mb-16">
        <h2 className="text-xl font-medium text-gray-900 mb-6 tracking-tight">Projects</h2>
        <ul className="text-sm text-gray-700 space-y-3 ml-6 list-disc leading-relaxed">
          <li>
            <span className="font-medium">Counter Colour Changing Frame</span> — Frog · Stackr SDK (TS); colour‑changing counter micro‑rollup.
          </li>
          <li>
            <span className="font-medium">gethired.xyz</span> — Next.js · OpenAI; AI job‑answer and cover‑letter helper.
          </li>
          <li>
            <span className="font-medium">TezTris</span> — Tezos · SmartPy · React; on‑chain Tetris (1v1/multiplayer). Won Tezos & Spheron @ Unfold&#39;22.
          </li>
          <li>
            <span className="font-medium">Embark</span> — Polygon · IPFS · Moralis · Chainlink; Learn‑to‑Earn with NFT minting. Won Filecoin & Polygon prizes.
          </li>
          <li>
            <span className="font-medium">Farm For Good</span> — Polygon · Curve · Beefy; stMATIC‑MATIC LP vault; yield→BCT.
          </li>
          <li>
            <span className="font-medium">DAppTruist</span> — Flutter · Web3_Connect; on‑chain voting, proposals, NFT airdrops. Won Celo @ HashDefine&#39;22.
          </li>
          <li>
            <span className="font-medium">DExos</span> — SmartPy · Taquito · React; CPMM DEX; safe playground. Won Tezos India Hack7Day.
          </li>
        </ul>
      </section>

      <section id="writing" className="observe-section mb-16">
        <h2 className="text-xl font-medium text-gray-900 mb-6 tracking-tight">Technical Writing & Thought Leadership</h2>
        <ul className="text-sm text-gray-700 space-y-3 ml-6 list-disc leading-relaxed">
          <li>
            <a href="https://x.com/0xanmol/status/1875241573883245023" className="font-medium text-blue-700 hover:underline">Want Real Dev Adoption? Do the Hard Stuff</a>
          </li>
          <li>
            <a href="https://0xanmol.hashnode.dev/polygon2" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 hover:underline">Decoding Polygon 2.0: A Primer</a>
          </li>
          <li>
            <a href="https://0xanmol.hashnode.dev/apaar-id" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 hover:underline">APAAR ID Reimagined</a>
          </li>
          <li>
            <a href="https://0xanmol.notion.site/Anmol-Arora-848dbcb276b94ec0abae8665b5bb2be5" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">→ Full Technical Content Portfolio</a>
          </li>
        </ul>
      </section>

      <section id="skills" className="observe-section mb-16">
        <h2 className="text-xl font-medium text-gray-900 mb-6 tracking-tight">Technical Skills</h2>
        <div className="space-y-3 text-sm leading-relaxed">
          <div><span className="font-semibold">Programming:</span> Rust, TypeScript, JavaScript, Solidity, C++, Python, Swift, Dart</div>
          <div><span className="font-semibold">Web:</span> Next.js, React, Tailwind, shadcn/ui, SCSS</div>
          <div><span className="font-semibold">Blockchain:</span> Solana (Anchor, Solana CLI, Web3.js, SPL, Metaplex, Solana Pay, SNS), EVM (Foundry, Hardhat), Tezos (SmartPy, Taquito)</div>
          <div><span className="font-semibold">Tools & Platforms:</span> Git/GitHub, Adobe XD, Figma</div>
          <div><span className="font-semibold">DevRel:</span> docs, guides, workshops, incubations, community programs, DX tooling</div>
        </div>
      </section>

      
      <footer className="text-xs text-gray-500 pt-8 border-t border-gray-100">Last updated 2025‑09.</footer>
      </main>
      </div>
    </div>
  );
}


