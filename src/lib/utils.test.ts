import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("merges unique class names", () => {
    expect(cn("text-base", "text-lg")).toBe("text-lg");
  });

  it("handles conditional falsy values", () => {
    expect(cn("px-4", false && "py-2", undefined, "bg-black")).toBe("px-4 bg-black");
  });
});
