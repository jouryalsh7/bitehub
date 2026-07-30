import { Compass } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { ROUTES } from "../constants/routes";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary-light text-primary">
            <Compass size={28} />
          </span>
          <h1 className="mt-6 text-6xl font-extrabold text-ink">404</h1>
          <p className="mt-3 text-lg font-semibold text-ink">
            This page wandered off the delivery route.
          </p>
          <p className="mt-2 text-gray-500">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="mt-8">
            <Button as="link" to={ROUTES.LANDING}>
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
