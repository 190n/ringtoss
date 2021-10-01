/// <reference types="svelte" />
/// <reference types="vite/client" />

type GenericEvent<V extends Event, L extends Element> = V & { currentTarget: E };
