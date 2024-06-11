
document.addEventListener('DOMContentLoaded', function() {
    const currencySwitcher = document.getElementById('currency');
    currencySwitcher.addEventListener('change', function() {
        alert(`Currency changed to ${this.value}`);
    });

    // Modal functionality
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    // Open the modal after 2 seconds
    setTimeout(() => {
        modal.style.display = "block";
    }, 2000);

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});