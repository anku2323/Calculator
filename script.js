        // Function display
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function fact() {
            var num = parseInt(display.value);
            if (num < 0) {
                display.value = 'Error';
                return;
            }
            var factorial = 1;
            for (var i = 1; i <= num; i++) {
                factorial *= i;
            }
            display.value = factorial;
        }

        function squareRoot() {
            display.value = Math.sqrt(display.value);
        }
        
        function per() {
            var num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = num / 100;
            }
        }

        // Function  calculate the result
        function calculate() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
        function clearDisplay() {
            document.getElementById('display').value = '';
        }
        function deleteLast() {
            var display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }