<template>
  <div>
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1" size="sm">
        <b-button>&laquo;</b-button>
        <b-button>&lsaquo;</b-button>
      </b-button-group>
      <b-button-group class="mx-1" size="sm">
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>
        <b-button>Redo</b-button>
      </b-button-group>
      <b-button-group class="mx-1" size="sm">
        <b-button>&rsaquo;</b-button>
        <b-button>&raquo;</b-button>
      </b-button-group>
    </b-button-toolbar>
    {{ environnement}}
  </div>
</template>

<script>
export default {
name: 'Toolbar',
props: ['environnement']
}
</script>

<style>

</style>
