
function getValue() {
        var inputvalue = document.getElementById('myInput').value;
        console.log("value",inputvalue);
         let text = numberToWords(inputvalue)
         console.log("inwords--",numberToWords(inputvalue));
         const outputElement = document.getElementById('output');
    
    
         outputElement.textContent = text;
         
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(inputvalue);
        utterThis.lang = 'en-US';
        synth.speak(utterThis);

        }

        function numberToWords(num) {
            const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
            const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
            const scales = ["", "Thousand", "Lakh", "Crore"];
            
            if (num === 0) {
                return "Zero";
            }
            
            let result = "";
            let scaleIndex = 0;
        
            // Process last 3 digits first (ones, tens, hundreds)
            if (num % 1000 > 0) {
                result = helper(num % 1000) + (scales[scaleIndex] ? " " + scales[scaleIndex] + " " : "") + result;
                num = Math.floor(num / 1000);
            }
            scaleIndex++;
        
            // Process next groups of 2 digits (thousands, lakhs, crores)
            while (num > 0) {
                if (num % 100 > 0) {
                    result = helper(num % 100) + (scales[scaleIndex] ? " " + scales[scaleIndex] + " " : "") + result;
                }
                num = Math.floor(num / 100);
                scaleIndex++;
            }
        
            return result.trim();
        }
        
        // Helper function to handle numbers less than 1000
        function helper(num) {
            const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
            const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
            
            let word = "";
        
            if (num >= 100) {
                word += units[Math.floor(num / 100)] + " Hundred ";
                num %= 100;
            }
        
            if (num >= 20) {
                word += tens[Math.floor(num / 10)] + " ";
                num %= 10;
            }
        
            if (num >= 10) {
                word += teens[num - 10] + " ";
            } else if (num > 0) {
                word += units[num] + " ";
            }
        
            return word.trim();
        }
        
        
        


    


