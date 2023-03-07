import Button from "@leafygreen-ui/button";
import Icon from "@leafygreen-ui/icon";

import React from 'react';

const ImageSearchWidget = () => {
    return (
        <>
            <h1>Hello world</h1>
            <input id="imageInput" type="file" accept="image/*, application/pdf" />
            <Button as="button" type="submit" baseFontSize={13} darkMode={true} variant="primary" leftGlyph={<Icon glyph="Upload" />}>Upload</Button>
        </>
    );
}

export default ImageSearchWidget;