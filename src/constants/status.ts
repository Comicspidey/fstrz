export const ACTIVITY_STATUSES = [
  "COMPLETED",
  "CREATED",
  "UPDATED",
  "IN_PROGRESS",
  "FAILED",
] as const;

export type ActivityStatus = (typeof ACTIVITY_STATUSES)[number];

export const statusToVariant: Record<ActivityStatus, "success" | "warning" | "error"> = {
  COMPLETED: "success",
  CREATED: "success",
  UPDATED: "success",
  IN_PROGRESS: "warning",
  FAILED: "error",
};

export const statusLabels: Record<ActivityStatus, string> = {
  COMPLETED: "Completed",
  CREATED: "Created",
  UPDATED: "Updated",
  IN_PROGRESS: "In Progress",
  FAILED: "Failed",
};
