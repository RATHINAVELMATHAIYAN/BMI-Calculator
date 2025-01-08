import React, { useState } from "react";

const BmiCalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBmi = () => {
        const heightInMeters = height / 100; // Convert height to meters
        if (heightInMeters <= 0 || weight <= 0) {
            alert("Please enter valid height and weight values.");
            return;
        }

        const calculatedBmi = weight / (heightInMeters * heightInMeters);
        setBmi(calculatedBmi.toFixed(2)); // Set BMI value with 2 decimal precision

        // Determine BMI category
        if (calculatedBmi < 18.5) {
            setCategory("Underweight");
        } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
            setCategory("Normal weight");
        } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
            setCategory("Overweight");
        } else {
            setCategory("Obesity");
        }
    };

    const clearInputs = () => {
        setHeight("");
        setWeight("");
        setBmi(null);
        setCategory("");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
            <h1>BMI Calculator</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter height in cm"
                    style={{ marginRight: "10px", padding: "10px", width: "400px", fontSize: "20px", border: "3px solid black", fontWeight: "bold" }}
                />
                <br /> <br />
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight in kg"
                    style={{ padding: "10px", width: "400px", fontSize: "20px", border: "3px solid black", fontWeight: "bold" }}
                />
            </div>
            <br />
            <button
                onClick={calculateBmi}
                style={{ padding: "10px 20px", marginRight: "10px", cursor: "pointer", fontSize: "20px", backgroundColor: "blue", textAlign: "center", color: "whitesmoke", border: "3px solid " }}
            >
                Calculate BMI
            </button>
            <button
                onClick={clearInputs}
                style={{ padding: "10px 20px", cursor: "pointer", fontSize: "20px", backgroundColor: "green", textAlign: "center", color: "whitesmoke", border: "3px solid " }}
            >
                Clear
            </button>
            {bmi && (
                <div style={{ marginTop: "20px", color: "black" }}>
                    <h2>Your BMI: {bmi}</h2>
                    <h3>Category: {category}</h3>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;
