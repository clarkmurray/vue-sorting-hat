import welcome from './components/welcome.vue';
import quiz from './components/quiz.vue';
import houses from './components/houses.vue';

export default [

	{path: '/', component: welcome},
	{path: '/quiz', component: quiz},
	{path: '/house', component: houses}

]