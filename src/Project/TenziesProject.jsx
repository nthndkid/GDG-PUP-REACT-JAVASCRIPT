import React, { useState } from "react";
import "./TenziesProject.css";
import Die from "./Die";

export default function TenziesProject() {

    const [dice, setDice] = useState(() => generateAllNewDice());

    const gameWon = dice.every(die => die.isClicked) && 
                    dice.every(die => die.value === dice[0].value);

    const gameLost = dice.every(die => die.isClicked) && 
                    !dice.every(die => die.value === dice[0].value);

    function generateAllNewDice () {
        const newDice = [];

        for (let i = 0; i < 10; i++) {
            const rand = { 
                value: Math.ceil(Math.random() * 6), 
                isClicked: false,
                id: i + 1 
            };
            newDice.push(rand);
        }

        return newDice;
    }

    function rollDice() {   
         if (gameWon || gameLost) {
            setDice(generateAllNewDice());
        } else {
            setDice(oldDice => oldDice.map(die =>
            die.isClicked ? die : { ...die, value: Math.ceil(Math.random() * 6) }
            ));
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ? { ...die, isClicked: !die.isClicked } : die
        ));
    }

    const diceElements = dice.map(dieObj => (
        <Die 
            key = {dieObj.id}
            value = {dieObj.value} 
            isClicked = {dieObj.isClicked}
            hold = {hold}
            id = {dieObj.id}
        />
    ));

    return ( 
        <div className="project-container">
            <main>
                <h1 className="title">
                    {gameWon ? "You Won!" : gameLost ? "You Lost!" : "Tenzies"}
                </h1>
                <p className="instructions">
                    Your goal: make all 10 dice show the same number. Click a die to freeze it, then roll again. Strategize, lock in, and win!
                </p>

                <div className="dice-container">
                    {diceElements}
                </div>

                <button className="roll-dice-btn" onClick={rollDice}>
                    {gameWon || gameLost ? "New Game" : "Roll"}
                </button>
            </main>
        </div>
    )
}
