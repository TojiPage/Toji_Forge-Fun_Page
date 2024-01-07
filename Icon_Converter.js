document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the Main Page button
    const mainPageButton = document.getElementById('mainPageButton');
    mainPageButton.addEventListener('click', showConfirmationDialog);
});

function showConfirmationDialog() {
    // Create the confirmation dialog
    const confirmationDialog = document.createElement('div');
    confirmationDialog.classList.add('confirmation-dialog');

    // Add message and buttons to the dialog
    confirmationDialog.innerHTML = `
        <p>Do you want to go to the main page?</p>
        <div class="confirmation-buttons">
            <button id="confirmYes">Yes</button>
            <button id="confirmNo">No</button>
        </div>
    `;

    // Append the dialog to the body
    document.body.appendChild(confirmationDialog);

    // Add event listeners for Yes and No buttons
    const confirmYesButton = document.getElementById('confirmYes');
    const confirmNoButton = document.getElementById('confirmNo');

    confirmYesButton.addEventListener('click', goToMainPage);
    confirmNoButton.addEventListener('click', closeConfirmationDialog);
}

function goToMainPage() {
    // Redirect to the main page (update the href accordingly)
    window.location.href = 'index.html';
}

function closeConfirmationDialog() {
    // Remove the confirmation dialog
    const confirmationDialog = document.querySelector('.confirmation-dialog');
    if (confirmationDialog) {
        confirmationDialog.remove();
    }
}
