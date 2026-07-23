import { LightningElement } from 'lwc';

export default class SearchAndFilter extends LightningElement {

    search='';
    category='ALL';
    sortBy='NAME_ASC';

    columns=[
        
           {label:'Name', fieldName:'name'},
           {label:'Category', fieldName:'category'},
           {label:'Score', fieldName:'score', type:'number'}
        
    ];

    items=[
        {id:'1', name:'Apex', category:'Learning', score:'80'},
        {id:'2', name:'LWC', category:'Learning', score:'76'},
        {id:'3', name:'Football', category:'Playing', score:'90'},
        {id:'4', name:'Handball', category:'Playing', score:'99'},
        {id:'5', name:'Dev', category:'Career', score:'70'},
        {id:'6', name:'Dev Ops', category:'Career', score:'95'}

    ];

    get categoryOptions(){
        return [
            {label:'All',value:'ALL'},
            {label:'Learning',value:'Learning'},
            {label:'Playing',value:'Playing'},
            {label:'Career',value:'Career'}
        ];
    }

    get sortOptions(){

        return [
            
            {label:'Name [A-Z]',value:'NAME_ASC'},
            {label:'Name [Z-A]',value:'NAME_DESC'}
        ];

    }


    handleCategory(event){
       this.category=event.target.value;
    }

    handleSort(event){
    this.sortBy=event.target.value;
    }

    handleSearch(event){

       this.search=event.target.value;
    }

    get filteredData(){
        const textToSearch= (this.search || '').toLowerCase();

        let result=this.items.filter(item => {

            const textMatch=item.name.toLocaleLowerCase().includes(textToSearch);
            const categoryMatch=this.category==='ALL' || item.category==this.category; 

            return textMatch && categoryMatch;
        });

        
        result=[...result].sort((a,b)=>{

            switch(this.sortBy){
                case 'NAME_ASC':
                return a.name.localeCompare(b.name);

                case 'NAME_DESC':
                return b.name.localeCompare(a.name);
            }

        });

        return result;
    }
}