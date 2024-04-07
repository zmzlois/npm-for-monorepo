"use client"

import { z } from "zod"

export const formSchema = z.object({
    content: z.string().max(50),
})
