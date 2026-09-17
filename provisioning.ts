import { ENV } from "./_core/env";

type ProvisionRequest = { purchaseId: number; orderId: number; productId: number; productName: string };
type ProvisionResponse = { instanceUrl?: string; adminUrl?: string; sourceReady?: boolean; documentationReady?: boolean; licenseReady?: boolean };

export async function requestProvisioning(input: ProvisionRequest): Promise<ProvisionResponse | null> {
  if (!ENV.provisioningApiUrl || !ENV.provisioningApiKey) return null;
  const response = await fetch(`${ENV.provisioningApiUrl.replace(/\/$/, "")}/provision`, { method: "POST", headers: { Authorization: `Bearer ${ENV.provisioningApiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(input) });
  const payload = await response.json() as ProvisionResponse & { error?: string };
  if (!response.ok) throw new Error(payload.error ?? "Provisioning provider rejected the request");
  return payload;
}
