import React from "react";

function Part2({ selectedLedger }) {
  return (
    <div>
      <h2>Selected Ledger Information</h2>
      {selectedLedger ? (
        <div>
          <p>Name: {selectedLedger.name}</p>
          <p>Description: {selectedLedger.description}</p>
        </div>
      ) : (
        <p>No ledger selected</p>
      )}
    </div>
  );
}

export default Part2;
