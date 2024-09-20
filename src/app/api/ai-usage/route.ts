import { getAIUsageData } from "@/app/dashboard/_components/ai-usage";

export async function GET() {
  const usage = await getAIUsageData();
  return Response.json(usage);
}
