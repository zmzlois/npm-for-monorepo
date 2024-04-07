"use client";

import { z } from "zod";

export const searchSchema = z.object({
  content: z.string().max(50),
});

export const argSchema = z.object({
  name: z.string().max(50),
  flag: z.string().max(50),
  label: z.string().max(50),
});
