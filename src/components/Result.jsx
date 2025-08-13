import { calculateInvestmentResults, formatter } from "../util/calculationLogics";

const Result = ({ userInputValues }) => {
  const data = calculateInvestmentResults(userInputValues);
  let runningInterest = 0;
  let runningCapital = userInputValues.initialInvestment;
  let isValidYear = Number(userInputValues.duration);

if(isValidYear){

  return (
    
    <div className="overflow-x-auto max-w-4xl mx-auto">
      <table className="w-full bg-white shadow-lg overflow-hidden border border-gray-200 mb-20">
        <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <tr>
            <th className="p-3 text-right uppercase font-semibold">Year</th>
            <th className="p-3 text-right uppercase font-semibold">Investment Value</th>
            <th className="p-3 text-right uppercase font-semibold">Interest Year</th>
            <th className="p-3 text-right uppercase font-semibold">Total Interest</th>
            <th className="p-3 text-right uppercase font-semibold">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            runningInterest += row.interest;
            runningCapital += row.annualInvestment;
            return (
              <tr
                key={row.year}
                className="border-t border-gray-200 hover:bg-indigo-50 transition-colors"
              >
                <td className="text-right p-3 font-['Noto_Sans']">{row.year}</td>
                <td className="text-right p-3 font-['Noto_Sans']">{formatter.format(row.valueEndOfYear)}</td>
                <td className="text-right p-3 font-['Noto_Sans']">{formatter.format(row.interest)}</td>
                <td className="text-right p-3 font-['Noto_Sans']">{formatter.format(runningInterest)}</td>
                <td className="text-right p-3 font-['Noto_Sans']">{formatter.format(runningCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
if(!isValidYear){
    return <p className="text-red-700 bg-red-100 border border-red-300 px-4 py-2 rounded-md text-center font-semibold w-fit mx-auto my-4">
        Enter a valid year — it should be greater than 1
      </p>
}
};

export default Result;
