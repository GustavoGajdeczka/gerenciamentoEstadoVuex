<template>
    <div>
        <h1>Counter: {{ counter }}</h1>
        <button @click="diminui">Diminuir</button>
        <button @click="aumenta">aumenta</button>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
    name: 'Counter',
    computed: {
        ...mapGetters([
            'counter'
        ])
    },
    methods: {
        ...mapActions([
            'diminui',
            'aumenta'
        ])
    }
}
</script>
