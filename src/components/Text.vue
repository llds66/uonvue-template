<script setup lang="ts">
import useMouse from '@CP/useMouse'
import getText from '@U/getText'

const { x, y } = useMouse()
</script>

<template>
  <div class="font-mono relative">
    <span class="text-3xl text-stone-700">
      {{ getText() }}
    </span>
    <span class="text-sm text-stone-400 right--16 absolute">
      {{ x }},{{ y }}
    </span>
  </div>
</template>
