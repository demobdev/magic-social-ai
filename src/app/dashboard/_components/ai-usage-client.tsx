"use client";

import { useEffect, useState } from 'react';
import AIChart from "./ai-chart";

export function AIUsageClient() {
  const [data, setData] = useState({ availableCredit: 0, totalUsage: 0 });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/ai-usage');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <AIChart availableCredit={data.availableCredit} totalUsage={data.totalUsage} />
    </div>
  );
}
