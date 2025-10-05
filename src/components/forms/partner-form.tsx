"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/analytics";
import { getJoinContent } from "@/lib/content";
import { partnerSchema, type PartnerInput } from "@/lib/validations/partner";

const joinContent = getJoinContent();

export function PartnerForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const form = useForm<PartnerInput>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
      phone: "",
      region: "",
      timeline: "",
      message: "",
      consent: true
    }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setServerError(null);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "partner", data: values })
      });
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      track({ name: "partner_interest_submitted", payload: { region: values.region } });
      router.push("/thank-you?from=partner");
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Unable to submit right now."
      );
    }
  });

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary contact</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation</FormLabel>
              <FormControl>
                <Input placeholder="Company or project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input placeholder="Your title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone or WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="Optional contact number" {...field} />
                </FormControl>
                <FormDescription>Include country code for international numbers.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Focus region</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Phuket, Samui" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Launch timeline</FormLabel>
              <FormControl>
                <Input placeholder="When would you like to go live?" {...field} />
              </FormControl>
              <FormDescription>Optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Share more context</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your villa, pipeline, or partnership goals." {...field} />
              </FormControl>
              <FormDescription>Optional, up to 800 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/40 p-4">
                <input
                  id="partner-consent"
                  type="checkbox"
                  checked={!!field.value}
                  onChange={(event) => field.onChange(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
                <Label htmlFor="partner-consent" className="text-sm text-muted-foreground">
                  We will contact you within one business day. Checking this box confirms you agree to receive an onboarding email from Villas.co.th.
                </Label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {serverError ? (
          <p className="text-sm font-semibold text-destructive">{serverError}</p>
        ) : null}
        <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : joinContent.partner.cta}
        </Button>
      </form>
    </Form>
  );
}
