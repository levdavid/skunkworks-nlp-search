import React, { useState } from 'react';
import Button from "@leafygreen-ui/button";
import Icon from "@leafygreen-ui/icon";
import TextInput from "@leafygreen-ui/text-input";
import Card from "@leafygreen-ui/card";

const ImageSearchWidget = () => {
    const [searchState, setSearchState] = useState("");
    const [searchResults, setSearchResults] = useState(null)

    const searchText = (text) => {
        console.log(text);
        fetch(' https://d2i616j00m.execute-api.us-east-1.amazonaws.com/live/search/'+text, {mode: 'cors'})
        .then(function(response) {
            setSearchResults(response.text());
            console.log(searchResults);
        })
        .then(function(text) {
            console.log('Request successful', text);
        })
        .catch(function(error) {
            console.log('Request failed', error)
        });
    }

    return (
        <div>
        <Card
            as="div"
            contentStyle="none"
            darkMode={false}
        >
            <TextInput
                baseFontSize={13}
                darkMode={false}
                description=""
                disabled={false}
                errorMessage=""
                label=""
                optional={false}
                placeholder="Search"
                sizeVariant="default"
                state="none"
                onChange={(e) => setSearchState(e.target.value)}
            />
            <Button as="button" type="submit" baseFontSize={13} darkMode={true} variant="primary" leftGlyph={<Icon glyph="MagnifyingGlass"/>} onClick={() => searchText(searchState)}>Search</Button>
        </Card>
        {!!searchResults &&
        <Card>
            <h2>Here's what we found!</h2>
            <img src="./declaration.png" className="img-result"></img>
        </Card>}
        </div>
    );
}

export default ImageSearchWidget;