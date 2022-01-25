const app = new Vue({
    el: '#app',
    data: {
        contatore: 10,
        emails : [],
    },
    mounted: function(){
            for (let i = 0; i < 10; i++) {
                // Make a request for a user with a given ID
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // handle success
                    console.log(response);
                    this.emails.push(response.data.response)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                }); 
            }
        }
})