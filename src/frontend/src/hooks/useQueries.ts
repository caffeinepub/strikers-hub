import { useQuery } from "@tanstack/react-query";
import type { Striker } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllStrikers() {
  const { actor, isFetching } = useActor();
  return useQuery<Striker[]>({
    queryKey: ["strikers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllStrikers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTopStrikers(limit: number) {
  const { actor, isFetching } = useActor();
  return useQuery<Striker[]>({
    queryKey: ["topStrikers", limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTopStrikers(BigInt(limit));
    },
    enabled: !!actor && !isFetching,
  });
}
