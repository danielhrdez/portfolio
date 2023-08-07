<script lang="ts">
    export let title: string = '';

    let resultText = '';
    let showCursor = true;

    function animateText(text: string) {
        resultText = '';
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                resultText += Math.random().toString(36).slice(2, 3);
                setTimeout(() => {
                    resultText = resultText.slice(0, resultText.length - 1);
                    resultText += text[i];
                }, 10);
            }, 75 * i);
        }
    }

    $: animateText(title);
    
    setInterval(() => {
        showCursor = !showCursor;
    }, 750);
</script>

<div class="flex flex-row gap-2">
    <h1 class="text-3xl font-bold font-mono">
        {resultText}
    </h1>
    <div class="bg-neutral-500 h-[1] w-[1px]" style="opacity: {+showCursor}" />
</div>
