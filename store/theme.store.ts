import { createStore } from "zustand/vanilla";

// create the store (vanilla Zustand version)
const themeStore = createStore((set,get) => ({
	theme: "light", // initial state

	// ✅ 'setTheme' is an updater function
	// it calls Zustand's internal 'set' function
	setTheme: (theme) => set({ theme }), // <— this updates the 'theme' property
	
}));

export default themeStore  ;

