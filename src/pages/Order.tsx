import { FormEvent, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const plans = {
  basic: { name: "Basic", price: "$9.99", tags: "1 QR Code Tag", service: "6 months" },
  standard: { name: "Standard", price: "$19.99", tags: "3 QR Code Tags", service: "1 year" },
  premium: { name: "Premium", price: "$29.99", tags: "5 QR Code Tags", service: "Lifetime" },
} as const;

type PlanId = keyof typeof plans;

const Order = () => {
  const [searchParams] = useSearchParams();
  const requestedPlan = searchParams.get("plan") as PlanId | null;
  const plan = requestedPlan && requestedPlan in plans ? plans[requestedPlan] : plans.standard;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Your tag order request has been received");
  };

  if (submitted) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-16 text-center">
        <CheckCircle className="mx-auto mb-5 h-16 w-16 text-green-600" />
        <h1 className="text-3xl font-bold text-findora-navy">Order request received</h1>
        <p className="mt-4 text-gray-600">
          We will contact you using the details you provided to confirm payment and delivery for
          your {plan.name} package.
        </p>
        <Button asChild className="mt-8 bg-findora-navy">
          <Link to="/get-tag">Back to tags</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <Button asChild variant="ghost" className="mb-8 px-0">
        <Link to="/get-tag">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to tags
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg bg-findora-navy p-6 text-white">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-200">Selected package</p>
          <h1 className="mt-3 text-3xl font-bold">{plan.name}</h1>
          <p className="mt-2 text-3xl font-bold">{plan.price}</p>
          <ul className="mt-8 space-y-3 text-blue-50">
            <li>{plan.tags}</li>
            <li>{plan.service} service</li>
            <li>Personalized QR code</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Order your Findora tag</h2>
            <p className="mt-1 text-gray-600">Enter your details and we will confirm the order with you.</p>
          </div>

          <div>
            <label htmlFor="order-name" className="mb-1 block text-sm font-medium">Full name</label>
            <Input id="order-name" name="name" required autoComplete="name" />
          </div>
          <div>
            <label htmlFor="order-email" className="mb-1 block text-sm font-medium">Email</label>
            <Input id="order-email" name="email" type="email" required autoComplete="email" />
          </div>
          <div>
            <label htmlFor="order-phone" className="mb-1 block text-sm font-medium">Phone number</label>
            <Input id="order-phone" name="phone" type="tel" required autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="order-address" className="mb-1 block text-sm font-medium">Delivery address</label>
            <Input id="order-address" name="address" required autoComplete="street-address" />
          </div>

          <Button type="submit" className="w-full bg-findora-navy">Submit order request</Button>
        </form>
      </div>
    </div>
  );
};

export default Order;
