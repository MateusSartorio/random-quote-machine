// Used to solve some problems with vscode and anchor tags
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// Default React stuff
import React from "react";
import { useState, useEffect } from "react";

// FontAwesome stuff
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import { Button } from "./Button";

export const QuoteBox = (props: any) => {

    const { text, author, color, handleClick } = props;    

    return(
        <div id="quote-box">
            <p id="text" style={{color: `#${color}`}}> <FontAwesomeIcon icon={faQuoteLeft} /> {text}</p>
            <p id="author" style={{color: `#${color}`}}>- {author}</p>

            <div id="buttons">
                <a
                    href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + text + '" ' + author)}`}
                    id="tweet-quote" target="_top"
                    title="Tweet this quote!"
                    style={{backgroundColor: `#${color}`}}
                >
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>

                <Button id="new-quote" text="New quote" handleClick={handleClick} color={color}/>
            </div>
        </div>
    );
}