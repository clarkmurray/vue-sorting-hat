import welcome from './components/welcome.vue';
import quiz from './components/quiz.vue';
import sorting from './components/sorting.vue';
import houses from './components/houses.vue';

export default [

	{path: '/', component: welcome},
	{path: '/quiz', component: quiz},
	{path: '/sorting/:house', component: sorting},
	{path: '/house/:house', component: houses}

]