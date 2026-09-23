import "@testing-library/jest-dom/vitest";
import { beforeEach, vi } from "vitest";
import { usePathname } from "next/navigation";

// next/navigation hooks need the App Router context, which doesn't exist in
// jsdom. Mock them globally; individual tests override usePathname() to
// simulate being on a given route.
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
  redirect: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  })),
}));

// next/font/google is a build-time transform; stub it so the root layout can
// be imported in tests.
vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans", className: "geist" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono", className: "geist-mono" }),
}));

beforeEach(() => {
  vi.mocked(usePathname).mockReturnValue("/");
});

// jsdom doesn't implement IntersectionObserver / matchMedia; stub them in
// case components (or next/link prefetching) reach for them.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
// @ts-expect-error  attaching test stub
globalThis.IntersectionObserver = IntersectionObserverStub;

if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
