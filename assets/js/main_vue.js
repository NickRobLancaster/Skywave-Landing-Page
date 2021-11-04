const app = Vue.createApp({
    data() {
        return {
            //data from form
            campaign_id: '1416',
            first_name: '',
            fn_alert: false,
            last_name: '',
            ln_alert: false,
            email: '',
            atSymbol: false,
            periodSymbol: false,
            email_alert: false,
            primary_phone: '',
            primary_phone_alert: false,
            company_name: '',
            company_name_alert: false,
            
            //hide form
            form_is_hidden: false,
            //validation alert failed
            failed_validation_alert: false,
            //validation alert passed - submit
            success_confirmation: false
            
            
            
           
        };
    },
    watch: {
        test:function(){
            
        }
    },
    computed: {
       
    },
    methods: {
        validateFirstName(){
            if(this.first_name.length < 2){
                this.fn_alert = true;
            }
            if(this.first_name.length >= 2){
                this.fn_alert = false;
            }
        },
        
        validateLastName(){
            if(this.last_name.length < 2){
                this.ln_alert = true;
            }
            if(this.last_name.length >= 2){
                this.ln_alert = false;
            }
        },
        
        validateEmail(){
            //check if @ exists TRUE/FALSE
            var atSymbol = this.email.includes("@");
            this.atSymbol = atSymbol;
            //check if PERIOD exists TRUE/FALSE
            var periodSymbol = this.email.includes(".");
            this.periodSymbol = periodSymbol;
            
            if(this.email.length < 5){
                this.email_alert = true;
            }
            if(this.atSymbol == false){
                this.email_alert = true;
            }
            if(this.periodSymbol == false){
                this.email_alert = true;
            }

            if(this.atSymbol == true && this.periodSymbol == true && this.email.length >=5){
                this.email_alert = false;
            }
        },
        
        validatePhone(){
            if(this.primary_phone.length !== 10){
                this.primary_phone_alert = true;
            }
            if(this.primary_phone.length == 10){
                this.primary_phone_alert = false;
            }
        },
        
        validateCompanyName(){
            if(this.company_name.length < 2){
                this.company_name_alert = true;
            }
            if(this.company_name.length >= 2){
                this.company_name_alert = false;
            }
        },
        submitFormData(){
            //validate first name
            if(this.first_name.length < 2){
                this.fn_alert = true;
            }
            if(this.first_name.length >= 2){
                this.fn_alert = false;
            }
            //validate last name
            if(this.last_name.length < 2){
                this.ln_alert = true;
            }
            if(this.last_name.length >= 2){
                this.ln_alert = false;
            }
            //validate email
            //check if @ exists TRUE/FALSE
            var atSymbol = this.email.includes("@");
            this.atSymbol = atSymbol;
            //check if PERIOD exists TRUE/FALSE
            var periodSymbol = this.email.includes(".");
            this.periodSymbol = periodSymbol;
            
            if(this.email.length < 5){
                this.email_alert = true;
            }
            if(this.atSymbol == false){
                this.email_alert = true;
            }
            if(this.periodSymbol == false){
                this.email_alert = true;
            }
            if(this.atSymbol == true && this.periodSymbol == true && this.email.length >=5){
                this.email_alert = false;
            }
            //validate primary phone
            if(this.primary_phone.length !== 10){
                this.primary_phone_alert = true;
            }
            if(this.primary_phone.length == 10){
                this.primary_phone_alert = false;
            }
            //validate company name
            if(this.company_name.length < 2){
                this.company_name_alert = true;
            }
            if(this.company_name.length >= 2){
                this.company_name_alert = false;
            }
            
            
            if(this.fn_alert == true || this.ln_alert == true || this.email_alert == true || this.primary_phone_alert == true || this.company_name_alert == true){
                //log failed validation
                console.log("Failed Validation");
                
                this.failed_validation_alert = true;
                setTimeout(() => this.failed_validation_alert = false, 5000);
            }
            
            if(this.fn_alert == false && this.ln_alert == false && this.email_alert == false && this.primary_phone_alert == false && this.company_name_alert == false){
                //log passed validation
                console.log("Passed Validation");
                //axios post
                axios.post('https://api.skywave.app/api/import/107/441e7a4aa1ecb912edd0ec05f9dab895bc1a80be', {
                            campaign_id: this.campaign_id,
                            primary_phone: this.primary_phone,
                            first_name: this.first_name,
                            last_name: this.last_name,
                            email: this.email,                           
                            company_name: this.company_name
            }, {
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
               }
            }).then(response => {
                console.log(response);
            });
            //END AXIOS POST
            
            this.form_is_hidden = true;
            this.success_confirmation = true;
            }           
        }
    }

});

app.mount('#app_body');