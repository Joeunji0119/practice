import { createRoot } from "react-dom/client";
import Router from "./Router";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(<Router />);
