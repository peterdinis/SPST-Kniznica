import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BACKEND_URL: z.string().min(1),
    NEXT_PUBLIC_EDUPAGE_URL: z.string().min(1)
  },
  runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL:
      process.env.NEXT_PUBLIC_BACKEND_URL,
      NEXT_PUBLIC_EDUPAGE_URL: process.env.NEXT_PUBLIC_EDUPAGE_URL
  },
});