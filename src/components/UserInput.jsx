import InputBox from "./InputBox"

const userInputFields = [
    {
        key: "initialInvestment",
        label: "Initial Investment Amount",
    },
    {
        key: "annualInvestment",
        label: "Annual Investment Amount",
    },
    {
        key: "expectedReturn",
        label: "Expected Return Percentage",
    },
    {
        key: "duration",
        label: "Duration of holding in Years",
    },
];

const UserInput = ({onChangeValue, userInputValues}) => {
    return <section className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 my-10 py-8 px-6 border border-gray-300 bg-gradient-to-br from-blue-50 to-white shadow-md">
        {userInputFields.map((item) => {
            return <InputBox key={item.key} label={item.label} value={userInputValues[item.key]} onChangeInput={(value)=> onChangeValue(item.key,value)} />
        })}
    </section>
}

export default UserInput;