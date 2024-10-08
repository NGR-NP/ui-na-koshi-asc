import LRUCache from "@/lib/LRUCache";

import { CachedData } from "@/action/searchInputAction";

describe("LRUCache", () => {
  let cache: LRUCache<string, CachedData>;

  beforeEach(() => {
    cache = new LRUCache<string, CachedData>(2); // Cache size of 2 for testing
  });

  it("should return undefined for non-cached values", () => {
    expect(cache.get("Everest")).toBeUndefined();
  });

  it("should store and retrieve cached values", () => {
    const cachedValue: CachedData = {
      trip: [
        {
          id: BigInt(1),
          title: "Everest Base Camp",
          slug: "everest-base-camp",
        },
      ],
      blog: [],
    };
    cache.set("Everest", cachedValue);
    const result = cache.get("Everest");
    expect(result).toEqual(cachedValue);
  });

  it("should evict the least recently used item when the cache is full", () => {
    // Set the first item
    cache.set("Everest", {
      trip: [
        {
          id: BigInt(1),
          title: "Everest Base Camp",
          slug: "everest-base-camp",
        },
      ],
      blog: [],
    });

    // Set the second item
    cache.set("ABC", {
      trip: [
        {
          id: BigInt(2),
          title: "Annapurna Base Camp",
          slug: "annapurna-base-camp",
        },
      ],
      blog: [],
    });

    // Access "Everest" to make it the most recently used
    cache.get("Everest");

    // Now add a third item, which should cause "ABC" to be evicted
    cache.set("Mardi", {
      trip: [
        {
          id: BigInt(3),
          title: "Mardi Himal Trek",
          slug: "mardi-himal-trek",
        },
      ],
      blog: [],
    });

    // Log the cache state for debugging
    console.log(
      "Cache state after adding Mardi:",
      Array.from(cache["cache"].entries())
    );

    expect(cache.get("ABC")).toBeUndefined(); // ABC should be evicted now
    expect(cache.get("Everest")).toBeDefined(); // Everest should still be available
  });

  it("should clear the cache", () => {
    cache.set("Everest", {
      trip: [
        {
          id: BigInt(1),
          title: "Everest Base Camp",
          slug: "everest-base-camp",
        },
      ],
      blog: [],
    });

    cache.clear();

    expect(cache.get("Everest")).toBeUndefined(); // Everest should be cleared
  });

  it("should return the correct cache size", () => {
    cache.set("Everest", {
      trip: [
        {
          id: BigInt(1),
          title: "Everest Base Camp",
          slug: "everest-base-camp",
        },
      ],
      blog: [],
    });

    cache.set("ABC", {
      trip: [
        {
          id: BigInt(2),
          title: "Annapurna Base Camp",
          slug: "annapurna-base-camp",
        },
      ],
      blog: [],
    });

    expect(cache.size()).toBe(2); // Size should be 2
  });
});
