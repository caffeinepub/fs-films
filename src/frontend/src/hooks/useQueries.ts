import { useMutation } from "@tanstack/react-query";
import type { EventType } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      eventType,
      message,
    }: {
      name: string;
      phone: string;
      email: string;
      eventType: EventType;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.submitInquiry(
        name,
        phone,
        email,
        eventType,
        message,
      );
      if (!result) throw new Error("Submission failed");
      return result;
    },
  });
}
