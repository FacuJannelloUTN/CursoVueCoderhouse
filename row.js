Vue.component('row', { // Los componentes deben declararse antes de la instancia de vue
  props: {
    name: {
      type: String, // Tipos String, Number, Boolean, Array, Object, Date, Function, Symbol
      default: '*Sin nombre*' 
    },
    salary: Number,
    languages: Array,
    textBootstrap: String
  },
  computed: {
    textColor: () => {
      return `text-${this.textBootstrap}`
    }
  },
  template: `
    <tr v-bind:class="textColor">
      <td>{{ name }}</td>
      <td>$ {{ salary }}</td>
      <td> 
        <div>
          <span v-for="(l,i) in languages">
            {{ l.name }}
            <span v-if="i !== (languages.length-1)">,</span>
          </span>
       </div>
      </td>
   </tr>   
  `
})

var app = new Vue({
  el: '#app',
  data: {
    person1: {
      name: 'Carlos',
      salary: 90000,
      languages: [
        {
          name: 'SQL',
          difficulty: 2
        },
        {
          name: 'Python',
          difficulty: 4
        },
      ],
      css: {
        textColor: 'danger'
      }
    },
    person2: {
      name: 'Jimena',
      salary: 80000,
      languages: [
        {
          name: 'Javascript',
          difficulty: 4
        }
      ]
    },
    person3: {
      name: 'Raúl',
      salary: 135000,
      languages: [
        {
          name: 'Javascript',
          difficulty: 4
        },
        {
          name: 'C#',
          difficulty: 5
        },
        {
          name: 'C++',
          difficulty: 5
        }
      ]
    }
  }
})