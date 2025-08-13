export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
        });
    }

    return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
