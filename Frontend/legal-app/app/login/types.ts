import * as z from "zod";
import { signInSchema } from "./schemas";

export type TSignInForm = z.infer<typeof signInSchema>;
