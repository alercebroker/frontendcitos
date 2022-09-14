<script setup lang="ts">
  import { ref, reactive, computed } from "vue";
  import { storeToRefs } from "pinia";
  import type { QTableProps } from 'quasar'
  import { useObjectDetailsStore } from "@/ui/stores/object_details";
  import type { MagStatEntity } from "@/domain/objects/entities";
  
  const objectDetailsStore = useObjectDetailsStore()
  const { objectMagStats } = storeToRefs(objectDetailsStore)

  const columns_definition: QTableProps['columns'] = [
    {name: 'stat', field: 'stat', label: 'Stat', align: 'left', required: true},
    {name: 'g', field: 'g', label: 'g', align: 'center', required: true},
    {name: 'f', field: 'f', label: 'f ', align: 'left', required: true},
  ];
  const magStatsList = computed( () => {
    if (objectMagStats.value.length < 2) {
      return []
    } 
    let g_data: MagStatEntity = ( (objectMagStats.value[0].fid === 1) ? objectMagStats.value[0] : objectMagStats.value[0] );
    let f_data: MagStatEntity = ( (objectMagStats.value[0].fid === 1) ? objectMagStats.value[0] : objectMagStats.value[1] );
    
    let result = Object.keys(g_data).map( ( key) => {
      let g_value = g_data[key as keyof MagStatEntity];
      let f_value = f_data[key as keyof MagStatEntity];
      return {stat: key, g: g_value, f: f_value};
    })
    return result;
  })
</script>


<template>
  <q-card flat bordered class="" style="height: 100%">
    <q-table
      :rows='magStatsList'
      :columns='columns_definition'
      row-key='name'
      :rows-per-page-options='[5, 10, 15, 0]'
    >
    </q-table>
  </q-card>
</template>

<style lang="sass" scoped></style>
