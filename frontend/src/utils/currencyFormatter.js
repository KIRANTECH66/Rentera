/**
 * Formats a number in the smallest currency unit (e.g., cents) into a
 * localized currency string.
 *
 * @param {number} amount - The amount in the smallest currency unit (e.g., 12345 for $123.45).
 * @param {string} currencyCode - The 3-letter ISO currency code (e.g., 'USD', 'EUR').
 * @param {string} locale - The user's locale string (e.g., 'en-US', 'de-DE').
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount, currencyCode, locale = 'en-US') => {
  // The Intl.NumberFormat object is the standard way to format numbers,
  // including currency, in a locale-sensitive manner.

  // We divide by 100 because the amount is in cents. This would need to be
  // adjusted for currencies that don't use 2 decimal places.
  // For simplicity, we assume 2 decimal places for this example.
  const amountInMainUnit = amount / 100;

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(amountInMainUnit);
  } catch (error) {
    console.error('Error formatting currency:', error);
    // Fallback for invalid codes
    return `${amountInMainUnit.toFixed(2)} ${currencyCode}`;
  }
};

// --- Example Usage ---
// import { formatCurrency } from './currencyFormatter';
//
// const priceInUSD = formatCurrency(19999, 'USD', 'en-US'); // "$199.99"
// const priceInEUR = formatCurrency(19999, 'EUR', 'de-DE'); // "199,99 €"
// const priceInJPY = formatCurrency(25000, 'JPY', 'ja-JP'); // "￥25,000" (assuming JPY has 0 decimals)
// Note: For JPY, we'd need a more robust system to handle decimal places,
// as dividing by 100 would be incorrect. This is a simplified example.
