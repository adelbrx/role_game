// game.test.js
import { describe, it, expect, beforeEach } from "vitest";
import {
  applyHealthEffect,
  incrementKills,
  checkGameOver,
  checkWin,
} from "../utils/gameLogic"; // Adjust the import path accordingly

describe("Game Logic Tests", () => {
  let character;

  // Setup a fresh character object before each test
  beforeEach(() => {
    character = {
      name: "Warrior",
      health: 100,
      kills: 0,
      inventory: ["Sword", "Shield"],
    };
  });

  // Test: Apply health effect
  it("should apply health effect correctly", () => {
    const updatedCharacter = applyHealthEffect(character, -20);
    expect(updatedCharacter.health).toBe(80); // Health should decrease by 20
  });

  // Test: Increment kills
  it("should increment kills correctly", () => {
    const updatedCharacter = incrementKills(character);
    expect(updatedCharacter.kills).toBe(1); // Kills should increase by 1
  });

  // Test: Check game over when health is 0 or below
  it("should detect game over when health is 0 or below", () => {
    const updatedCharacter = applyHealthEffect(character, -100); // Health goes to 0
    expect(checkGameOver(updatedCharacter)).toBe(true); // Game should be over
  });

  // Test: Check win after 3 kills
  it("should detect win after 3 kills", () => {
    let updatedCharacter = incrementKills(character); // 1 kill
    updatedCharacter = incrementKills(updatedCharacter); // 2 kills
    updatedCharacter = incrementKills(updatedCharacter); // 3 kills

    expect(checkWin(updatedCharacter)).toBe(true); // Should win after 3 kills
  });

  // Test: Should not win before 3 kills
  it("should not win before 3 kills", () => {
    let updatedCharacter = incrementKills(character); // 1 kill
    expect(checkWin(updatedCharacter)).toBe(false); // Should not win before 3 kills
  });
});
