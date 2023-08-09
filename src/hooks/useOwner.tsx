import React, { useState } from 'react';

export default function useOwner() {
    const [owner, setOwner] = useState({});
    const updateOwnerField = (key: string, value: string) => {
        setOwner({ ...owner, [key]: value });
    };
    return {
        owner,
        updateOwnerField,
    };
}
