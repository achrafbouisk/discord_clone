"use client";

import { useSocket } from "@/components/providers/socketProvider";
import { Badge } from "@/components/ui/badge";

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="bg-yellow-600 text-white border-non">
        Pulling every 1s
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-non">
      Live: Connected
    </Badge>
  );
};

export default SocketIndicator;
