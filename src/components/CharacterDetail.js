import React from "react";



const CharacterDetail = ({character}) => {
    if (!character) return null;
    return(
        <dl>
            <dt>Name:</dt>
            <dd>{character.name}</dd>
            <dt>Eye Colour:</dt>
            <dd>{character.eyeColour}</dd>
            <dt>Age:</dt>
            <dd>{2019 - character.yearOfBirth}</dd>
            <dt>Wand Length:</dt>
            <dd>{character.wand.length} </dd>
        </dl>
    )








}





export default CharacterDetail