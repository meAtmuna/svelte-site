<script lang="ts">
    type Contact ={
        name: string;
        address: string;
        phone: string;
    };

    let contacts = $state<Contact[]>([]);

    import { onMount } from 'svelte';

    async function read_contacts() {
        const response = await fetch('/api/read-contacts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();
        return result.contacts;
    }

    onMount(async () => {
        contacts = await read_contacts();
    });

    async function remove_contact(name: string, address: string, phone: string) {
        const response = await fetch('/api/remove-contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, address, phone })
        });

        const result = await response.json();
        contacts = await read_contacts();
    }
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
                <button onclick={() => remove_contact(contact.name, contact.address, contact.phone)}>
                    Delete
                </button>
            </div>
        </div>
    {:else}
            <p>No contacts found</p>
    {/each}

        <div style="text-align: center; margin-top: 1rem;">
            <a href="/add-contact" class="button-style">Add contact</a>
        </div>
</main>
