<script setup lang="ts">
  import { ref, computed } from "vue";
  import { storeToRefs } from "pinia";
  import type { QTableProps } from 'quasar'
  import { useObjectDetailsStore } from "@/ui/stores/object_details";
  
  const objectDetailsStore = useObjectDetailsStore();
  const { objectDetails, objectDetections, objectNonDetections} = storeToRefs(objectDetailsStore);

  const showingAidTooltip = ref(false)
  const dateFormatIndex = ref(0);
  const locFormatIndex = ref(0);
  function toogleDateFromat() {dateFormatIndex.value = (dateFormatIndex.value + 1) % 2;}
  function toogleLocFormat() {locFormatIndex.value = (locFormatIndex.value + 1) % 2;}
  const dateFormatsAviable = computed(() => {
    return [
      {
        name: "mjd",
        button_label: "View Date",
        button_callable: toogleDateFromat,
        discovery_date: objectDetails.value.firstmjd,
        last_alert: objectDetails.value.lastmjd,
      },{
        name: "greg",
        button_label: "View Mjd",
        button_callable: toogleDateFromat,
        discovery_date: objectDetails.value.firstGreg,
        last_alert: objectDetails.value.lastGreg,
      }
    ]
  });
  const locFormatsAviable =  computed(() => {
    return [
      {
        name: "deg",
        button_label: "View H:M:S",
        button_callable: toogleLocFormat,
        ra: objectDetails.value.ra,
        dec: objectDetails.value.dec,
      },{
        name: "hms",
        button_label: "View Degrees",
        button_callable: toogleLocFormat,
        ra: objectDetails.value.raHms,
        dec: objectDetails.value.decHms,
      }
    ]
  });

  const columns_definition: QTableProps['columns'] = [
    {name: 'name', field: 'name', label: '', align: 'left', required: true},
    {name: 'values', field: 'value', label: '', align: 'center', required: true},
    {name: 'extra', field: 'extra', label: '', align: 'left', required: false},
  ];

  const objectDetailsTableRows = computed(() => {
    return [
      {name: 'Object', value: objectDetails.value.aid, extra: {type: 'tooltip', tooltip_msg: "The object identifier for Alerce"}},
      {name: 'Detections', value: objectDetections.value.length},
      {name: 'Discovery Date', value: dateFormatsAviable.value[dateFormatIndex.value].discovery_date, extra: {type: 'button', button_callable: dateFormatsAviable.value[dateFormatIndex.value].button_callable ,button_label: dateFormatsAviable.value[dateFormatIndex.value].button_label}},
      {name: 'Last Detection Date', value:  dateFormatsAviable.value[dateFormatIndex.value].last_alert,  extra: {type:'button', button_callable: dateFormatsAviable.value[dateFormatIndex.value].button_callable ,button_label: dateFormatsAviable.value[dateFormatIndex.value].button_label}},
      {name: 'RA(J2000)', value: locFormatsAviable.value[locFormatIndex.value].ra, extra: {type: 'button', button_callable: locFormatsAviable.value[locFormatIndex.value].button_callable, button_label:locFormatsAviable.value[locFormatIndex.value].button_label}},
      {name: 'DEC(J2000)', value: locFormatsAviable.value[locFormatIndex.value].dec, extra: {type: 'button', button_callable: locFormatsAviable.value[locFormatIndex.value].button_callable, button_label:locFormatsAviable.value[locFormatIndex.value].button_label}},
      {name: 'Non Detections', value: objectNonDetections.value.length},
    ]
  });
</script>


<template>
  <q-card flat bordered class="" style="height: 100%">
    <q-table
      :rows='objectDetailsTableRows'
      :columns='columns_definition'
      row-key='name'
      :rows-per-page-options='[0]'
      hide-pagination
      hide-header
    >
      <template v-slot:body-cell-extra="props">
        <q-td :props="props">
          <span v-if="props.row.extra">
            <q-btn v-if="props.row.extra.type === 'button'" @click="props.row.extra.button_callable" :label="props.row.extra.button_label"></q-btn>
            <q-icon v-if="props.row.extra.type === 'tooltip'" name="help">
              <q-tooltip v-model="showingAidTooltip">{{ props.row.extra.tooltip_msg }}</q-tooltip>
            </q-icon>          
          </span>
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>

<style lang="sass" scoped></style>
