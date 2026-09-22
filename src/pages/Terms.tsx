import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-findora-navy">
          Findora
        </p>
        <h1 className="text-4xl font-bold text-findora-navy">Terms and Conditions</h1>
        <p className="mt-3 text-gray-600">Last updated: September 19, 2026</p>
      </div>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Using Findora</h2>
          <p>
            Findora helps people report, search for, and recover lost items. Use the service
            responsibly and provide accurate information when registering an item.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Your submissions</h2>
          <p>
            You are responsible for the details and images you submit. Do not upload content
            that is unlawful, misleading, abusive, or that violates another person&apos;s rights.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Accounts and security</h2>
          <p>
            Keep your account credentials private and notify us if you believe your account has
            been accessed without permission. We may restrict accounts that misuse the service.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Contact and recovery</h2>
          <p>
            Findora provides a connection between users but does not guarantee that an item will
            be recovered. Arrange exchanges carefully and avoid sharing more personal information
            than necessary.
          </p>
        </section>
      </div>

      <Button asChild className="mt-10 bg-findora-navy">
        <Link to="/">Return home</Link>
      </Button>
    </div>
  );
};

export default Terms;
