<template>
    <div>
        <!-- <Navbarcomponent></Navbarcomponent> -->
        <!-- <Tablecomponent></Tablecomponent> -->
        <Temptable></Temptable>
        <graph></graph>

    </div>
</template>


<script>
import Navbarcomponent from '@/components/Navbarcomponent'
import Tablecomponent from '@/components/Tablecomponent'
import Temptable from '@/components/Temptable'
import graph from '@/components/graph'
export default {
    
    name:"Homepage",
    components:{
        Navbarcomponent,
        Tablecomponent,
        Temptable,
        graph
    }
}
</script>

