function greetings({ lang, children }) {
    let greeting;

    if (lang === "de") {
        greeting = "Hallo";
    } else if (lang === "fr") {
        greeting = "Bonjour";
    } else if (lang === "pt") {
        greeting = "Ola";
    } else if (lang === "es") {
        greeting = "Hola";
    } else {
        greeting = "Hello";
    }

    return (
        <p>
            {greeting} {children}
        </p>
    );
    }

    export default greetings;