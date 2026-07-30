import Container from "./Container";
import Button from "./Button";
import { ROUTES } from "../../constants/routes";

/**
 * Every route in the app brief (Home, Login, Cart, Checkout, Admin...)
 * needs to EXIST and be navigable in Milestone 1, even though we'll
 * only build the real UI for them in later milestones.
 *
 * Rather than copy-pasting the same "under construction" markup into
 * 10+ page files, every placeholder page renders THIS one component
 * with different text. When we're ready to build the real Login page,
 * we simply replace the contents of Login.jsx — the route never moves.
 */
export default function PlaceholderPage({ title, description, milestone }) {
  return (
    <section className="flex min-h-[60vh] items-center">
      <Container>
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-gray-300 bg-white px-8 py-14 text-center">
          <span className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {milestone}
          </span>
          <h1 className="mt-4 text-2xl font-bold text-ink md:text-3xl">
            {title}
          </h1>
          <p className="mt-3 text-gray-500">{description}</p>
          <div className="mt-8">
            <Button as="link" to={ROUTES.LANDING} variant="outline">
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
