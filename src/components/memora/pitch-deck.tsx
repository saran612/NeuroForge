import { Footer } from "./footer";
import { Header } from "./header";
import { TitleSlide, ProblemSlide, SolutionSlide, ImpactSlide, ResearchSlide, TeamSlide, ContactSlide, TryNowSlide } from "./slides"
import { AnimatedSlide } from "./animated-slide";

const slides = [
  { id: "problem", Component: ProblemSlide },
  { id: "solution", Component: SolutionSlide },
  { id: "impact", Component: ImpactSlide },
  { id: "research", Component: ResearchSlide },
  { id: "team", Component: TeamSlide },
  { id: "contact", Component: ContactSlide },
  { id: "try-now", Component: TryNowSlide },
];

export function PitchDeck() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <main>
          <TitleSlide id="home" />
          {slides.map(({ id, Component }) => (
            <AnimatedSlide key={id} id={id}>
              <Component id={id} />
            </AnimatedSlide>
          ))}
        </main>
        <Footer />
      </div>
    </>
  )
}
