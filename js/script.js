 var counterVal = 0;

        function incrementClick() {
            updateDisplay(++counterVal);
        }
        
        function decrementCounter() {
            
            updateDisplay(--counterVal);
        }
        
        function updateDisplay(val) {
            document.getElementById("counter-label").innerHTML = val;
        }
