import React, { useState } from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import { hierarchicalData } from "./treeData";

function HierarchicalComponent() {
  const [selectedLedger, setSelectedLedger] = useState(null);

  const handleLedgerSelection = (ledger) => {
    setSelectedLedger(ledger);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div style={{ flex: "1 1 25%" }}>
        <Part1
          hierarchicalData={hierarchicalData}
          onLedgerSelect={handleLedgerSelection}
        />
      </div>
      <div style={{ flex: "1 1 75%" }}>
        <Part2 selectedLedger={selectedLedger} />
      </div>
    </div>
  );
}

export default HierarchicalComponent;
