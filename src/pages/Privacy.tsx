import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-findora-navy">
          Findora
        </p>
        <h1 className="text-4xl font-bold text-findora-navy">Privacy Policy</h1>
        <p className="mt-3 text-gray-600">Last updated: September 19, 2026</p>
      </div>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Information we collect</h2>
          <p>
            Findora collects account details and the information you provide when registering or
            searching for lost items, such as names, contact details, locations, and images.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">How we use information</h2>
          <p>
            We use this information to operate the lost-and-found service, help users connect,
            protect the platform, and improve the experience.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Your choices</h2>
          <p>
            You can update your profile information through the app. Contact the application
            administrator to request help with account or submitted-item data.
          </p>
        </section>
      </div>

      <Button asChild className="mt-10 bg-findora-navy">
        <Link to="/">Return home</Link>
      </Button>
    </div>
  );
};

export default Privacy;
