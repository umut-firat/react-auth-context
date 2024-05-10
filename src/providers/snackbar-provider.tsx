import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  return <NotistackSnackbarProvider>{children}</NotistackSnackbarProvider>;
}
