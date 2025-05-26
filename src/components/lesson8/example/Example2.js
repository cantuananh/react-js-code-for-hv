import { useEffect } from "react";

function Example2() {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Tick...");
        }, 2000);

        console.log("Timer da duoc thiet lap");

        return() => {
            clearTimeout(timer);
            console.log("Clean useEffect...");
        };
    }, []);
}

export default Example2;