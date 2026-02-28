"use client";

import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
    words: string[],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDelay = 2000
) {
    const [displayText, setDisplayText] = useState("");

    // All mutable typing-machine state lives in a single ref — no React state,
    // so there are zero stale-closure or race-condition issues.
    const state = useRef({
        wordIndex: 0,
        charIndex: 0,
        isDeleting: false,
        isPaused: false,
    });

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const tick = () => {
            const s = state.current;
            const fullWord = words[s.wordIndex % words.length];

            if (s.isPaused) return; // safety guard; timer won't fire while paused

            if (s.isDeleting) {
                // Remove one character
                s.charIndex -= 1;
                setDisplayText(fullWord.slice(0, s.charIndex));

                if (s.charIndex === 0) {
                    // Finished deleting — move to next word and start typing
                    s.isDeleting = false;
                    s.wordIndex += 1;
                    timer = setTimeout(tick, typingSpeed);
                } else {
                    timer = setTimeout(tick, deletingSpeed);
                }
            } else {
                // Add one character
                s.charIndex += 1;
                setDisplayText(fullWord.slice(0, s.charIndex));

                if (s.charIndex === fullWord.length) {
                    // Finished typing — pause, then start deleting
                    s.isPaused = true;
                    timer = setTimeout(() => {
                        s.isPaused = false;
                        s.isDeleting = true;
                        timer = setTimeout(tick, deletingSpeed);
                    }, pauseDelay);
                } else {
                    timer = setTimeout(tick, typingSpeed);
                }
            }
        };

        // Kick off
        timer = setTimeout(tick, typingSpeed);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return displayText;
}