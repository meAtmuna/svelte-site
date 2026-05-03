<script>
    let name = $state('');
    let address = $state('');
    let phone = $state('');

    async function save_contact() {
        const response = await fetch('/api/add-contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, address, phone })
        });

        await response.json();

        window.location.href = '/';
    }
</script>

<div class="main-container">
    <h2>Add Contact</h2>

    <main class="white-block">
        <div class="contact-save" style="display: flex; flex-direction: column; gap: 0.5rem;">
            <input bind:value={name} placeholder="Name" class="text-input" />
            <input bind:value={address} placeholder="Address" class="text-input"/>
            <input bind:value={phone} placeholder="Phone number" class="text-input"/>
        </div>
        <div style="text-align: center; margin-top: 1rem;">
            <button onclick={save_contact} class="button-style">Save</button>
        </div>
    </main>
</div>