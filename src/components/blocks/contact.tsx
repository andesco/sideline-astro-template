import { Facebook, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-16 md:py-28 lg:py-32">
      <div className="container max-w-4xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact us
        </h1>
        <p className="text-muted-foreground mt-4 text-center">
          Hopefully this form gets through our spam filters.
        </p>

        <div className="mt-8 flex max-md:flex-col md:mt-12 md:divide-x lg:mt-20">
          <div className="space-y-10 md:pe-14">
            <div>
              <h2 className="text-lg font-semibold">Corporate office</h2>
              <p className="text-muted-foreground mt-3 text-lg font-medium tracking-tight">
                1 Carlsberg Close
                <br />
                1260 Hillview, Australia
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Email us</h2>
              <div className="mt-3 space-y-2">
                <div>
                  <p>Careers</p>
                  <a
                    href="mailto:careers@streamline.com"
                    className="text-muted-foreground mt-3 text-lg font-medium tracking-tight"
                  >
                    careers@streamline.com
                  </a>
                </div>
                <div>
                  <p>Press</p>
                  <a
                    href="mailto:press@streamline.com"
                    className="text-muted-foreground mt-3 text-lg font-medium tracking-tight"
                  >
                    press@streamline.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Follow us</h2>
              <div className="mt-3 flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="size-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="size-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="size-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 md:ps-8">
            <h2 className="text-lg font-semibold">Inquiries</h2>
            <form className="mt-5 space-y-5">
              <div className="flex flex-col gap-2">
                <Label>Full name</Label>
                <Input type="text" placeholder="First and last name" name="fullName" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Work email address</Label>
                <Input type="email" placeholder="me@company.com" name="email" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  Company name <span className="text-muted-foreground/60">(optional)</span>
                </Label>
                <Input type="text" placeholder="Company name" name="company" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  Number of employees <span className="text-muted-foreground/60">(optional)</span>
                </Label>
                <Input type="text" placeholder="e.g. 10-50" name="employees" />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Your message</Label>
                <Textarea placeholder="Write your message" name="message" className="min-h-[120px]" />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
