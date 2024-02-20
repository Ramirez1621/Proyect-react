
export const Usuario = () => {
    const num1 = 25;
    const num2 = 50;

    const suma = num1 + num2;
    const resta = num1 - num2;
    const dividendo = num1 % num2;


    return (
    <div className="App">
        <h1>{suma}</h1>
        <h1>{resta}</h1>
        <h1>{dividendo}</h1>
    </div>
    );
};