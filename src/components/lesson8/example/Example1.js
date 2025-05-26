import { useEffect, useState } from "react";

function Example1() {
    const [count, setCount] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
            console.log(count);
        }, [count]);

        return () => clearInterval(timer);
    });

}

export default Example1;