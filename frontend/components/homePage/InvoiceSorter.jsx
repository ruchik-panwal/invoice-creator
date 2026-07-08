function sortInvoice(oldInvoice, sortObj = { type: "invNum", status: true }) {
  if (!oldInvoice || oldInvoice.length === 0) return [];

  const newInvoice = [...oldInvoice];
  
  const modifier = sortObj.status ? 1 : -1;

  newInvoice.sort((a, b) => {
    let valA, valB;

    switch (sortObj.type) {
      case "invNum":
        valA = a.id || "";
        valB = b.id || "";
        return valA.localeCompare(valB) * modifier;

      case "status":
        valA = a.status ? 1 : 0;
        valB = b.status ? 1 : 0;
        return (valA - valB) * modifier;

      case "name":
        valA = a.name || a.customerId || "";
        valB = b.name || b.customerId || "";
        return valA.localeCompare(valB) * modifier;

      case "date":
        valA = new Date(a.dateCreated).getTime();
        valB = new Date(b.dateCreated).getTime();
        return (valA - valB) * modifier;

      case "due":
        valA = new Date(a.dateDue).getTime();
        valB = new Date(b.dateDue).getTime();
        return (valA - valB) * modifier;

      case "amount":
        valA = a.totalAmount || 0;
        valB = b.totalAmount || 0;
        return (valA - valB) * modifier;

      default:
        valA = a.id || "";
        valB = b.id || "";
        return valA.localeCompare(valB) * modifier;
    }
  });

  return newInvoice;
}

export default sortInvoice;