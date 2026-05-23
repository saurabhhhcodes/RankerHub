import { describe, it, expect } from "vitest";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  slideIn,
  hoverScale,
  hoverButton,
} from "./motion";

describe("motion utilities", () => {
  describe("fadeUp", () => {
    it("should return the correct initial values and transition structure with defaults", () => {
      const result = fadeUp();
      expect(result.hidden).toEqual({ opacity: 0, y: 20 });
      expect(result.visible.opacity).toBe(1);
      expect(result.visible.y).toBe(0);
      expect(result.visible.transition.delay).toBe(0);
      expect(result.visible.transition.duration).toBe(0.5);
    });

    it("should accept custom delay and duration values", () => {
      const result = fadeUp(0.8, 1.2);
      expect(result.visible.transition.delay).toBe(0.8);
      expect(result.visible.transition.duration).toBe(1.2);
    });
  });

  describe("fadeIn", () => {
    it("should return correct configuration for default arguments", () => {
      const result = fadeIn();
      expect(result.hidden.y).toBe(100);
      expect(result.hidden.x).toBe(0);
      expect(result.hidden.opacity).toBe(0);
      expect(result.visible.transition.type).toBe("tween");
    });

    it("should handle custom directions", () => {
      const leftResult = fadeIn("left");
      expect(leftResult.hidden.x).toBe(100);
      expect(leftResult.hidden.y).toBe(0);

      const rightResult = fadeIn("right");
      expect(rightResult.hidden.x).toBe(-100);
      expect(rightResult.hidden.y).toBe(0);

      const downResult = fadeIn("down");
      expect(downResult.hidden.x).toBe(0);
      expect(downResult.hidden.y).toBe(-100);
    });
  });

  describe("staggerContainer", () => {
    it("should structure transition configurations with defaults", () => {
      const result = staggerContainer();
      expect(result.hidden).toEqual({});
      expect(result.visible.transition.staggerChildren).toBe(0.1);
      expect(result.visible.transition.delayChildren).toBe(0);
    });
  });

  describe("slideIn", () => {
    it("should return correct structure for direction left", () => {
      const result = slideIn("left", "spring", 0.1, 0.5);
      expect(result.hidden.x).toBe("-100%");
      expect(result.hidden.y).toBe(0);
      expect(result.visible.transition.type).toBe("spring");
      expect(result.visible.transition.delay).toBe(0.1);
      expect(result.visible.transition.duration).toBe(0.5);
    });
  });

  describe("hoverScale", () => {
    it("should have correct scale values for hover and tap states", () => {
      expect(hoverScale.hover.scale).toBe(1.02);
      expect(hoverScale.tap.scale).toBe(0.98);
    });
  });

  describe("hoverButton", () => {
    it("should have correct transition properties and values", () => {
      expect(hoverButton.hover.scale).toBe(1.05);
      expect(hoverButton.tap.scale).toBe(0.95);
    });
  });
});
