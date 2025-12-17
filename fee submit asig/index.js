    // Simulate the steps with Promises and random delays (1-2 seconds)
    function submitForm() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Optional: Simulate occasional error (uncomment to test)
                // if (Math.random() > 0.8) {
                //     reject("Form submission failed");
                // } else {
                    resolve("Form Submitted Successfully");
                // }
            }, Math.random() * 1000 + 1000); // 1-2 seconds
        });
    }

    function verifyFee() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Optional: Simulate occasional error (uncomment to test)
                // if (Math.random() > 0.8) {
                //     reject("Fee verification failed");
                // } else {
                    resolve("Fee Verified");
                // }
            }, Math.random() * 1000 + 1000); // 1-2 seconds
        });
    }

    function confirmAdmission() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Optional: Simulate occasional error (uncomment to test)
                // if (Math.random() > 0.8) {
                //     reject("Admission confirmation failed");
                // } else {
                    resolve("Admission Confirmed");
                // }
            }, Math.random() * 1000 + 1000); // 1-2 seconds
        });
    }

    // Version 1: Using Promise chaining
    function applyAdmission() {
        const status = document.getElementById('status');
        status.innerHTML = "Processing... (Loading)"; // Loading message

        submitForm()
            .then(msg => {
                status.innerHTML += "<br>" + msg;
                return verifyFee();
            })
            .then(msg => {
                status.innerHTML += "<br>" + msg;
                return confirmAdmission();
            })
            .then(msg => {
                status.innerHTML += "<br>" + msg;
            })
            .catch(err => {
                status.innerHTML += "<br>Error: " + err;
            });
    }