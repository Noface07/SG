export function formatPrice(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount)
}

export function formatWeight(grams: number): string {
    return `${grams}g`;
}

export function calculateOrderTotal(subtotal: number) {
    const makingChargesPercent = 0.05;
    const gstRate = 0.03;

    const makingCharges = subtotal * makingChargesPercent;
    const gstAmount = (subtotal + makingCharges) * gstRate;
    const shippingAmount = 0; // Free shipping

    const total = subtotal + makingCharges + gstAmount + shippingAmount;

    return {
        subtotal,
        makingCharges,
        gstAmount,
        shippingAmount,
        total
    };
}
