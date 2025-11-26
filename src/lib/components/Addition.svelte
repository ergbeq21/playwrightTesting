<script>

    import { adder } from '$lib/calculator.js';

    let number1 = $state();
    let number2 = $state();

    let result = $state();

    function calculate(){
        let num1 = parseFloat(number1) || 0;
        let num2 = parseFloat(number2) || 0;
        result = adder((num1),(num2));
    }

</script>


<section>
    <input type="text" id="number1" bind:value={number1}>
    <input type="text" id="number2" bind:value={number2}>

    <button id="addButton" onclick={calculate}>Add two numbers</button>
    <p id="addResult">Result: {result}</p>
</section>