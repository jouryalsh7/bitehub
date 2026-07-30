import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import RestaurantCard from "../components/home/RestaurantCard";
import CategoryCard from "../components/home/CategoryCard";
import StepCard from "../components/home/StepCard";
import {
  categories,
  featuredRestaurants,
  howItWorksSteps,
} from "../constants/mockData";
import { ROUTES } from "../constants/routes";

export default function LandingPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin size={14} /> Delivering across your city
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink md:text-5xl lg:text-6xl">
                Your favorite food,
                <br />
                delivered <span className="text-primary">fast.</span>
              </h1>

              <p className="mt-6 max-w-md text-lg text-gray-500">
                Order from hundreds of local restaurants and get it delivered
                to your door in minutes. Track every order in real time.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button as="link" to={ROUTES.RESTAURANTS} size="lg">
                  Order now <ArrowRight size={18} />
                </Button>
                <Button as="link" to={ROUTES.REGISTER} variant="outline" size="lg">
                  Create an account
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  500+ restaurants
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  Avg. 25 min delivery
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  4.8/5 average rating
                </span>
              </div>
            </div>

            {/* Right: signature floating order-card mockup */}
            <div className="relative mx-auto hidden w-full max-w-sm md:block">
              <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-primary/10" />
              <div className="relative rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/60">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink">
                    Order #1284
                  </span>
                  <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                    On the way
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-light text-2xl">
                    🍣
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Sakura Sushi Bar</p>
                    <p className="text-sm text-gray-500">3 items · $28.50</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-1.5 flex-1 rounded-full bg-gray-100">
                    <div className="h-1.5 w-2/3 rounded-full bg-primary" />
                  </div>
                  <span className="text-xs font-medium text-gray-400">
                    12 min
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg shadow-gray-200/60">
                <p className="text-xs text-gray-400">Delivered today</p>
                <p className="text-lg font-bold text-ink">1,204 orders</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ink md:text-3xl">
                Browse by category
              </h2>
              <p className="mt-2 text-gray-500">
                Craving something specific? Start here.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:overflow-visible">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-ink md:text-3xl">
              How BiteHub works
            </h2>
            <p className="mt-2 text-gray-500">
              From craving to doorstep in three simple steps.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorksSteps.map((item) => (
              <StepCard key={item.step} {...item} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- FEATURED RESTAURANTS ---------- */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ink md:text-3xl">
                Featured restaurants
              </h2>
              <p className="mt-2 text-gray-500">
                Popular picks from people near you.
              </p>
            </div>
            <Button as="link" to={ROUTES.RESTAURANTS} variant="ghost" size="sm">
              View all <ArrowRight size={16} />
            </Button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-14 text-center md:py-16">
            <h2 className="max-w-lg text-2xl font-bold text-white md:text-3xl">
              Hungry? Your next favorite meal is a few taps away.
            </h2>
            <Button
              as="link"
              to={ROUTES.REGISTER}
              size="lg"
              className="!bg-white !text-primary hover:!bg-gray-50"
            >
              Get started for free
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
