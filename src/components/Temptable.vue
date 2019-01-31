<template>
<div class="" >
    <br>
    <br>
    <div class="float-right" style="color:white">
      <b-card title="Running Contests" tag="article" style="max-width: 20rem;" class="mb-2 bg-success">
        <p class="text-left" style="font-size:70px">48</p>
      </b-card>
    </div>
  <b-container fluid style="width:900px" class="float-left" >
    <!-- User Interface controls -->
     <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col> -->
      <!-- <b-col md="6" class="my-1">
         <b-form-group horizontal label="Sort direction" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
              <option value="last">Last</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col> -->
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Per page" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
             @filtered="onFiltered"
    style="width:900px" id="tlen">
      <template slot="Contest_Name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
      <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal size="lg" id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <h1>{{ modalInfo.content}}</h1>
    </b-modal>

  </b-container>
</div>
</template>

<script>
const items = [
  { isActive: true, No_Of_Persons_registered: 40, Contest_Name: { first: 'Dickerson' } },
  { isActive: false, No_Of_Persons_registered: 21, Contest_Name: { first: 'Larsen' } },
  {
    isActive: false,
    No_Of_Persons_registered: 9,
    Contest_Name: { first: 'Mini', last: 'Navarro' },
    _rowVariant: ''
  },
  { isActive: false, No_Of_Persons_registered: 89, Contest_Name: { first: 'Geneva' } },
  { isActive: true, No_Of_Persons_registered: 38, Contest_Name: { first: 'Jami' } },
  { isActive: false, No_Of_Persons_registered: 27, Contest_Name: { first: 'Essie' } },
  { isActive: true, No_Of_Persons_registered: 40, Contest_Name: { first: 'Thor' } },
  {
    isActive: true,
    No_Of_Persons_registered: 87,
    Contest_Name: { first: 'Larsen', last: 'Shaw' },
    _cellVariants: { No_Of_Persons_registered: '', isActive: '' }
  },
  { isActive: false, No_Of_Persons_registered: 26, Contest_Name: { first: 'Mitzi' }},
  { isActive: false, No_Of_Persons_registered: 22, Contest_Name: { first: 'Genevieve' }},
  { isActive: true, No_Of_Persons_registered: 38, Contest_Name: { first: 'John' } },
  { isActive: false, No_Of_Persons_registered: 29, Contest_Name: { first: 'Dick'} }
]

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'Contest_Name', label: 'Contest_Name', sortable: true, sortDirection: 'desc' },
        { key: 'No_Of_Persons_registered', label: 'No_Of_Persons_registered', sortable: true, 'class': 'text-center' },
        { key: 'isActive', label: 'is Active' , sortable: true },
        { key: 'type', lable:'Type' ,sortable: true},
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' }
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    info (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item.Contest_Name, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
