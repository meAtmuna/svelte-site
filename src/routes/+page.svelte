<script lang="ts">
    type contact ={
        name: string;
        address: string;
        phone: string;
    };

    let contacts: Contact[] = [
        {name: 'Test', address: '123 Main St.', phone: '617-000-000' }
    ];
</script>

<main class"white-block">
    {#each contacts as contact}
        <div class="contact-element hover:scale-105 transition-transform">
        </div>
</main>
