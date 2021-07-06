const app = new Vue({
    el: '#app',
    data: {
        titulo: "Request a new institution or branch",
        titulo_partners: "Lista de Socios",
        button: "Request add new partner",
        partners: [],
        acronym: '',
        name: '',
        type: '',
        country: '',
        city: '',
        link: '',
        branch: '',
        lista: false, 
        validado: false,
        foo: false
    },
    methods: {
        addPartner: function(){
            this.partners.push({
                sucursal: this.branch,
                acronimo: this.acronym,
                nombre: this.name,
                tipo: this.type,
                pais: this.country,
                ciudad: this.city,
                website: this.link
            });
            console.log("branch", this.branch)
            if(this.branch != '' && this.name != '' && this.type != '' && this.country != '' && this.city != ''){
                this.validado = true
                console.log("completo")
            }
            if(this.validado===true){
                console.log("Agrego partner", this.partners);
                localStorage.setItem('cgiar-vue', JSON.stringify(this.partners)); 
                this.branch = '',
                this.acronym = '',
                this.name = '',
                this.type = '',
                this.country = '',
                this.city = '',
                this.link = ''
            }else{
                console.log("Ingrese datos restantes")
            }
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('cgiar-vue'));
        if (datosDB === null){
            this.partners = [];
        } else {
            this.partners = datosDB;
            this.lista = true;
            console.log("entro")
        }
    }
});