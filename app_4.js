const textarea = document.querySelector('#notepad');
        const autosaveToggle = document.querySelector('#autosave-toggle');
        const storageKey = "autosave-data";
        let autosaveInterval;

        
        if (localStorage.getItem(storageKey)) {
            textarea.value = localStorage.getItem(storageKey);
        }

        
        function startAutosave() {
            stopAutosave(); 
            autosaveInterval = setInterval(() => {
                localStorage.setItem(storageKey, textarea.value);
            }, 1000);
        }

        function stopAutosave() {
            clearInterval(autosaveInterval);
        }

        
        autosaveToggle.addEventListener("change", function () {
            if (this.checked) {
                startAutosave();
            } else {
                stopAutosave();
            }
        });