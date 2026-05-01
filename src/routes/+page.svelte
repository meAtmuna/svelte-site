<script lang="ts">
    type Contact ={
        name: string;
        address: string;
        phone: string;
    };

    let contacts: Contact[] = [
        {name: 'Test', address: '123 Main St.', phone: '617-000-000' }
    ];
</script>

<main class="white-block">
    {#each contacts as contact}
        <div class="contact-element">
            <div>
                <p>{contact.name}</p>
                <p>{contact.address}</p>
            </div>
            <div style="text-align: right;">
                <p>{contact.phone}</p>
            </div>
        </div>
    {:else}
            <p>No contacts found</p>
    {/each}

        <div style="text-align: center; margin-top: 1rem;">
            <a href="/add-contact" class="button-style">Add contact</a>
        </div>
</main>
