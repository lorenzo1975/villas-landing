"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/analytics";
import { getJoinContent } from "@/lib/content";
import { waitlistSchema, type WaitlistInput } from "@/lib/validations/waitlist";

const joinContent = getJoinContent();

export function WaitlistForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const form = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      role: joinContent.roles[0] ?? "Buyer",
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
        body: JSON.stringify({ type: "waitlist", data: values })
      });
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      track({ name: "waitlist_submitted", payload: { role: values.role } });
      router.push("/thank-you?from=waitlist");
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
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
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
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your focus</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your focus" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {joinContent.roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What brings you to Thailand?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your plans or dream villa."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Optional, up to 500 characters.
              </FormDescription>
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
                  id="waitlist-consent"
                  type="checkbox"
                  checked={!!field.value}
                  onChange={(event) => field.onChange(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
                <Label htmlFor="waitlist-consent" className="text-sm text-muted-foreground">
                  {joinContent.waitlist.privacy}
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
          {form.formState.isSubmitting ? "Sending..." : joinContent.waitlist.cta}
        </Button>
      </form>
    </Form>
  );
}
