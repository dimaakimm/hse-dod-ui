import { PropsWithChildren } from "react";
import { PublicLayout } from "@/screens/PublicLayout";

export default async function Public({ children }: PropsWithChildren) {
  return <PublicLayout>{children}</PublicLayout>;
}
