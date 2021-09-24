import { useRef, useEffect } from 'react';

export const UseFocus = () => {
    let ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return ref;
};
