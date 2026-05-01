<script>
    let name = '';
    let address = '';
    let phone = '';

    function save_contact() {
        console.log(name, address, phone);
    }
</script>

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