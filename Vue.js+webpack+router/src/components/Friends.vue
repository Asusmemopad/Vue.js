<template>
<div>
  <h1>Friends</h1>
    id: {{id}}
    Age: {{age}} 
    Weight: {{weight}}
  </div>
</template>

<script>
export default {  
  props: [
    'id',
    'age',
    'weight',
  ]
}
</script>