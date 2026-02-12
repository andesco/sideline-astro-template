"use client";

import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type FeatureValue = true | string | null;

interface FeatureSection {
  category: string;
  features: {
    name: string;
    free: FeatureValue;
    startup: FeatureValue;
    enterprise: FeatureValue;
  }[];
}

const PLANS = [
  { name: "Free", button: "Get started" },
  { name: "Startup", button: "Get started" },
  { name: "Enterprise", button: "Get a demo" },
];

const SECTIONS: FeatureSection[] = [
  {
    category: "Usage",
    features: [
      { name: "Members", free: "Unlimited", startup: "Unlimited", enterprise: "Unlimited" },
      { name: "Transactions", free: "250", startup: "Unlimited", enterprise: "Unlimited" },
      { name: "Teams", free: "2", startup: "Unlimited", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Features",
    features: [
      { name: "Reporting", free: true, startup: true, enterprise: true },
      { name: "Analytics", free: true, startup: true, enterprise: true },
      { name: "Import and export", free: true, startup: true, enterprise: true },
      { name: "Integrations", free: true, startup: true, enterprise: true },
      { name: "Streamline AI", free: null, startup: true, enterprise: true },
      { name: "Admin roles", free: null, startup: null, enterprise: true },
      { name: "Audit log", free: null, startup: null, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Priority support", free: true, startup: true, enterprise: true },
      { name: "Account manager", free: null, startup: null, enterprise: true },
      { name: "Uptime SLA", free: null, startup: null, enterprise: true },
    ],
  },
];

const renderValue = (value: FeatureValue) => {
  if (value === null) return null;
  if (value === true) return <Check className="text-primary/80 size-4" />;

  return (
    <div className="flex items-center gap-1">
      <Check className="text-primary/80 size-4" />
      <span>{value}</span>
    </div>
  );
};

export const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <section className="pb-16 md:pb-28 lg:pb-32">
      <div className="container">
        <div>
          <div className="md:hidden">
            <Collapsible open={open} onOpenChange={setOpen}>
              <div className="flex items-center justify-between py-4">
                <CollapsibleTrigger
                  className="flex items-center gap-2"
                  aria-label="Toggle pricing plans"
                >
                  <h3 className="text-2xl font-semibold">{PLANS[selectedPlan].name}</h3>
                  <ChevronsUpDown
                    className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </CollapsibleTrigger>

                <Button size="sm" variant="outline">
                  {PLANS[selectedPlan].button}
                </Button>
              </div>

              <CollapsibleContent className="flex flex-col space-y-2 p-2">
                {PLANS.map((plan, index) =>
                  index === selectedPlan ? null : (
                    <Button
                      key={plan.name}
                      variant="secondary"
                      onClick={() => {
                        setSelectedPlan(index);
                        setOpen(false);
                      }}
                    >
                      {plan.name}
                    </Button>
                  ),
                )}
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="grid grid-cols-4 max-md:hidden">
            <div className="col-span-1" />
            {PLANS.map((plan) => (
              <div key={plan.name} className="flex flex-col">
                <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
                <Button variant="outline" className="w-fit">
                  {plan.button}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 lg:mt-12">
          {SECTIONS.map((section) => (
            <div key={section.category} className="mb-8">
              <div className="bg-muted-foreground/5 px-2 py-4">
                <h3 className="text-lg font-semibold">{section.category}</h3>
              </div>

              {section.features.map((feature) => {
                const values = [feature.free, feature.startup, feature.enterprise];
                return (
                  <div
                    key={feature.name}
                    className="text-primary/90 grid grid-cols-2 border-b py-2 font-medium max-md:last:border-b-0 md:grid-cols-4"
                  >
                    <span className="flex items-center py-3">{feature.name}</span>

                    <div className="md:hidden">
                      <div className="flex items-center gap-1 py-3">
                        {renderValue(values[selectedPlan])}
                      </div>
                    </div>

                    <div className="hidden md:col-span-3 md:grid md:grid-cols-3">
                      {values.map((value, index) => (
                        <div key={index} className="flex items-center py-3">
                          {renderValue(value)}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
