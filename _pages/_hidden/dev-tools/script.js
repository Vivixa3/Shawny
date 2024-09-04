        // Set the current date and time for both paragraphs
        document.getElementById('ShawnyTimeAndDate').textContent = new Date().toLocaleString();
        document.getElementById('RYRYTimeAndDate').textContent = new Date().toLocaleString();

        // Function to copy text to clipboard
        function copyText(elementId) {
            const text = document.getElementById(elementId).textContent;
            const tempTextarea = document.createElement("textarea");
            tempTextarea.value = text.trim(); // Trim to remove any unwanted spaces
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand("copy");
            document.body.removeChild(tempTextarea);
        }

        function reloadPage() {
            location.reload();
        }

        // Add click event listeners to the paragraphs
        document.getElementById('ShawnyCommitParagraph').addEventListener('click', function() {
            copyText('ShawnyCommitParagraph');
            location.reload();
        });

        document.getElementById('RYRYCommitParagraph').addEventListener('click', function() {
            copyText('RYRYCommitParagraph');
            location.reload();
        });