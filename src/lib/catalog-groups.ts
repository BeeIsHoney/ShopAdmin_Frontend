import type {Product} from './types';
export function requestedGroup(query:string){const id=new URLSearchParams(query).get('group');return id&&/^[1-9]\d{0,17}$/.test(id)?id:'';}
export function groupTotals(products:Product[],groupId:number){
 let games=0,packages=0;
 for(const game of products){const count=game.packages.filter(p=>p.groupId===groupId).length;if(count){games++;packages+=count;}}
 return {games,packages};
}
