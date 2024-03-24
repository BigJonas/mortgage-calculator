'use client'

import { useState } from "react";

export default function Home() {
    const [principal, setPrincipal] = useState(0.0);
    const [interest, setInterest] = useState(0.0);
    const [loanTerm, setLoanTerm] = useState(0.0);
    // Negative one to represent that it has never been calculated 
    const [monthlyPayment, setMonthlyPayment] = useState(-1.0); 

    const calculate = () => {
        // Double check inputs are not less than 0.0 
        if (principal <= 0.0 || interest <= 0.0 || loanTerm <= 0.0) {
            window.alert("Inputs cannot be equal to or less than 0");
            return;
        }

        let result = principal * (interest * (1 + interest) ** (loanTerm * 12)) / ((1 + interest) ** (loanTerm * 12) -1);
        setMonthlyPayment(result);
    };

    const handlePrincipleChange = (e) => {
       if (e.target.value == '') {
           setPrincipal(0.0);
       } else {
           setPrincipal(e.target.valueAsNumber);
       }
    }

    const handleInterestChange = (e) => {
       if (e.target.value == '') {
           setInterest(0.0);
       } else {
           setInterest(e.target.valueAsNumber);
       }
    }

    const handleLoanTermChange = (e) => {
       if (e.target.value == '') {
           setLoanTerm(0.0);
       } else {
           setLoanTerm(e.target.valueAsNumber);
       }
    }

    return (
        <div>
            <h1 className="m-2">Mortgage Calculator</h1>
            <div>
                <input type="number" placeholder="Principal Amount ($)" className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handlePrincipleChange} />
                <input type="number" placeholder="Interest Rate (%)" className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInterestChange} />
                <input type="number" placeholder="Loan Term (Years)" className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleLoanTermChange} />
            </div>
            <button onClick={calculate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">Calculate</button>
            <div className="m-2">  
                <h2>Monthly Payments</h2>
                <p>{(monthlyPayment == -1.0) ? 'Input fields and press calculate' : '$' + monthlyPayment.toFixed(2)}</p>
            </div>
        </div>
    );
}
