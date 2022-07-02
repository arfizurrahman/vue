import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import NotFound from './pages/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'}, // An alternative would be alias.
        // { path: '/teams', component: TeamsList, alias:'/'}, // with alias URL doesn't change
        { 
            name: 'teams',
            path: '/teams',
            meta: {needsAuth: true},
            components: {
                default: TeamsList,
                footer: TeamsFooter
            }, children:[
                { name:'team-members', path: ':teamId', component: TeamMembers, props: true},
            ]
        },
        { path: '/users', components: {
            default: UsersList,
            footer: UsersFooter
        },
        beforeEnter(to, from, next){
            console.log('users beforeEnter')
            next();
        }
        },
        { path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active', // override default active class,
    scrollBehavior(_, _2, savedPosition){ // _, _2 instead of to, from to reach the third arg
        if(savedPosition) {
            return savedPosition;
        }
        return {left:0, top: 0};
    }
});

router.beforeEach(function(to, from ,next){
    console.log('Global beforeEach');
    console.log(to, from);
    if(to.meta.needsAuth){
        console.log('Needs auth!')
    }
    //next takes boolean or navigation object
    // if(to.name==='team-members'){
    //     next();
    // }else{
    //     next({name: 'team-members', 
    //     params: {teamId: 't2'}});
    // }
    next();
});

router.afterEach(function(to, from){
    console.log('Global afterEach')
    console.log(from)
    // can be used for sending analytics data to server
    // or sending navigation info of a  to server 
});


export default router;
