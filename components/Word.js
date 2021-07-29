import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
    return (
        <>
            <div className="word">
                {selectedWord.split('').map((letter) => {
                    return (
                        <span className="letter">
                            {correctLetters.includes(letter) ? letter : ''}
                        </span>
                    )
                }
                )}
            </div>
        </ >
    );
}

export default Word;
